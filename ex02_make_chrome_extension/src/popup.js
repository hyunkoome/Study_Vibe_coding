// 팝업 스크립트
document.addEventListener('DOMContentLoaded', function() {
  const summarizeBtn = document.getElementById('summarize-btn');
  const statusIndicator = document.getElementById('status-indicator');
  const statusText = document.getElementById('status-text');
  const currentUrlElement = document.getElementById('current-url');
  const urlStatusElement = document.getElementById('url-status');
  
  let currentTab = null;
  let isProcessing = false;

  // 초기화: 현재 탭 정보 가져오기
  initializePopup();

  // 요약하기 버튼 클릭 이벤트
  summarizeBtn.addEventListener('click', handleSummarizeClick);

  // 팝업 초기화
  async function initializePopup() {
    try {
      // 현재 활성 탭 정보 가져오기
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
      currentTab = tabs[0];
      
      if (currentTab) {
        updateUrlDisplay(currentTab.url);
        updateUrlStatus(currentTab.url);
        updateButtonState(currentTab.url);
      }
    } catch (error) {
      console.error('탭 정보 가져오기 실패:', error);
      updateStatus('오류', 'error');
    }
  }

  // URL 표시 업데이트
  function updateUrlDisplay(url) {
    if (url) {
      // URL을 간단하게 표시
      const urlObj = new URL(url);
      const displayUrl = urlObj.hostname + urlObj.pathname;
      currentUrlElement.textContent = displayUrl;
      currentUrlElement.title = url; // 전체 URL을 툴팁으로 표시
    } else {
      currentUrlElement.textContent = 'URL을 가져올 수 없습니다';
    }
  }

  // URL 상태 업데이트
  function updateUrlStatus(url) {
    if (!url) {
      urlStatusElement.textContent = '알 수 없음';
      urlStatusElement.className = 'info-value error';
      return;
    }

    if (isYouTubeVideoUrl(url)) {
      urlStatusElement.textContent = 'YouTube 동영상';
      urlStatusElement.className = 'info-value success';
    } else {
      urlStatusElement.textContent = 'YouTube 동영상이 아님';
      urlStatusElement.className = 'info-value error';
    }
  }

  // 버튼 상태 업데이트
  function updateButtonState(url) {
    if (isYouTubeVideoUrl(url) && !isProcessing) {
      summarizeBtn.disabled = false;
      summarizeBtn.className = 'summarize-button active';
      summarizeBtn.innerHTML = '<span class="btn-icon">🎬</span><span class="btn-text">유투브 요약하기</span>';
    } else {
      summarizeBtn.disabled = true;
      summarizeBtn.className = 'summarize-button disabled';
      summarizeBtn.innerHTML = '<span class="btn-icon">🎬</span><span class="btn-text">유투브 요약하기</span>';
    }
  }

  // YouTube 동영상 URL인지 확인
  function isYouTubeVideoUrl(url) {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname.includes('youtube.com') && 
             urlObj.pathname.includes('/watch') &&
             urlObj.searchParams.has('v');
    } catch {
      return false;
    }
  }

  // 상태 표시 업데이트
  function updateStatus(text, type = 'info') {
    statusText.textContent = text;
    statusIndicator.className = `status-indicator ${type}`;
  }

  // 요약하기 버튼 클릭 처리
  async function handleSummarizeClick() {
    console.log('버튼 클릭됨'); // 디버깅용 로그
    
    if (!currentTab || isProcessing) {
      console.log('조건 불만족:', { currentTab: !!currentTab, isProcessing });
      return;
    }

    const url = currentTab.url;
    console.log('현재 URL:', url); // 디버깅용 로그
    
    if (!isYouTubeVideoUrl(url)) {
      updateStatus('YouTube 동영상 페이지가 아닙니다', 'error');
      return;
    }

    try {
      // 처리 중 상태로 변경
      isProcessing = true;
      updateStatus('요약 요청 중...', 'processing');
      updateButtonState(url);

      console.log('background script로 메시지 전송:', { type: 'SEND_URL', url: url });

      // background script로 URL 전송
      await chrome.runtime.sendMessage({
        type: 'SEND_URL',
        url: url
      });

      // 성공 상태 표시
      updateStatus('요약 요청 완료!', 'success');
      
      // 잠시 후 팝업 닫기
      setTimeout(() => {
        window.close();
      }, 2000);

    } catch (error) {
      console.error('요약 요청 실패:', error);
      updateStatus('요약 요청 실패', 'error');
      isProcessing = false;
      updateButtonState(url);
    }
  }

  // 팝업이 포커스를 잃을 때 상태 초기화
  window.addEventListener('blur', () => {
    isProcessing = false;
    updateButtonState(currentTab?.url);
  });
}); 