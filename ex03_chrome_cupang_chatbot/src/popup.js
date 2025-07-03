// 팝업에서 리뷰 크롤링 버튼 클릭 시 content script에 메시지 전송
// 응답받은 리뷰 데이터를 화면에 표시

// 쿠팡 상품 페이지 여부를 확인하는 함수
function isCoupangProductPage(url) {
  // 쿠팡 상품 상세 페이지의 URL 패턴을 정규식으로 확인
  return /https:\/\/www\.coupang\.com\/vp\/products\//.test(url);
}

// 팝업이 열릴 때 현재 탭이 쿠팡 상품 페이지인지 확인
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const tab = tabs[0];
  const isCoupang = isCoupangProductPage(tab.url);
  const warnMsg = document.getElementById('warn-msg');
  // 쿠팡 상품 페이지가 아니면 경고 메시지 표시 및 버튼 비활성화
  if (!isCoupang) {
    warnMsg.style.display = 'flex';
    document.getElementById('crawl-btn').disabled = true;
    document.getElementById('csv-btn').disabled = true;
  } else {
    warnMsg.style.display = 'none';
    document.getElementById('crawl-btn').disabled = false;
    document.getElementById('csv-btn').disabled = false;
  }
});

// 크롤링 옵션 상태
let lastCrawledReviews = [];

// 진행률 표시 함수
function updateProgress(current, total, percent) {
  const progressDiv = document.getElementById('progress');
  const bar = document.getElementById('progress-bar');
  const barInner = document.getElementById('progress-bar-inner');
  progressDiv.innerText = `진행: ${current} / ${total} 페이지 (${percent}%)`;
  bar.style.display = 'block';
  barInner.style.width = percent + '%';
}

// 진행률 숨기기 함수
function hideProgress() {
  document.getElementById('progress').innerText = '';
  document.getElementById('progress-bar').style.display = 'none';
  document.getElementById('progress-bar-inner').style.width = '0%';
}

// content script에서 진행상황 메시지 수신
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'CRAWL_PROGRESS') {
    updateProgress(msg.current, msg.total, msg.percent);
  }
});

// 리뷰 크롤링 버튼 클릭 이벤트
// 입력값(체크박스, 최대 리뷰 수)과 함께 content script에 메시지 전송
// 크롤링 결과를 lastCrawledReviews에 저장

// Toast(투명 알림창) 함수가 없으면 추가
function showToast(msg, duration = 2000) {
  let toast = document.getElementById('popup-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'popup-toast';
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
  }
  toast.textContent = msg;
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, duration);
}

document.getElementById('crawl-btn').addEventListener('click', () => {
  const includeRating = document.getElementById('include-rating').checked;
  const includeDate = document.getElementById('include-date').checked;
  const maxReviewCount = parseInt(document.getElementById('max-review-count').value, 10);

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    chrome.tabs.sendMessage(
      tab.id,
      {
        type: 'GET_REVIEWS',
        options: {
          include_rating: includeRating,
          include_date: includeDate,
          max_count: maxReviewCount
        }
      },
      (response) => {
        if (chrome.runtime.lastError || !response) {
          showToast('리뷰를 불러올 수 없습니다.\n쿠팡 상품 페이지에서 시도해 주세요.');
          setCsvBtnEnabled(false);
          return;
        }
        lastCrawledReviews = response.reviews || [];
        setCsvBtnEnabled(true);
        // alert 대신 Toast로 메시지 표시
        showToast(`리뷰 ${lastCrawledReviews.length}개를 크롤링했습니다.`);
        // 버튼 텍스트를 '리뷰 크롤링 완료'로 변경
        const crawlBtn = document.getElementById('crawl-btn');
        if (crawlBtn) {
          crawlBtn.textContent = '리뷰 크롤링 완료';
          crawlBtn.style.background = '#28a745';
          crawlBtn.style.color = 'white';
        }
        finishProgress(Math.ceil(lastCrawledReviews.length / 10));
      }
    );
  });
});

// CSV 버튼 활성/비활성 함수
function setCsvBtnEnabled(enabled) {
  const csvBtn = document.getElementById('csv-btn');
  csvBtn.disabled = !enabled;
  csvBtn.style.opacity = enabled ? 1 : 0.5;
}

// 리뷰 크롤링 버튼 클릭 시 CSV 버튼 비활성화 및 버튼 상태 초기화
const crawlBtn = document.getElementById('crawl-btn');
crawlBtn.addEventListener('click', () => {
  setCsvBtnEnabled(false);
  hideProgress();
  
  // 버튼 상태 초기화
  crawlBtn.textContent = '리뷰 크롤링 시작';
  crawlBtn.style.background = '';
  crawlBtn.style.color = '';
});

