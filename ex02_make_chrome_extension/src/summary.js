// 요약 결과 페이지 스크립트
document.addEventListener('DOMContentLoaded', function() {
  const loadingIndicator = document.getElementById('loading-indicator');
  const summaryText = document.getElementById('summary-text');
  const summaryBody = document.getElementById('summary-body');
  const errorMessage = document.getElementById('error-message');
  const errorText = document.getElementById('error-text');
  const closeBtn = document.getElementById('close-btn');
  const copyBtn = document.getElementById('copy-btn');
  const newSummaryBtn = document.getElementById('new-summary-btn');
  const retryBtn = document.getElementById('retry-btn');

  let summaryData = null;

  // 이벤트 리스너 설정
  closeBtn.addEventListener('click', closeWindow);
  copyBtn.addEventListener('click', copySummary);
  newSummaryBtn.addEventListener('click', requestNewSummary);
  retryBtn.addEventListener('click', retryLoading);

  // 메시지 리스너 설정
  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === 'SHOW_SUMMARY') {
      displaySummary(msg.summaryData);
    }
  });

  // 요약 내용 표시
  function displaySummary(summaryData) {
    // 로딩 인디케이터 숨기기
    loadingIndicator.style.display = 'none';
    
    if (summaryData && (summaryData.summary || summaryData.title)) {
      // 웹훅 응답 데이터 처리
      const title = summaryData.title || '제목 없음';
      const summary = summaryData.summary || '요약 내용이 없습니다.';
      const thumbnail = summaryData.thumbnail || '';
      const videoId = summaryData.video_id || '';
      const timestamp = summaryData.timestamp || new Date().toISOString();
      
      // 요약 내용을 HTML로 구성
      let summaryHTML = `
        <div class="video-info">
          ${thumbnail ? `<img src="${thumbnail}" alt="썸네일" style="width: 100%; max-width: 300px; border-radius: 8px; margin-bottom: 15px;">` : ''}
          <h3 style="color: #333; margin-bottom: 10px; font-size: 18px;">${title}</h3>
          ${videoId ? `<p style="color: #666; font-size: 12px; margin-bottom: 15px;">비디오 ID: ${videoId}</p>` : ''}
          <p style="color: #666; font-size: 12px; margin-bottom: 20px;">생성 시간: ${new Date(timestamp).toLocaleString('ko-KR')}</p>
        </div>
        <div class="summary-content">
          <h4 style="color: #333; margin-bottom: 10px;">📝 요약 내용</h4>
          <div style="line-height: 1.6; color: #333; white-space: pre-line;">${summary}</div>
        </div>
      `;
      
      summaryBody.innerHTML = summaryHTML;
      summaryText.style.display = 'block';
      errorMessage.style.display = 'none';
      
      // 복사용 텍스트 저장
      summaryData = `${title}\n\n${summary}`;
      
    } else {
      // 오류 메시지 표시
      showError('요약 데이터를 받을 수 없습니다.');
    }
  }

  // 오류 메시지 표시
  function showError(message) {
    loadingIndicator.style.display = 'none';
    summaryText.style.display = 'none';
    errorMessage.style.display = 'block';
    errorText.textContent = message;
  }

  // 창 닫기
  function closeWindow() {
    window.close();
  }

  // 요약 내용 복사
  async function copySummary() {
    if (!summaryData) {
      showNotification('복사할 내용이 없습니다.', 'error');
      return;
    }

    try {
      await navigator.clipboard.writeText(summaryData);
      showNotification('요약 내용이 클립보드에 복사되었습니다!', 'success');
    } catch (error) {
      console.error('복사 실패:', error);
      showNotification('복사에 실패했습니다.', 'error');
    }
  }

  // 새 요약 요청
  function requestNewSummary() {
    // 현재 YouTube 탭에서 새 요약 요청
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0] && tabs[0].url.includes('youtube.com/watch')) {
        chrome.runtime.sendMessage({
          type: 'SEND_URL',
          url: tabs[0].url
        });
        
        // 로딩 상태로 변경
        loadingIndicator.style.display = 'block';
        summaryText.style.display = 'none';
        errorMessage.style.display = 'none';
        
        showNotification('새 요약을 요청했습니다.', 'info');
      } else {
        showNotification('YouTube 동영상 페이지에서만 사용 가능합니다.', 'error');
      }
    });
  }

  // 다시 시도
  function retryLoading() {
    // 페이지 새로고침
    window.location.reload();
  }

  // 알림 표시 (간단한 토스트 메시지)
  function showNotification(message, type = 'info') {
    // 기존 알림 제거
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    // 새 알림 생성
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // 스타일 적용
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
      color: white;
      padding: 12px 20px;
      border-radius: 5px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      z-index: 10000;
      font-size: 14px;
      max-width: 300px;
      word-wrap: break-word;
    `;

    document.body.appendChild(notification);

    // 3초 후 자동 제거
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 3000);
  }

  // 페이지 로드 후 일정 시간이 지나도 요약이 오지 않으면 오류 표시
  setTimeout(() => {
    if (loadingIndicator.style.display !== 'none') {
      showError('요약 결과를 불러오는 데 시간이 오래 걸립니다. 다시 시도해주세요.');
    }
  }, 10000);

  // 키보드 단축키 지원
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeWindow();
    } else if (event.ctrlKey && event.key === 'c') {
      copySummary();
    }
  });
}); 