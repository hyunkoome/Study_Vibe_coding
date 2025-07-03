// 쿠팡 상품 페이지에서 모든 리뷰 페이지를 순회하며 리뷰 정보를 추출하는 content script
// 각 페이지의 리뷰 본문, 작성자, 날짜, 평점 등을 모두 수집하여 popup에 전달

// 한 페이지의 리뷰를 추출하는 함수
function getCurrentPageReviews(options = {}) {
  const review_articles = document.querySelectorAll('article.sdp-review__article__list.js_reviewArticleReviewList');
  const reviews = [];
  const include_rating = options.include_rating !== false;
  const include_date = options.include_date !== false;
  for (let i = 0; i < review_articles.length; i++) {
    const article = review_articles[i];
    const review_text = article.querySelector('.sdp-review__article__list__review__content.js_reviewArticleContent span')?.innerText.trim() || '';
    const author = article.querySelector('.sdp-review__article__list__info__user__name')?.innerText.trim() || '';
    const date = article.querySelector('.sdp-review__article__list__info__product-info__reg-date')?.innerText.trim() || '';
    let rating = '';
    if (include_rating) {
      rating = article.querySelector('.sdp-review__article__list__info__product-info__star-orange')?.getAttribute('data-rating') || '';
    }
    const review = { review_text, author };
    if (include_date) review.date = date;
    if (include_rating) review.rating = rating;
    reviews.push(review);
  }
  return reviews;
}

// 리뷰 영역 로딩 인디케이터가 사라질 때까지 대기하는 함수
function waitForReviewLoading(timeout = 7000) {
  return new Promise((resolve) => {
    const start = Date.now();
    const check = () => {
      // 쿠팡의 로딩 인디케이터 클래스
      const loading = document.querySelector('.sdp-review__article__list__loading');
      if (!loading || loading.style.display === 'none') {
        resolve();
      } else if (Date.now() - start > timeout) {
        resolve(); // 타임아웃 시에도 진행
      } else {
        setTimeout(check, 100);
      }
    };
    setTimeout(check, 100);
  });
}

// 페이지 전환 후 DOM 변경을 감지하여 대기하는 함수 (보강)
async function waitForPageChange(prevFirstReviewText, timeout = 7000) {
  const start = Date.now();
  while (true) {
    // 1. 로딩 인디케이터가 사라질 때까지 대기
    await waitForReviewLoading();
    // 2. 첫 리뷰 텍스트가 바뀌었는지 확인
    const firstReview = document.querySelector('.sdp-review__article__list__review__content.js_reviewArticleContent span');
    if (firstReview && firstReview.innerText.trim() !== prevFirstReviewText) {
      break;
    }
    if (Date.now() - start > timeout) {
      break; // 타임아웃 시에도 진행
    }
    await new Promise(r => setTimeout(r, 100));
  }
}

// 전체 리뷰 페이지 수를 계산하는 함수
function getTotalPages() {
  // 페이지 번호 버튼의 data-page 속성 중 최대값
  const pageBtns = Array.from(document.querySelectorAll('.sdp-review__article__page__num.js_reviewArticlePageBtn'));
  if (pageBtns.length === 0) return 1;
  return Math.max(...pageBtns.map(btn => parseInt(btn.getAttribute('data-page'), 10)).filter(Boolean));
}

// 상품 페이지에서 총 리뷰 개수를 추출하는 함수 (보완)
function getTotalReviewCount() {
  // 1. '상품평 n개' 텍스트에서 추출 (div)
  const headerCount = document.querySelector('.review-average-header-total-count');
  if (headerCount) {
    const num = parseInt(headerCount.textContent.replace(/[^0-9]/g, ''), 10);
    if (!isNaN(num)) return num;
  }
  // 2. '상품평 (n)' 형태의 a 태그에서 추출
  const aTag = Array.from(document.querySelectorAll('a')).find(
    el => el.textContent.includes('상품평') && /\([0-9,]+\)/.test(el.textContent)
  );
  if (aTag) {
    const match = aTag.textContent.match(/\(([0-9,]+)\)/);
    if (match) {
      const num = parseInt(match[1].replace(/,/g, ''), 10);
      if (!isNaN(num)) return num;
    }
  }
  // 3. 페이지네이션 마지막 번호 × 한 페이지 리뷰 수로 추정
  const totalPages = getTotalPages();
  const pageReviews = getCurrentPageReviews();
  return totalPages * pageReviews.length;
}

