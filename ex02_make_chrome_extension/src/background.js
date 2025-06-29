// 웹훅 엔드포인트
const WEBHOOK_URL = 'https://hook.us2.make.com/f04vtc7s8bk1tlqnap1aywcamo7jlgu2';

// 메시지 리스너 설정
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'SEND_URL') {
    handleUrlSubmission(msg.url);
  }
});

// URL 전송 및 요약 처리
async function handleUrlSubmission(url) {
  try {
    // 로딩 상태 알림
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'assets/icon48.png',
      title: 'YouTube 요약',
      message: '요약을 생성하고 있습니다...'
    });

    // 웹훅으로 URL 전송
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: url,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // 웹훅 응답 데이터 받기
    const responseData = await response.json();
    console.log('웹훅 응답:', responseData);

    // 요약 결과 수신 성공 알림
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'assets/icon48.png',
      title: 'YouTube 요약 완료',
      message: '요약이 완료되었습니다!'
    });

    // 요약 결과를 표시할 팝업 창 생성
    chrome.windows.create({
      url: chrome.runtime.getURL('summary.html'),
      type: 'popup',
      width: 600,
      height: 800,
      left: 100,
      top: 100
    }, (window) => {
      // 새 창이 완전히 로드된 후 요약 데이터 전송
      setTimeout(() => {
        chrome.tabs.query({ windowId: window.id }, (tabs) => {
          if (tabs[0]) {
            // 웹훅 응답 데이터를 요약 페이지로 전송
            chrome.tabs.sendMessage(tabs[0].id, {
              type: 'SHOW_SUMMARY',
              summaryData: responseData
            });
          }
        });
      }, 1000);
    });

  } catch (error) {
    console.error('URL 전송 중 오류 발생:', error);
    
    // 오류 알림
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'assets/icon48.png',
      title: '요약 실패',
      message: `오류: ${error.message}`
    });
  }
}

// 확장 프로그램 설치 시 초기 설정
chrome.runtime.onInstalled.addListener(() => {
  console.log('YouTube 요약 확장 프로그램이 설치되었습니다.');
  
  // 기본 설정 저장
  chrome.storage.sync.set({
    webhookEndpoint: WEBHOOK_URL,
    isEnabled: true
  });
}); 