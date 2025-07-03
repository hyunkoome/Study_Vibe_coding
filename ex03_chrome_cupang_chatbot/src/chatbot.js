// 쿠팡 챗봇 JavaScript
class CoupangChatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.typingTimeout = null;
        
        // DOM 요소들
        this.container = document.getElementById('chatbot-container');
        this.toggle = document.getElementById('chatbot-toggle');
        this.closeBtn = document.getElementById('chatbot-close');
        this.messagesContainer = document.getElementById('chatbot-messages');
        this.input = document.getElementById('chatbot-input');
        this.sendBtn = document.getElementById('chatbot-send');
        
        this.init();
    }
    
    // 챗봇 초기화
    init() {
        this.bindEvents();
        this.loadMessages();
        this.checkCrawlingStatus();
    }
    
    // 이벤트 바인딩
    bindEvents() {
        // 챗봇 토글 버튼 클릭
        this.toggle.addEventListener('click', () => {
            this.toggleChatbot();
        });
        
        // 챗봇 닫기 버튼 클릭
        this.closeBtn.addEventListener('click', () => {
            this.closeChatbot();
        });
        
        // 메시지 전송 버튼 클릭
        this.sendBtn.addEventListener('click', () => {
            this.sendMessage();
        });
        
        // 엔터키로 메시지 전송
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
        
        // 입력창 포커스 시 챗봇 열기
        this.input.addEventListener('focus', () => {
            if (!this.isOpen) {
                this.openChatbot();
            }
        });
        
        // 외부 클릭 시 챗봇 닫기
        document.addEventListener('click', (e) => {
            if (this.isOpen && 
                !this.container.contains(e.target) && 
                !this.toggle.contains(e.target)) {
                this.closeChatbot();
            }
        });
    }
    
    // 챗봇 토글
    toggleChatbot() {
        if (this.isOpen) {
            this.closeChatbot();
        } else {
            this.openChatbot();
        }
    }
    
    // 챗봇 열기
    openChatbot() {
        this.isOpen = true;
        this.container.classList.add('show');
        this.input.focus();
        this.scrollToBottom();
    }
    
    // 챗봇 닫기
    closeChatbot() {
        this.isOpen = false;
        this.container.classList.remove('show');
        this.input.blur();
    }
    
    // 메시지 전송
    sendMessage() {
        const message = this.input.value.trim();
        if (!message) return;
        
        // 사용자 메시지 추가
        this.addMessage(message, 'user');
        this.input.value = '';
        
        // 봇 응답 처리
        this.processBotResponse(message);
    }
    
    // 메시지 추가
    addMessage(text, sender, timestamp = null) {
        const message = {
            id: Date.now(),
            text: text,
            sender: sender,
            timestamp: timestamp || new Date()
        };
        
        this.messages.push(message);
        this.renderMessage(message);
        this.scrollToBottom();
        this.saveMessages();
    }
    
    // 메시지 렌더링
    renderMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${message.sender}-message`;
        messageElement.dataset.messageId = message.id;
        
        const timeString = this.formatTime(message.timestamp);
        
        if (message.sender === 'user') {
            messageElement.innerHTML = `
                <div class="message-content">
                    <div class="message-bubble">${this.escapeHtml(message.text)}</div>
                    <div class="message-time">${timeString}</div>
                </div>
                <div class="message-avatar">👤</div>
            `;
        } else {
            messageElement.innerHTML = `
                <div class="message-avatar">🤖</div>
                <div class="message-content">
                    <div class="message-bubble">${this.escapeHtml(message.text)}</div>
                    <div class="message-time">${timeString}</div>
                </div>
            `;
        }
        
        this.messagesContainer.appendChild(messageElement);
    }
    
    // 봇 응답 처리
    async processBotResponse(userMessage) {
        // 타이핑 인디케이터 표시
        this.showTypingIndicator();
        
        // 응답 생성 (실제로는 API 호출)
        const response = await this.generateResponse(userMessage);
        
        // 타이핑 인디케이터 제거
        this.hideTypingIndicator();
        
        // 봇 응답 추가
        this.addMessage(response, 'bot');
    }
    
    // 사용자의 질문과 크롤링된 리뷰를 GPT에 보내고, AI 답변을 받아오는 함수
    async generateResponse(userMessage) {
        // 1. chrome.storage.local에서 최신 리뷰 데이터 가져오기
        let reviews = [];
        try {
            const data = await new Promise((resolve) => {
                chrome.storage.local.get(['coupang_reviews'], resolve);
            });
            reviews = data.coupang_reviews || [];
        } catch (e) {
            console.error('리뷰 데이터 불러오기 실패:', e);
        }

        // 2. background.js로 질문+리뷰 전송하여 GPT 답변 요청
        return new Promise((resolve) => {
            chrome.runtime.sendMessage(
                {
                    type: 'ASK_GPT',
                    question: userMessage,
                    reviews: reviews
                },
                (response) => {
                    if (chrome.runtime.lastError || !response || response.error) {
                        resolve('AI 답변을 받아오지 못했습니다. 잠시 후 다시 시도해 주세요.');
                    } else {
                        resolve(response.answer);
                    }
                }
            );
        });
    }
    
    // 타이핑 인디케이터 표시
    showTypingIndicator() {
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
        
        this.messagesContainer.appendChild(typingElement);
        this.scrollToBottom();
    }
    
    // 타이핑 인디케이터 제거
    hideTypingIndicator() {
        const typingElement = document.getElementById('typing-indicator');
        if (typingElement) {
            typingElement.remove();
        }
    }
    
    // 스크롤을 맨 아래로
    scrollToBottom() {
        setTimeout(() => {
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        }, 100);
    }
    
    // 시간 포맷팅
    formatTime(date) {
        const now = new Date();
        const diff = now - date;
        
        if (diff < 60000) { // 1분 이내
            return '방금 전';
        } else if (diff < 3600000) { // 1시간 이내
            return `${Math.floor(diff / 60000)}분 전`;
        } else if (diff < 86400000) { // 24시간 이내
            return `${Math.floor(diff / 3600000)}시간 전`;
        } else {
            return date.toLocaleDateString('ko-KR');
        }
    }
    
    // HTML 이스케이프
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // 지연 함수
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    // 메시지 저장
    saveMessages() {
        try {
            localStorage.setItem('coupang_chatbot_messages', JSON.stringify(this.messages));
        } catch (e) {
            console.error('메시지 저장 실패:', e);
        }
    }
    
    // 메시지 로드
    loadMessages() {
        try {
            const saved = localStorage.getItem('coupang_chatbot_messages');
            if (saved) {
                this.messages = JSON.parse(saved);
                this.messages.forEach(message => {
                    message.timestamp = new Date(message.timestamp);
                    this.renderMessage(message);
                });
            }
        } catch (e) {
            console.error('메시지 로드 실패:', e);
        }
    }
    
    // 크롤링 상태 확인 함수
    async checkCrawlingStatus() {
        try {
            const storage = await chrome.storage.local.get(['coupang_reviews', 'coupang_progress']);
            const reviews = storage.coupang_reviews;
            const progress = storage.coupang_progress;
            
            if (!reviews || !progress) {
                this.showCrawlingStatusMessage('리뷰 데이터가 없습니다. 리뷰 크롤링을 먼저 진행해 주세요.');
                this.setInputEnabled(false);
                return false;
            }
            
            if (progress.percent !== 100) {
                this.showCrawlingStatusMessage('리뷰 크롤링이 진행 중입니다. 잠시 후에 다시 시도해주세요.');
                this.setInputEnabled(false);
                return false;
            }
            
            this.showCrawlingStatusMessage('리뷰 크롤링이 완료되었습니다. 챗봇을 이용해주세요.');
            this.setInputEnabled(true);
            return true;
        } catch (e) {
            console.error('크롤링 상태 확인 실패:', e);
            this.showCrawlingStatusMessage('크롤링 상태 확인 실패. 다시 시도해주세요.');
            this.setInputEnabled(false);
            return false;
        }
    }
    
    // 입력창 활성화/비활성화 함수
    setInputEnabled(enabled) {
        this.input.disabled = !enabled;
        this.sendBtn.disabled = !enabled;
    }
    
    // 챗봇에 리뷰 크롤링 상태 안내 메시지 출력
    showCrawlingStatusMessage(message) {
        const statusElement = document.createElement('div');
        statusElement.className = 'crawling-status-message';
        statusElement.textContent = message;
        
        this.messagesContainer.appendChild(statusElement);
        this.scrollToBottom();
    }
}

// 챗봇 초기화
document.addEventListener('DOMContentLoaded', () => {
    new CoupangChatbot();
});

const reviews = document.querySelectorAll('.review-item');
console.log('받아온 리뷰:', reviews);
document.getElementById('review-count').innerText = reviews.length + '개';

// 리뷰 렌더링
renderReviews(reviews);

// 리뷰 article 기준으로 추출
setTimeout(() => {
  document.querySelectorAll('.js_reviewArticleListContainer article.sdp-review__article__list.js_reviewArticleReviewList')
    .forEach(article => {
      const contentDiv = article.querySelector('.js_reviewArticleContent');
      if (contentDiv) {
        console.log(contentDiv.innerText.trim());
      } else {
        console.log('리뷰 내용 없음');
      }
    });
}, 2000); // 2초 후 실행 (필요시 시간 조정)

function safeSendMessage(msg) {
  try {
    if (!chrome || !chrome.runtime || !chrome.runtime.sendMessage) {
      showToast('확장 프로그램이 비활성화되었거나 새로고침되었습니다. 다시 시도해주세요.', true);
      return;
    }
    chrome.runtime.sendMessage(msg);
  } catch (e) {
    showToast('확장 프로그램이 비활성화되었거나 새로고침되었습니다.', true);
  }
}

function safeStorageSet(obj) {
  try {
    if (chrome && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set(obj);
    }
  } catch (e) {
    showToast('확장 프로그램이 비활성화되었거나 새로고침되었습니다.', true);
  }
} 