// 크롤링 진행상황과 리뷰 데이터를 chrome.storage.local에 저장하는 함수
function saveCrawlingState(reviews, progress) {
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    try {
      chrome.storage.local.set({
        coupang_reviews: reviews,
        coupang_progress: progress
      }, () => {
        if (chrome.runtime && chrome.runtime.lastError) {
          showToast('크롤링 저장 중 오류 발생: 확장 프로그램이 비활성화되었거나 새로고침되었습니다.', true);
        }
      });
    } catch (e) {
      showToast('크롤링 저장 중 예외 발생: 확장 프로그램이 비활성화되었거나 새로고침되었습니다.', true);
    }
  }
}

// 모든 리뷰 페이지를 순회하며 리뷰를 수집하는 비동기 함수 (구간별 페이지네이션 지원)
async function getAllReviews(options = {}) {
  // 전체 리뷰 개수, 본문 없는 리뷰 개수, 실제 크롤링된 리뷰 개수 누적 변수
  let total_review_count = 0;
  let empty_review_count = 0;
  let all_reviews = [];
  let max_count = options.max_count;
  if (!max_count || max_count < 1) {
    max_count = getTotalReviewCount();
  }
  let totalPages = getTotalPages();
  let currentPage = 1;
  let pageCrawled = new Set();

  while (true) {
    const pageBtns = Array.from(document.querySelectorAll('.js_reviewArticlePageBtn'));
    for (let btn of pageBtns) {
      const pageNum = parseInt(btn.getAttribute('data-page'), 10);
      if (pageCrawled.has(pageNum)) continue;
      btn.click();
      const firstReview = document.querySelector('.sdp-review__article__list__review__content.js_reviewArticleContent span');
      const prevFirstReviewText = firstReview ? firstReview.innerText.trim() : '';
      await waitForPageChange(prevFirstReviewText);
      const pageReviews = getCurrentPageReviews(options);
      total_review_count += pageReviews.length; // 전체 리뷰 개수 누적
      // 본문 없는 리뷰 카운트 및 정상 리뷰만 누적
      const filteredReviews = [];
      for (const review of pageReviews) {
        if (!review.review_text) {
          empty_review_count++;
          continue;
        }
        filteredReviews.push(review);
      }
      all_reviews.push(...filteredReviews);
      pageCrawled.add(pageNum);
      // 진행상황 계산
      const percent = Math.min(100, Math.round((all_reviews.length / max_count) * 100));
      const progress = {
        collected: all_reviews.length,
        current: pageCrawled.size,
        total: totalPages,
        percent,
        target: max_count,
        status: percent === 100 ? 'done' : 'crawling'
      };
      // 진행상황/리뷰 저장
      saveCrawlingState(all_reviews, progress);
      chrome.runtime.sendMessage({
        type: 'CRAWL_PROGRESS',
        ...progress
      });
      if (all_reviews.length >= max_count) {
        all_reviews = all_reviews.slice(0, max_count);
        break;
      }
    }
    const nextBtn = document.querySelector('.js_reviewArticlePageNextBtn.sdp-review__article__page__next--active');
    if (nextBtn && !nextBtn.disabled) {
      const prevPageBtns = document.querySelectorAll('.js_reviewArticlePageBtn');
      nextBtn.click();
      await new Promise((resolve) => {
        const start = Date.now();
        const check = () => {
          const newPageBtns = document.querySelectorAll('.js_reviewArticlePageBtn');
          if (newPageBtns.length && newPageBtns[0] !== prevPageBtns[0]) {
            resolve();
          } else if (Date.now() - start > 5000) {
            resolve();
          } else {
            setTimeout(check, 100);
          }
        };
        setTimeout(check, 100);
      });
      totalPages = getTotalPages();
    } else {
      break;
    }
  }
  // 마지막에 100% 진행상황/리뷰 저장
  const finalProgress = {
    collected: all_reviews.length,
    current: pageCrawled.size,
    total: totalPages,
    percent: 100,
    target: max_count,
    status: 'done'
  };
  saveCrawlingState(all_reviews, finalProgress);
  chrome.runtime.sendMessage({
    type: 'CRAWL_PROGRESS',
    ...finalProgress
  });
  // 크롤링 완료 후 최종 결과 메시지 안내
  const crawled_count = all_reviews.length;
  const result_message = `총 ${total_review_count}개 리뷰 중, 본문 없는 ${empty_review_count}개 리뷰를 제외하고 ${crawled_count}개를 크롤링했습니다.`;
  showToast(result_message, true);
  // 버튼 텍스트 변경
  const crawlBtn = document.getElementById('crawl-btn');
  if (crawlBtn) crawlBtn.textContent = '리뷰 크롤링 완료';
  return all_reviews;
}

