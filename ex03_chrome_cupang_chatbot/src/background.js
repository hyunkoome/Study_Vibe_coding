// background.js - OpenAI API 통신 담당
// content.js 또는 chatbot.js에서 질문/리뷰를 받아 OpenAI API에 요청, 응답을 반환

// 메시지 리스너 등록
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // AI 답변 요청 메시지 처리
  if (request.type === 'ASK_GPT') {
    // 비동기 응답을 위해 true 반환
    (async () => {
      try {
        // 저장된 API Key, 모델 불러오기
        chrome.storage.local.get(['openai_api_key', 'gpt_model'], async (data) => {
          const api_key = data.openai_api_key;
          const model = data.gpt_model || 'gpt-4o-mini';
          if (!api_key) {
            sendResponse({ error: 'API Key가 설정되지 않았습니다. 옵션 페이지에서 입력해 주세요.' });
            return;
          }
          // 프롬프트(지시문+리뷰+질문) 생성
          const system_prompt = '아래는 상품에 대한 리뷰입니다. 사용자의 질문에 리뷰를 참고하여 친절하고 명확하게 답변해 주세요.';
          let reviews = request.reviews;
          if (Array.isArray(reviews) && reviews.length > 20) {
            reviews = reviews.slice(0, 20);
          }
          const review_text = (reviews || []).map((r, i) => `리뷰${i+1}: ${r.review_text} (작성자: ${r.author}, 평점: ${r.rating || '-'}, 날짜: ${r.date || '-'})`).join('\n');
          const user_prompt = `질문: ${request.question}\n\n리뷰 목록:\n${review_text}`;
          // OpenAI API 호출
          try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${api_key}`
              },
              body: JSON.stringify({
                model: model,
                messages: [
                  { role: 'system', content: system_prompt },
                  { role: 'user', content: user_prompt }
                ],
                max_tokens: 512,
                temperature: 0.7
              })
            });
            if (!response.ok) {
              sendResponse({ error: 'OpenAI API 호출 실패: ' + response.status });
              return;
            }
            const dataJson = await response.json();
            // 응답 구조에 따라 answer 추출
            let answer = 'AI 답변을 받아오지 못했습니다.';
            if (dataJson.choices && dataJson.choices[0] && dataJson.choices[0].message && dataJson.choices[0].message.content) {
              answer = dataJson.choices[0].message.content.trim();
            } else {
              answer += '\n(응답 구조 확인 필요)\n' + JSON.stringify(dataJson, null, 2);
            }
            sendResponse({ answer });
          } catch (apiError) {
            console.error('OpenAI API 호출 중 예외 발생:', apiError);
            sendResponse({ error: 'OpenAI API 호출 중 예외 발생' });
          }
        });
      } catch (e) {
        console.error('background.js 전체 예외:', e);
        sendResponse({ error: 'OpenAI API 호출 중 예외 발생' });
      }
    })();
    return true; // 항상 true 반환(비동기 응답)
  }
});