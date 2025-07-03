// 옵션 페이지 스크립트
// OpenAI API Key와 GPT 모델을 chrome.storage.local에 저장/불러오기

document.addEventListener('DOMContentLoaded', () => {
  const apiKeyInput = document.getElementById('api-key');
  const modelSelect = document.getElementById('gpt-model');
  const saveBtn = document.getElementById('save-btn');
  const saveSuccess = document.getElementById('save-success');

  // 저장된 값 불러오기
  chrome.storage.local.get(['openai_api_key', 'gpt_model'], (data) => {
    apiKeyInput.value = data.openai_api_key || '';
    modelSelect.value = data.gpt_model || 'gpt-4o-mini';
  });

  // 저장 버튼 클릭 시
  saveBtn.addEventListener('click', () => {
    const apiKey = apiKeyInput.value.trim();
    const model = modelSelect.value;
    chrome.storage.local.set({ openai_api_key: apiKey, gpt_model: model }, () => {
      saveSuccess.style.display = 'block';
      setTimeout(() => { saveSuccess.style.display = 'none'; }, 2000);
    });
  });
}); 