// 크롤링 진행상황을 Toast(투명 알림창)로 표시하는 함수
function showToast(message, done = false) {
  let toast = document.getElementById('coupang-review-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'coupang-review-toast';
    toast.style.position = 'fixed';
    toast.style.left = '50%';
    toast.style.bottom = '40px';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = 'rgba(40,40,40,0.92)';
    toast.style.color = '#fff';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '8px';
    toast.style.fontSize = '16px';
    toast.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
    toast.style.zIndex = '99999';
    toast.style.pointerEvents = 'none';
    document.body.appendChild(toast);
  }
  toast.innerText = message;
  toast.style.display = 'block';
  if (done) {
    setTimeout(() => { toast.style.display = 'none'; }, 2000);
  }
}

// CRAWL_PROGRESS 메시지 수신 시 Toast 표시
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'CRAWL_PROGRESS') {
    // 진행상황 메시지 예시: '102개의 리뷰를 수집했습니다...(현재 페이지: 33, 목표: 169개)'
    const message = `${msg.collected || ''}개의 리뷰를 수집했습니다... (현재 페이지: ${msg.current}, 목표: ${msg.target || msg.total}개)`;
    showToast(message, msg.percent === 100);
  }
});

// popup에서 메시지를 받으면 모든 페이지의 리뷰 데이터를 전송
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GET_REVIEWS') {
    // 비동기 함수 실행 후 응답
    getAllReviews(request.options).then((reviews) => {
      sendResponse({ reviews });
    });
    return true;
  }
  // 전체 리뷰 개수 요청 처리
  if (request.type === 'GET_TOTAL_REVIEW_COUNT') {
    sendResponse({ total: getTotalReviewCount() });
  }
});

// Toast(투명 알림창) 함수가 없으면 추가
if (typeof showToast !== 'function') {
  window.showToast = function (msg, duration = 2000) {
    let toast = document.createElement('div');
    toast.textContent = msg;
    toast.style.position = 'fixed';
    toast.style.bottom = '30px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = 'rgba(51,153,255,0.95)';
    toast.style.color = '#fff';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '8px';
    toast.style.fontSize = '16px';
    toast.style.zIndex = 99999;
    toast.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
    document.body.appendChild(toast);
    setTimeout(() => { toast.remove(); }, duration);
  };
}

