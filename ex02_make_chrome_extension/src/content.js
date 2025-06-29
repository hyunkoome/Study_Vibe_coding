// YouTube 페이지에서 실행되는 content script
console.log('YouTube 요약 확장 프로그램이 로드되었습니다.');

// 메시지 리스너 설정
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'SHOW_SUMMARY') {
    displaySummary(msg.summaryData);
  }
});

// 요약 내용을 페이지에 표시하는 함수
function displaySummary(summaryData) {
  // 기존 요약 요소가 있다면 제거
  const existingSummary = document.getElementById('youtube-summary-extension');
  if (existingSummary) {
    existingSummary.remove();
  }

  // 요약 컨테이너 생성
  const summaryContainer = document.createElement('div');
  summaryContainer.id = 'youtube-summary-extension';
  summaryContainer.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    width: 400px;
    max-height: 600px;
    background: white;
    border: 2px solid #ff0000;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    z-index: 10000;
    font-family: Arial, sans-serif;
    overflow-y: auto;
  `;

  // 헤더 생성
  const header = document.createElement('div');
  header.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  `;
  
  const title = document.createElement('h3');
  title.textContent = '📺 AI 요약';
  title.style.cssText = `
    margin: 0;
    color: #333;
    font-size: 16px;
  `;
  
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✕';
  closeBtn.style.cssText = `
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #666;
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  closeBtn.onclick = () => summaryContainer.remove();
  
  header.appendChild(title);
  header.appendChild(closeBtn);

  // 요약 내용 생성
  const content = document.createElement('div');
  content.style.cssText = `
    color: #333;
    line-height: 1.6;
    font-size: 14px;
  `;

  if (summaryData && (summaryData.summary || summaryData.title)) {
    // 웹훅 응답 데이터 처리
    const title = summaryData.title || '제목 없음';
    const summary = summaryData.summary || '요약 내용이 없습니다.';
    const thumbnail = summaryData.thumbnail || '';
    const timestamp = summaryData.timestamp || new Date().toISOString();
    
    // 요약 내용을 HTML로 구성
    let summaryHTML = `
      <div style="margin-bottom: 15px;">
        ${thumbnail ? `<img src="${thumbnail}" alt="썸네일" style="width: 100%; border-radius: 8px; margin-bottom: 10px;">` : ''}
        <h4 style="margin: 0 0 10px 0; color: #333; font-size: 16px;">${title}</h4>
        <p style="margin: 0 0 15px 0; color: #666; font-size: 12px;">생성 시간: ${new Date(timestamp).toLocaleString('ko-KR')}</p>
      </div>
      <div style="white-space: pre-line;">${summary}</div>
    `;
    
    content.innerHTML = summaryHTML;
  } else {
    content.textContent = '요약 데이터를 받을 수 없습니다.';
  }

  // 컨테이너에 요소들 추가
  summaryContainer.appendChild(header);
  summaryContainer.appendChild(content);

  // 페이지에 추가
  document.body.appendChild(summaryContainer);

  // 30초 후 자동으로 투명도 조정
  setTimeout(() => {
    if (summaryContainer.parentNode) {
      summaryContainer.style.opacity = '0.8';
    }
  }, 30000);
}

// YouTube 페이지 정보 수집 (필요 시)
function getVideoInfo() {
  const videoTitle = document.querySelector('h1.ytd-video-primary-info-renderer')?.textContent?.trim();
  const channelName = document.querySelector('#channel-name a')?.textContent?.trim();
  const videoDescription = document.querySelector('#description')?.textContent?.trim();
  
  return {
    title: videoTitle,
    channel: channelName,
    description: videoDescription
  };
}

// 페이지 로드 완료 시 초기화
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('YouTube 페이지가 로드되었습니다.');
  });
} else {
  console.log('YouTube 페이지가 이미 로드되어 있습니다.');
} 