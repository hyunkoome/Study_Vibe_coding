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
    
    // 응답 생성 (간단한 규칙 기반)
    async generateResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        // 인공적인 지연 (타이핑 효과)
        await this.delay(1000 + Math.random() * 2000);
        
        // 상품 관련 질문
        if (message.includes('상품') || message.includes('제품')) {
            return '현재 보고 계신 상품에 대해 궁금한 점이 있으시면 구체적으로 말씀해 주세요! 가격, 품질, 배송 등 어떤 것이든 도와드릴 수 있어요. 🛒';
        }
        
        // 가격 관련 질문
        if (message.includes('가격') || message.includes('비용') || message.includes('얼마')) {
            return '상품 가격은 페이지 상단에서 확인하실 수 있어요. 할인 정보나 쿠폰 적용도 함께 확인해보세요! 💰';
        }
        
        // 배송 관련 질문
        if (message.includes('배송') || message.includes('택배') || message.includes('도착')) {
            return '배송은 보통 1-3일 내에 완료됩니다. 로켓배송 상품은 당일 또는 다음날 배송이 가능해요! 🚚';
        }
        
        // 리뷰 관련 질문
        if (message.includes('리뷰') || message.includes('평점') || message.includes('후기')) {
            return '상품 리뷰는 페이지 하단에서 확인하실 수 있어요. 실제 구매자들의 생생한 후기를 참고해보세요! ⭐';
        }
        
        // 환불/교환 관련 질문
        if (message.includes('환불') || message.includes('교환') || message.includes('반품')) {
            return '상품 수령 후 7일 이내에 환불/교환이 가능해요. 단, 상품 상태가 양호해야 합니다. 자세한 내용은 고객센터를 이용해주세요! 📞';
        }
        
        // 안녕/인사
        if (message.includes('안녕') || message.includes('hello') || message.includes('hi')) {
            return '안녕하세요! 쿠팡 도우미입니다. 무엇을 도와드릴까요? 😊';
        }
        
        // 감사/고마움
        if (message.includes('감사') || message.includes('고마워') || message.includes('thank')) {
            return '도움이 되어서 기뻐요! 더 궁금한 점이 있으시면 언제든 말씀해 주세요! 😄';
        }
        
        // 기본 응답
        return '죄송해요, 질문을 정확히 이해하지 못했어요. 상품, 가격, 배송, 리뷰 등에 대해 구체적으로 말씀해 주시면 더 정확한 답변을 드릴 수 있어요! 🤔';
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