// 챗봇 UI 주입 함수
function injectChatbot() {
  // 이미 주입되었는지 확인
  if (document.getElementById('chatbot-container')) {
    return;
  }

  // 챗봇 HTML 생성
  const chatbotHTML = `
    <!-- 챗봇 컨테이너 -->
    <div id="chatbot-container" class="chatbot-container">
        <!-- 챗봇 헤더 -->
        <div class="chatbot-header">
            <div class="chatbot-header-content">
                <div class="chatbot-profile">
                    <div class="chatbot-avatar">🤖</div>
                    <div class="chatbot-info">
                        <div class="chatbot-name">쿠팡 도우미</div>
                        <div class="chatbot-status">온라인</div>
                    </div>
                </div>
                <button class="chatbot-close" id="chatbot-close">×</button>
            </div>
        </div>

        <!-- 채팅 메시지 영역 -->
        <div class="chatbot-messages" id="chatbot-messages">
            <!-- 환영 메시지 -->
            <div class="message bot-message">
                <div class="message-avatar">🤖</div>
                <div class="message-content">
                    <div class="message-bubble">
                        안녕하세요! 쿠팡 도우미입니다. 🛒<br>
                        상품에 대해 궁금한 점이 있으시면 언제든 물어보세요!
                    </div>
                    <div class="message-time">지금</div>
                </div>
            </div>
        </div>

        <!-- 메시지 입력 영역 -->
        <div class="chatbot-input-area">
            <div class="chatbot-input-container">
                <input type="text" id="chatbot-input" class="chatbot-input" placeholder="메시지를 입력하세요...">
                <button id="chatbot-send" class="chatbot-send-btn">전송</button>
            </div>
        </div>
    </div>

    <!-- 챗봇 열기 버튼 -->
    <div id="chatbot-toggle" class="chatbot-toggle">
        <div class="chatbot-toggle-icon">💬</div>
    </div>
  `;

  // 챗봇 CSS 생성
  const chatbotCSS = `
    /* 챗봇 전체 컨테이너 */
    .chatbot-container {
        position: fixed;
        bottom: 80px;
        right: 20px;
        width: 350px;
        height: 500px;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        display: flex;
        flex-direction: column;
        z-index: 10000;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        border: 1px solid #e1e5e9;
        transform: translateY(20px);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .chatbot-container.show {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }

    /* 챗봇 헤더 */
    .chatbot-header {
        background: linear-gradient(135deg, #fee500 0%, #ffd700 100%);
        padding: 16px 20px;
        border-radius: 12px 12px 0 0;
        border-bottom: 1px solid #e1e5e9;
    }

    .chatbot-header-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .chatbot-profile {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .chatbot-avatar {
        width: 40px;
        height: 40px;
        background: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .chatbot-info {
        display: flex;
        flex-direction: column;
    }

    .chatbot-name {
        font-weight: 600;
        font-size: 16px;
        color: #191919;
        line-height: 1.2;
    }

    .chatbot-status {
        font-size: 12px;
        color: #666;
        margin-top: 2px;
    }

    .chatbot-close {
        background: none;
        border: none;
        font-size: 24px;
        color: #666;
        cursor: pointer;
        padding: 4px;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.2s;
    }

    .chatbot-close:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    /* 메시지 영역 */
    .chatbot-messages {
        flex: 1;
        padding: 16px;
        overflow-y: auto;
        background: #f8f9fa;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    /* 메시지 스타일 */
    .message {
        display: flex;
        gap: 8px;
        max-width: 100%;
    }

    .bot-message {
        align-self: flex-start;
    }

    .user-message {
        align-self: flex-end;
        flex-direction: row-reverse;
    }

    .message-avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        flex-shrink: 0;
    }

    .bot-message .message-avatar {
        background: #fee500;
    }

    .user-message .message-avatar {
        background: #007aff;
        color: white;
    }

    .message-content {
        display: flex;
        flex-direction: column;
        max-width: 70%;
    }

    .message-bubble {
        padding: 12px 16px;
        border-radius: 18px;
        font-size: 14px;
        line-height: 1.4;
        word-wrap: break-word;
        position: relative;
    }

    .bot-message .message-bubble {
        background: #fff;
        color: #191919;
        border: 1px solid #e1e5e9;
        border-bottom-left-radius: 4px;
    }

    .user-message .message-bubble {
        background: #007aff;
        color: #fff;
        border-bottom-right-radius: 4px;
    }

    .message-time {
        font-size: 11px;
        color: #999;
        margin-top: 4px;
        align-self: flex-start;
    }

    .user-message .message-time {
        align-self: flex-end;
    }

    /* 입력 영역 */
    .chatbot-input-area {
        padding: 16px;
        background: #fff;
        border-top: 1px solid #e1e5e9;
        border-radius: 0 0 12px 12px;
    }

    .chatbot-input-container {
        display: flex;
        gap: 8px;
        align-items: center;
    }

    .chatbot-input {
        flex: 1;
        padding: 12px 16px;
        border: 1px solid #e1e5e9;
        border-radius: 24px;
        font-size: 14px;
        outline: none;
        transition: border-color 0.2s;
        background: #f8f9fa;
    }

    .chatbot-input:focus {
        border-color: #007aff;
        background: #fff;
    }

    .chatbot-input::placeholder {
        color: #999;
    }

    .chatbot-send-btn {
        background: #007aff;
        color: #fff;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.2s;
        flex-shrink: 0;
    }

    .chatbot-send-btn:hover {
        background: #0056cc;
    }

    .chatbot-send-btn:disabled {
        background: #ccc;
        cursor: not-allowed;
    }

    /* 챗봇 토글 버튼 */
    .chatbot-toggle {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #fee500 0%, #ffd700 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 4px 16px rgba(254, 229, 0, 0.4);
        z-index: 9999;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .chatbot-toggle:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(254, 229, 0, 0.6);
    }

    .chatbot-toggle-icon {
        font-size: 24px;
        color: #191919;
    }

    /* 스크롤바 스타일 */
    .chatbot-messages::-webkit-scrollbar {
        width: 6px;
    }

    .chatbot-messages::-webkit-scrollbar-track {
        background: transparent;
    }

    .chatbot-messages::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 3px;
    }

    .chatbot-messages::-webkit-scrollbar-thumb:hover {
        background: #999;
    }

    /* 반응형 디자인 */
    @media (max-width: 480px) {
        .chatbot-container {
            width: calc(100vw - 40px);
            height: calc(100vh - 120px);
            bottom: 80px;
            right: 20px;
            left: 20px;
        }
        
        .chatbot-toggle {
            bottom: 20px;
            right: 20px;
        }
    }

    /* 애니메이션 */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .message {
        animation: fadeInUp 0.3s ease-out;
    }

    /* 타이핑 인디케이터 */
    .typing-indicator {
        display: flex;
        gap: 4px;
        padding: 12px 16px;
        background: #fff;
        border-radius: 18px;
        border: 1px solid #e1e5e9;
        border-bottom-left-radius: 4px;
        width: fit-content;
    }

    .typing-dot {
        width: 8px;
        height: 8px;
        background: #999;
        border-radius: 50%;
        animation: typing 1.4s infinite ease-in-out;
    }

    .typing-dot:nth-child(1) { animation-delay: -0.32s; }
    .typing-dot:nth-child(2) { animation-delay: -0.16s; }

    @keyframes typing {
        0%, 80%, 100% {
            transform: scale(0.8);
            opacity: 0.5;
        }
        40% {
            transform: scale(1);
            opacity: 1;
        }
    }
  `;

  // CSS 스타일 주입
  const style = document.createElement('style');
  style.textContent = chatbotCSS;
  document.head.appendChild(style);

  // HTML 주입
  document.body.insertAdjacentHTML('beforeend', chatbotHTML);

  // 챗봇 JavaScript 초기화
  initChatbot();
}