// 크롤링 완료 시 CSV 버튼 활성화 및 데이터 저장 보장
function finishProgress(total) {
  updateProgress(total, total, 100);
  setTimeout(() => {
    hideProgress();
    // 완료 메시지 표시
    const progressDiv = document.getElementById('progress');
    if (progressDiv) {
      progressDiv.innerText = '✅ 크롤링이 완료되었습니다!';
      progressDiv.style.color = '#28a745';
      progressDiv.style.fontWeight = 'bold';
      setTimeout(() => {
        progressDiv.innerText = '';
        progressDiv.style.color = '';
        progressDiv.style.fontWeight = '';
      }, 3000);
    }
  }, 1500);
  setCsvBtnEnabled(true);
}

// 팝업이 열릴 때 chrome.storage.local에서 리뷰/진행상황을 불러와 UI 복원
chrome.storage && chrome.storage.local && chrome.storage.local.get(['coupang_reviews', 'coupang_progress'], (result) => {
  if (result.coupang_reviews && result.coupang_reviews.length > 0) {
    lastCrawledReviews = result.coupang_reviews;
    setCsvBtnEnabled(true);
    
    // 크롤링 완료 상태일 때 버튼 텍스트 변경
    const crawlBtn = document.getElementById('crawl-btn');
    if (crawlBtn) {
      crawlBtn.textContent = '리뷰 크롤링 완료';
      crawlBtn.style.background = '#28a745';
      crawlBtn.style.color = 'white';
    }
    
    // 완료 메시지 표시
    showToast(`저장된 리뷰 ${lastCrawledReviews.length}개를 불러왔습니다.`);
  }
  
  if (result.coupang_progress) {
    const prog = result.coupang_progress;
    if (prog.status === 'done') {
      // 완료 상태일 때 진행률 표시 후 숨기기
      updateProgress(prog.current, prog.total, prog.percent);
      setTimeout(() => {
        hideProgress();
      }, 1000);
    } else if (prog.status === 'crawling') {
      // 진행 중일 때 진행률 표시
      updateProgress(prog.current, prog.total, prog.percent);
    }
  }
});

// 리뷰 데이터를 화면에 표시하는 함수
function displayReviews(reviews) {
  const reviewsDiv = document.getElementById('reviews');
  if (!reviews || reviews.length === 0) {
    reviewsDiv.innerText = '리뷰가 없습니다.';
    return;
  }
  reviewsDiv.innerHTML = reviews.map(r => `
    <div class="review">
      <div class="author">${r.author}</div>
      <div class="date">${r.date}</div>
      <div class="text">${r.review_text}</div>
    </div>
  `).join('');
}

// 팝업이 열릴 때 전체 리뷰 개수를 content script에 요청하여 입력란 기본값으로 세팅
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const tab = tabs[0];
  chrome.tabs.sendMessage(tab.id, { type: 'GET_TOTAL_REVIEW_COUNT' }, (response) => {
    if (response && response.total) {
      document.getElementById('max-review-count').value = response.total;
    }
  });
});

// 엑셀(xlsx)로 내보내기 버튼 클릭 이벤트
// 이제 SheetJS(xlsx)는 항상 로드되어 있으므로 바로 사용 가능

document.getElementById('csv-btn').addEventListener('click', () => {
  // chrome.storage에서 최신 리뷰 데이터 사용
  chrome.storage && chrome.storage.local && chrome.storage.local.get(['coupang_reviews'], (result) => {
    const reviews = result.coupang_reviews || lastCrawledReviews;
    // 데이터 유효성 검사
    if (!Array.isArray(reviews) || reviews.length === 0) {
      alert('리뷰 데이터가 없습니다. 먼저 크롤링을 완료해 주세요.');
      return;
    }
    // author 제외, 리뷰내용-평점-작성일 순서로 변환
    const rows = reviews.map(r => [r.review_text, r.rating, r.date]);
    // 헤더 추가
    rows.unshift(['리뷰내용', '평점', '작성일']);
    try {
      // SheetJS(xlsx)로 엑셀 파일 생성 및 다운로드
      const ws = XLSX.utils.aoa_to_sheet(rows);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, '리뷰');
      XLSX.writeFile(wb, 'coupang_reviews.xlsx');
    } catch (e) {
      alert('엑셀(xlsx) 내보내기 중 오류가 발생했습니다: ' + e.message);
    }
  });
});

// OpenAI API 키 입력/저장 기능 (메인에서만)
document.addEventListener('DOMContentLoaded', function() {
  const apiKeyInput = document.getElementById('main-api-key');
  const saveBtn = document.getElementById('main-save-btn');

  // 페이지 로드시 저장된 API 키 불러오기
  chrome.storage.local.get(['openai_api_key'], function(data) {
    apiKeyInput.value = data.openai_api_key || '';
  });

  // 저장 버튼 클릭 시 API 키 저장
  if (saveBtn) {
    saveBtn.onclick = function() {
      const apiKey = apiKeyInput.value.trim();
      chrome.storage.local.set({ openai_api_key: apiKey }, function() {
        alert('API 키가 저장되었습니다!');
      });
    };
  }

  // 기존 옵션(평점 포함, 작성일 포함, 최대 리뷰 수 등) 동기화 로직 유지
  // ... 기존 옵션 동기화 코드 ...
}); 