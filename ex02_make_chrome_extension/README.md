# YouTube 요약 Chrome 확장 프로그램

YouTube 동영상을 자동으로 요약해주는 Chrome 확장 프로그램입니다.

## 🚀 주요 기능

- **YouTube 동영상 요약**: 현재 보고 있는 YouTube 동영상을 자동으로 요약
- **실시간 요약**: 확장 프로그램 아이콘 클릭으로 즉시 요약 요청
- **별도 팝업 창**: 요약 결과를 깔끔한 팝업 창에 표시
- **복사 기능**: 요약 내용을 클립보드에 복사
- **오류 처리**: 네트워크 오류 및 기타 예외 상황 처리
- **AI 요약 표시**: 제목, 썸네일, 요약 내용을 포함한 완전한 요약 정보 표시

## 📁 파일 구조

```
src/
├── manifest.json         # 확장 프로그램 메타데이터
├── background.js         # 백그라운드 서비스 워커
├── content.js            # YouTube 페이지 콘텐츠 스크립트
├── popup.html            # 팝업 UI
├── popup.js              # 팝업 스크립트
├── summary.html          # 요약 결과 페이지
├── summary.js            # 요약 결과 스크립트
├── test_webhook_response.html  # 웹훅 응답 테스트 페이지
└── assets/
    ├── styles.css        # 공통 스타일시트
    ├── icon.svg          # 아이콘 SVG
    ├── icon16.png        # 16x16 아이콘
    ├── icon48.png        # 48x48 아이콘
    └── icon128.png       # 128x128 아이콘
```

## 🛠️ 설치 방법

### 1. 개발자 모드 활성화
1. Chrome 브라우저에서 `chrome://extensions/` 접속
2. 우측 상단의 "개발자 모드" 토글 활성화

### 2. 확장 프로그램 로드
1. "압축해제된 확장 프로그램을 로드합니다" 버튼 클릭
2. `src` 폴더 선택
3. 확장 프로그램이 로드되면 브라우저 툴바에 아이콘 표시

## 📖 사용 방법

### 기본 사용법
1. YouTube 동영상 페이지 접속
2. 브라우저 툴바의 확장 프로그램 아이콘 클릭
3. "요약하기" 버튼 클릭
4. 요약 결과가 별도 팝업 창에 표시

### 요약 결과 창 기능
- **복사하기**: 요약 내용을 클립보드에 복사
- **다시 요약**: 동일한 동영상에 대해 새 요약 요청
- **닫기**: 창 닫기 (ESC 키도 가능)

### 테스트 방법
1. `test_webhook_response.html` 파일을 브라우저에서 열기
2. "웹훅 응답 테스트" 버튼 클릭
3. 확장 프로그램이 설치되어 있다면 요약 결과가 표시됨

## ⚙️ 설정

### 웹훅 엔드포인트 설정
`background.js` 파일에서 `WEBHOOK_URL` 변수를 실제 웹훅 URL로 변경:

```javascript
const WEBHOOK_URL = 'https://your-webhook-endpoint.com/summarize';
```

### 웹훅 요청 형식
확장 프로그램은 다음과 같은 JSON 형식으로 요청을 전송합니다:

```json
{
  "url": "https://www.youtube.com/watch?v=VIDEO_ID",
  "timestamp": "2024-01-15T10:30:00Z",
  "userAgent": "Mozilla/5.0..."
}
```

### 웹훅 응답 형식
웹훅은 다음과 같은 JSON 형식으로 응답해야 합니다:

```json
{
  "video_id": "https://www.youtube.com/watch?v=8sSxPPr0w6g",
  "title": "해외 인기 1인칭 AI 쇼츠 자동화 제작하는 방법 (make.com 활용)",
  "summary": "이 영상은 AI 쇼츠를 제작하는 과정을 메이크를 활용하여 설명하는 내용을 담고 있습니다...",
  "thumbnail": "https://i.ytimg.com/vi/8sSxPPr0w6g/maxresdefault.jpg",
  "timestamp": "2025-06-29T06:34:51.747Z"
}
```

### 응답 필드 설명
- **`video_id`**: YouTube 비디오의 고유 식별자 (URL 또는 video ID)
- **`title`**: YouTube 비디오의 제목
- **`summary`**: 비디오 내용의 전체 요약 (챕터별로 구분된 상세한 요약)
- **`thumbnail`**: YouTube 비디오의 썸네일 이미지 URL
- **`timestamp`**: 요약 생성 시간 (ISO 8601 형식)

## 🔧 개발 정보

### 권한
- `activeTab`: 현재 탭 정보 접근
- `scripting`: 콘텐츠 스크립트 주입
- `storage`: 설정 저장
- `notifications`: 알림 표시
- `host_permissions`: 모든 도메인 접근 (웹훅 전송용)

### 메시지 흐름
1. **popup.js** → **background.js**: URL 전송
2. **background.js** → **Webhook**: 요약 요청
3. **Webhook** → **background.js**: 요약 응답 (JSON)
4. **background.js** → **summary.js**: 요약 결과 전송
5. **summary.js**: 요약 데이터를 HTML로 렌더링하여 표시

### 지원하는 페이지
- `*://*.youtube.com/watch*`: YouTube 동영상 페이지

## 🐛 문제 해결

### 확장 프로그램이 작동하지 않는 경우
1. 개발자 모드가 활성화되어 있는지 확인
2. YouTube 동영상 페이지에서 사용하는지 확인
3. 브라우저 콘솔에서 오류 메시지 확인

### 웹훅 연결 오류
1. `background.js`의 웹훅 URL이 올바른지 확인
2. 웹훅 서버가 정상적으로 응답하는지 확인
3. CORS 설정이 올바른지 확인
4. 웹훅 응답 형식이 올바른지 확인

### 요약 결과가 표시되지 않는 경우
1. 웹훅 응답이 올바른 JSON 형식인지 확인
2. `title` 또는 `summary` 필드가 포함되어 있는지 확인
3. 브라우저 콘솔에서 네트워크 오류 확인

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 새로운 기능 브랜치를 생성합니다
3. 변경사항을 커밋합니다
4. 브랜치에 푸시합니다
5. Pull Request를 생성합니다

## 📞 지원

문제가 발생하거나 질문이 있으시면 이슈를 생성해주세요. 