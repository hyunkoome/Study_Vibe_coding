# 쿠팡 리뷰 크롤러 & 챗봇 확장 프로그램

## 주요 기능

### 1. 리뷰 크롤링 기능
- 쿠팡 상품 페이지에서 모든 리뷰를 자동으로 크롤링
- 리뷰 본문, 작성자, 날짜, 평점 정보 수집
- 페이지네이션을 통한 전체 리뷰 수집
- 진행상황 실시간 표시

### 2. 카카오톡 스타일 챗봇 기능 ✨ NEW!
- 하단 우측에 플로팅 챗봇 아이콘 표시
- 카카오톡과 유사한 채팅 인터페이스
- 상품 관련 질문에 대한 지능형 응답
- 타이핑 애니메이션 및 부드러운 전환 효과

## 챗봇 기능 상세

### 지원하는 질문 유형
- **상품 관련**: "이 상품에 대해 알려줘"
- **가격 관련**: "가격이 얼마인가요?"
- **배송 관련**: "배송은 언제 되나요?"
- **리뷰 관련**: "리뷰를 보고 싶어요"
- **환불/교환**: "환불이 가능한가요?"
- **인사**: "안녕하세요"

### 챗봇 사용법
1. 쿠팡 상품 페이지 접속
2. 하단 우측의 💬 아이콘 클릭
3. 챗봇 창이 열리면 질문 입력
4. 엔터키 또는 전송 버튼으로 메시지 전송

## 설치 및 사용법

### 1. Chrome 확장 프로그램 설치
- Chrome 브라우저에서 `chrome://extensions` 접속
- 개발자 모드 활성화
- "압축해제된 확장 프로그램을 로드합니다" 클릭
- `src` 폴더 선택

### 2. 사용 방법
1. 쿠팡 상품 페이지로 이동
2. 확장 프로그램 아이콘 클릭
3. "리뷰 크롤링 시작" 버튼 클릭
4. 챗봇 사용 시 하단 우측 아이콘 클릭

## 파일 구조

```
src/
├── manifest.json          # 확장 프로그램 설정
├── content.js             # 페이지 주입 스크립트 (크롤링 + 챗봇)
├── popup.html             # 팝업 UI
├── popup.js               # 팝업 로직
├── background.js          # 백그라운드 스크립트
├── chatbot.html           # 챗봇 HTML (독립 실행용)
├── chatbot.css            # 챗봇 스타일
├── chatbot.js             # 챗봇 로직 (독립 실행용)
└── assets/
    └── xlsx.full.min.js   # 엑셀 내보내기 라이브러리
```

## 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Chrome Extension API**: Manifest V3
- **스타일링**: 카카오톡 디자인 시스템 참고
- **애니메이션**: CSS3 Transitions & Keyframes

## 개발 이력

### 초기 개발
```bash
크롬 확장 프로그램을 이용해서 쿠팡 홈페이지의 리뷰를 크롤링 하려고 해.
@https://www.coupang.com/vp/products/8289316403?itemId=23097750172&searchId=f3089c0a6ba84f6c813d1cfa1fda1cee&sourceType=brandstore_display_ads-carousel&storeId=109707&subSourceType=brandstore_display_ads-carousel&vendorId=A00160873&vendorItemId=3861532097

이거는 쿠팡 상품 페이지야. 홈페이지를 참고해서 먼저 크롬 확장 프로그램에 업로드를 할 수 있게 초안코드를 작성해줘.

코드는 @/ex03_chrome_cupang_chatbot의 src 폴더 안 에 작성해줘.

크롤링이 매우 잘 되었어. 그런데 나는 전체 리뷰를 크롤링 하고 싶어. 지금 기본 설정이 100개인데, 100개가 아니라 해당 상품 페이지의 총 상품평이 크롤링 되었으면 좋겠어
```