// 챗봇 초기화 함수
function initChatbot() {
  // 챗봇 열림 여부, 메시지 배열, 타이핑 타임아웃
  let isOpen = false;
  let messages = [];
  let typingTimeout = null;
  
  // DOM 요소들
  const container = document.getElementById('chatbot-container');
  const toggle = document.getElementById('chatbot-toggle');
  const closeBtn = document.getElementById('chatbot-close');
  const messagesContainer = document.getElementById('chatbot-messages');
  const input = document.getElementById('chatbot-input');
  const sendBtn = document.getElementById('chatbot-send');

  // 입력창 활성/비활성 함수
  // enabled: true면 활성화, false면 비활성화
  function setInputEnabled(enabled) {
    input.disabled = !enabled;
    sendBtn.disabled = !enabled;
  }

  // 크롤링 상태 확인 함수
  // 크롤링이 완료되었으면 true, 아니면 false를 콜백으로 반환
  function checkCrawlingStatus(callback) {
    if (chrome && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(['coupang_reviews', 'coupang_progress'], (result) => {
        const reviews = result.coupang_reviews;
        const progress = result.coupang_progress;
        if (!reviews || !progress || progress.percent !== 100) {
          callback(false);
        } else {
          callback(true);
        }
      });
    } else {
      callback(false);
    }
  }

  // 안내 메시지 추가 함수 (bot 메시지로 출력)
  function addNoticeMessage(text) {
    addMessage(text, 'bot');
  }

  // 챗봇 초기화 시점에 크롤링 상태 확인 및 입력창 제어
  checkCrawlingStatus((isDone) => {
    if (!isDone) {
      setInputEnabled(false);
      addNoticeMessage('리뷰 크롤링이 완료되어야 챗봇을 사용할 수 있습니다. 먼저 리뷰 크롤링을 진행해 주세요.');
    } else {
      setInputEnabled(true);
    }
  });

  // 크롤링 완료 이벤트 감지 (storage 변경 감지)
  if (chrome && chrome.storage && chrome.storage.onChanged) {
    chrome.storage.onChanged.addListener((changes, area) => {
      if (area === 'local' && changes.coupang_progress) {
        const percent = changes.coupang_progress.newValue?.percent;
        if (percent === 100) {
          setInputEnabled(true);
          addNoticeMessage('리뷰 크롤링이 완료되었습니다. 챗봇을 이용해 주세요!');
        }
      }
    });
  }

  // 이벤트 바인딩
  toggle.addEventListener('click', () => {
    if (isOpen) {
      closeChatbot();
    } else {
      openChatbot();
    }
  });
  
  closeBtn.addEventListener('click', () => {
    closeChatbot();
  });
  
  sendBtn.addEventListener('click', () => {
    sendMessage();
  });
  
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
  
  input.addEventListener('focus', () => {
    if (!isOpen) {
      openChatbot();
    }
  });
  
  document.addEventListener('click', (e) => {
    if (isOpen && 
        !container.contains(e.target) && 
        !toggle.contains(e.target)) {
      closeChatbot();
    }
  });
  
  // 챗봇 열기
  function openChatbot() {
    isOpen = true;
    container.classList.add('show');
    input.focus();
    scrollToBottom();
  }
  
  // 챗봇 닫기
  function closeChatbot() {
    isOpen = false;
    container.classList.remove('show');
    input.blur();
  }
  
  // 메시지 전송
  function sendMessage() {
    const message = input.value.trim();
    if (!message) return;
    
    addMessage(message, 'user');
    input.value = '';
    
    processBotResponse(message);
  }
  
  // 메시지 추가
  function addMessage(text, sender, timestamp = null) {
    const message = {
      id: Date.now(),
      text: text,
      sender: sender,
      timestamp: timestamp || new Date()
    };
    
    messages.push(message);
    renderMessage(message);
    scrollToBottom();
  }
  
  // 메시지 렌더링
  function renderMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${message.sender}-message`;
    messageElement.dataset.messageId = message.id;
    
    const timeString = formatTime(message.timestamp);
    
    if (message.sender === 'user') {
      messageElement.innerHTML = `
        <div class="message-content">
          <div class="message-bubble">${escapeHtml(message.text)}</div>
          <div class="message-time">${timeString}</div>
        </div>
        <div class="message-avatar">👤</div>
      `;
    } else {
      messageElement.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-content">
          <div class="message-bubble">${escapeHtml(message.text)}</div>
          <div class="message-time">${timeString}</div>
        </div>
      `;
    }
    
    messagesContainer.appendChild(messageElement);
  }
  
  // 봇 응답 처리
  async function processBotResponse(userMessage) {
    showTypingIndicator();
    
    const response = await generateResponse(userMessage);
    
    hideTypingIndicator();
    
    addMessage(response, 'bot');
  }
  
  // 응답 생성
  async function generateResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    await delay(1000 + Math.random() * 2000);
    
    if (message.includes('상품') || message.includes('제품')) {
      return '현재 보고 계신 상품에 대해 궁금한 점이 있으시면 구체적으로 말씀해 주세요! 가격, 품질, 배송 등 어떤 것이든 도와드릴 수 있어요. 🛒';
    }
    
    if (message.includes('가격') || message.includes('비용') || message.includes('얼마')) {
      return '상품 가격은 페이지 상단에서 확인하실 수 있어요. 할인 정보나 쿠폰 적용도 함께 확인해보세요! 💰';
    }
    
    if (message.includes('배송') || message.includes('택배') || message.includes('도착')) {
      return '배송은 보통 1-3일 내에 완료됩니다. 로켓배송 상품은 당일 또는 다음날 배송이 가능해요! 🚚';
    }
    
    if (message.includes('리뷰') || message.includes('평점') || message.includes('후기')) {
      return '상품 리뷰는 페이지 하단에서 확인하실 수 있어요. 실제 구매자들의 생생한 후기를 참고해보세요! ⭐';
    }
    
    if (message.includes('환불') || message.includes('교환') || message.includes('반품')) {
      return '상품 수령 후 7일 이내에 환불/교환이 가능해요. 단, 상품 상태가 양호해야 합니다. 자세한 내용은 고객센터를 이용해주세요! 📞';
    }
    
    if (message.includes('안녕') || message.includes('hello') || message.includes('hi')) {
      return '안녕하세요! 쿠팡 도우미입니다. 무엇을 도와드릴까요? 😊';
    }
    
    if (message.includes('감사') || message.includes('고마워') || message.includes('thank')) {
      return '도움이 되어서 기뻐요! 더 궁금한 점이 있으시면 언제든 말씀해 주세요! 😄';
    }
    
    return '죄송해요, 질문을 정확히 이해하지 못했어요. 상품, 가격, 배송, 리뷰 등에 대해 구체적으로 말씀해 주시면 더 정확한 답변을 드릴 수 있어요! 🤔';
  }
  
  // 타이핑 인디케이터 표시
  function showTypingIndicator() {
    const typingElement = document.createElement('div');
    typingElement.className = 'message bot-message typing-indicator-message';
    typingElement.id = 'typing-indicator';
    typingElement.innerHTML = `
      <div class="message-avatar">🤖</div>
      <div class="message-content">
        <div class="typing-indicator">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        </div>
      </div>
    `;
    
    messagesContainer.appendChild(typingElement);
    scrollToBottom();
  }
  
  // 타이핑 인디케이터 제거
  function hideTypingIndicator() {
    const typingElement = document.getElementById('typing-indicator');
    if (typingElement) {
      typingElement.remove();
    }
  }
  
  // 스크롤을 맨 아래로
  function scrollToBottom() {
    setTimeout(() => {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 100);
  }
  
  // 시간 포맷팅
  function formatTime(date) {
    const now = new Date();
    const diff = now - date;
    
    if (diff < 60000) {
      return '방금 전';
    } else if (diff < 3600000) {
      return `${Math.floor(diff / 60000)}분 전`;
    } else if (diff < 86400000) {
      return `${Math.floor(diff / 3600000)}시간 전`;
    } else {
      return date.toLocaleDateString('ko-KR');
    }
  }
  
  // HTML 이스케이프
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
  
  // 지연 함수
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// 페이지 로드 시 챗봇 주입
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectChatbot);
} else {
  injectChatbot();
} 