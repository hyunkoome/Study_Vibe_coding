import Link from "next/link";
import PracticePreview from "@/components/PracticePreview";

export default function ResponsiveDesignPage() {
  const responsiveExampleCode = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>반응형 디자인 실습</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    
    .header {
      background: white;
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      margin-bottom: 30px;
      text-align: center;
    }
    
    .nav {
      display: none;
    }
    
    .hamburger {
      display: block;
      font-size: 24px;
      background: none;
      border: none;
      cursor: pointer;
      color: #333;
    }
    
    .grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }
    
    .card {
      background: white;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      text-align: center;
    }
    
    .card h3 {
      color: #333;
      margin-bottom: 15px;
      font-size: 1.5rem;
    }
    
    .card p {
      color: #666;
      line-height: 1.6;
    }
    
    /* 태블릿 스타일 */
    @media (min-width: 768px) {
      .nav {
        display: flex;
        gap: 20px;
        justify-content: center;
        margin-top: 15px;
      }
      
      .nav a {
        color: #333;
        text-decoration: none;
        padding: 8px 16px;
        border-radius: 8px;
        transition: background-color 0.3s;
      }
      
      .nav a:hover {
        background-color: #f0f0f0;
      }
      
      .hamburger {
        display: none;
      }
      
      .grid {
        grid-template-columns: 1fr 1fr;
      }
    }
    
    /* 데스크톱 스타일 */
    @media (min-width: 1024px) {
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
      }
      
      .nav {
        margin-top: 0;
      }
      
      .grid {
        grid-template-columns: 1fr 1fr 1fr;
      }
      
      .card {
        transition: transform 0.3s;
      }
      
      .card:hover {
        transform: translateY(-5px);
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>반응형 디자인 실습</h1>
      <nav class="nav">
        <a href="#">홈</a>
        <a href="#">서비스</a>
        <a href="#">연락처</a>
      </nav>
      <button class="hamburger">☰</button>
    </div>
    
    <div class="grid">
      <div class="card">
        <h3>모바일 우선</h3>
        <p>작은 화면에서도 완벽하게 보이는 디자인입니다.</p>
      </div>
      <div class="card">
        <h3>태블릿 적응</h3>
        <p>중간 크기 화면에서 2열 레이아웃으로 표시됩니다.</p>
      </div>
      <div class="card">
        <h3>데스크톱 최적화</h3>
        <p>큰 화면에서는 3열 레이아웃과 호버 효과를 제공합니다.</p>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        {/* 네비게이션 */}
        <nav className="mb-8">
          <Link href="/" className="text-rose-600 hover:text-rose-800 font-medium">
            ← 메인으로 돌아가기
          </Link>
        </nav>

        {/* 헤더 */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            반응형 디자인
          </h1>
          <p className="text-xl text-gray-600">
            모바일과 데스크톱에서 다르게 보이기
          </p>
        </header>

        {/* 반응형 디자인이란? */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🔍 반응형 디자인이란?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-rose-800 mb-3">일상적인 비유</h3>
              <p className="text-gray-700 mb-4">
                반응형 디자인은 마치 변신하는 로봇과 같습니다. 
                작은 화면(모바일)에서는 작게, 큰 화면(데스크톱)에서는 크게 
                자동으로 모양을 바꿔서 모든 기기에서 잘 보이도록 합니다.
              </p>
              <div className="bg-rose-50 p-4 rounded-lg">
                <h4 className="font-semibold text-rose-800 mb-2">예시:</h4>
                <p className="text-sm text-gray-700">
                  • 모바일 = 세로로 긴 레이아웃<br/>
                  • 태블릿 = 중간 크기 레이아웃<br/>
                  • 데스크톱 = 가로로 넓은 레이아웃<br/>
                  • 자동 조정 = 화면 크기에 따라 변함
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">개발자 관점</h3>
              <p className="text-gray-700 mb-4">
                반응형 웹 디자인(RWD)은 다양한 화면 크기와 해상도에 
                자동으로 적응하는 웹 디자인 방식입니다. 
                CSS 미디어 쿼리를 사용하여 화면 크기에 따라 
                레이아웃과 스타일을 동적으로 변경합니다.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">특징:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 모든 기기에서 최적화</li>
                  <li>• 하나의 코드로 모든 화면 대응</li>
                  <li>• 사용자 경험 향상</li>
                  <li>• SEO 및 접근성 개선</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 화면 크기별 구분 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📱 화면 크기별 구분</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h3 className="font-semibold text-blue-800 mb-2">📱 모바일</h3>
              <div className="text-sm text-gray-700">
                <div className="font-semibold">320px ~ 768px</div>
                <div className="mt-2">
                  • 세로 방향 레이아웃<br/>
                  • 큰 터치 버튼<br/>
                  • 간단한 네비게이션<br/>
                  • 최소한의 콘텐츠
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h3 className="font-semibold text-green-800 mb-2">📱 태블릿</h3>
              <div className="text-sm text-gray-700">
                <div className="font-semibold">768px ~ 1024px</div>
                <div className="mt-2">
                  • 중간 크기 레이아웃<br/>
                  • 2-3열 그리드<br/>
                  • 햄버거 메뉴<br/>
                  • 적당한 여백
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h3 className="font-semibold text-purple-800 mb-2">💻 데스크톱</h3>
              <div className="text-sm text-gray-700">
                <div className="font-semibold">1024px ~ 1440px</div>
                <div className="mt-2">
                  • 넓은 레이아웃<br/>
                  • 3-4열 그리드<br/>
                  • 상단 네비게이션<br/>
                  • 풍부한 콘텐츠
                </div>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h3 className="font-semibold text-orange-800 mb-2">🖥️ 대형 화면</h3>
              <div className="text-sm text-gray-700">
                <div className="font-semibold">1440px+</div>
                <div className="mt-2">
                  • 최대 너비 제한<br/>
                  • 중앙 정렬<br/>
                  • 여백 활용<br/>
                  • 고해상도 최적화
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 미디어 쿼리 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 미디어 쿼리</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">미디어 쿼리란?</h3>
              <p className="text-gray-700 mb-4">
                미디어 쿼리는 CSS에서 특정 조건(화면 크기, 방향 등)에 따라 
                다른 스타일을 적용할 수 있게 해주는 기능입니다.
                반응형 디자인의 핵심 기술입니다.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">기본 문법:</h4>
                <div className="text-sm">
                  <code className="bg-gray-200 px-1 rounded">@media (조건) {'{'} 스타일 {'}'}</code>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">미디어 쿼리 예시</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400">/* 기본 스타일 (모바일) */</div>
                <div>.container &#123;</div>
                <div className="ml-4">padding: 10px;</div>
                <div className="ml-4">font-size: 14px;</div>
                <div>&#125;</div>
                <div className="mt-4 text-yellow-400">/* 태블릿 */</div>
                <div>@media (min-width: 768px) &#123;</div>
                <div className="ml-4">.container &#123;</div>
                <div className="ml-8">padding: 20px;</div>
                <div className="ml-8">font-size: 16px;</div>
                <div className="ml-4">&#125;</div>
                <div>&#125;</div>
                <div className="mt-4 text-yellow-400">/* 데스크톱 */</div>
                <div>@media (min-width: 1024px) &#123;</div>
                <div className="ml-4">.container &#123;</div>
                <div className="ml-8">padding: 40px;</div>
                <div className="ml-8">font-size: 18px;</div>
                <div className="ml-4">&#125;</div>
                <div>&#125;</div>
              </div>
            </div>
          </div>
        </section>

        {/* 반응형 실습 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 반응형 실습</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h3 className="font-semibold text-blue-800 mb-3">모바일 우선</h3>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                <div>/* 모바일 기본 */</div>
                <div>.card &#123;</div>
                <div className="ml-4">width: 100%;</div>
                <div className="ml-4">margin: 10px 0;</div>
                <div>&#125;</div>
                <div className="mt-2">/* 태블릿+ */</div>
                <div>@media (min-width: 768px) &#123;</div>
                <div className="ml-4">.card &#123;</div>
                <div className="ml-8">width: 48%;</div>
                <div className="ml-8">margin: 10px 1%;</div>
                <div className="ml-4">&#125;</div>
                <div>&#125;</div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h3 className="font-semibold text-green-800 mb-3">그리드 시스템</h3>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                <div>.grid &#123;</div>
                <div className="ml-4">display: grid;</div>
                <div className="ml-4">grid-template-columns: 1fr;</div>
                <div>&#125;</div>
                <div className="mt-2">@media (min-width: 768px) &#123;</div>
                <div className="ml-4">.grid &#123;</div>
                <div className="ml-8">grid-template-columns: 1fr 1fr;</div>
                <div className="ml-4">&#125;</div>
                <div>&#125;</div>
                <div className="mt-2">@media (min-width: 1024px) &#123;</div>
                <div className="ml-4">.grid &#123;</div>
                <div className="ml-8">grid-template-columns: 1fr 1fr 1fr;</div>
                <div className="ml-4">&#125;</div>
                <div>&#125;</div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h3 className="font-semibold text-purple-800 mb-3">네비게이션</h3>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                <div>/* 모바일: 햄버거 메뉴 */</div>
                <div>.nav &#123;</div>
                <div className="ml-4">display: none;</div>
                <div>&#125;</div>
                <div>.hamburger &#123;</div>
                <div className="ml-4">display: block;</div>
                <div>&#125;</div>
                <div className="mt-2">/* 데스크톱: 가로 메뉴 */</div>
                <div>@media (min-width: 768px) &#123;</div>
                <div className="ml-4">.nav &#123;</div>
                <div className="ml-8">display: flex;</div>
                <div className="ml-4">&#125;</div>
                <div className="ml-4">.hamburger &#123;</div>
                <div className="ml-8">display: none;</div>
                <div className="ml-4">&#125;</div>
                <div>&#125;</div>
              </div>
            </div>
          </div>
        </section>

        {/* 실제 예시 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📱 실제 반응형 예시</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">HTML 구조</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div>&lt;!DOCTYPE html&gt;</div>
                <div>&lt;html lang="ko"&gt;</div>
                <div>&lt;head&gt;</div>
                <div className="ml-4">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</div>
                <div className="ml-4">&lt;title&gt;반응형 웹사이트&lt;/title&gt;</div>
                <div className="ml-4">&lt;link rel="stylesheet" href="style.css"&gt;</div>
                <div>&lt;/head&gt;</div>
                <div>&lt;body&gt;</div>
                <div className="ml-4">&lt;header&gt;</div>
                <div className="ml-8">&lt;nav class="nav"&gt;</div>
                <div className="ml-12">&lt;a href="#"&gt;홈&lt;/a&gt;</div>
                <div className="ml-12">&lt;a href="#"&gt;서비스&lt;/a&gt;</div>
                <div className="ml-12">&lt;a href="#"&gt;연락처&lt;/a&gt;</div>
                <div className="ml-8">&lt;/nav&gt;</div>
                <div className="ml-8">&lt;button class="hamburger"&gt;☰&lt;/button&gt;</div>
                <div className="ml-4">&lt;/header&gt;</div>
                <div className="ml-4">&lt;main&gt;</div>
                <div className="ml-8">&lt;div class="grid"&gt;</div>
                <div className="ml-12">&lt;div class="card"&gt;카드 1&lt;/div&gt;</div>
                <div className="ml-12">&lt;div class="card"&gt;카드 2&lt;/div&gt;</div>
                <div className="ml-12">&lt;div class="card"&gt;카드 3&lt;/div&gt;</div>
                <div className="ml-8">&lt;/div&gt;</div>
                <div className="ml-4">&lt;/main&gt;</div>
                <div>&lt;/body&gt;</div>
                <div>&lt;/html&gt;</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">CSS 스타일</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400">/* style.css */</div>
                <div>* &#123; margin: 0; padding: 0; box-sizing: border-box; &#125;</div>
                <div className="mt-4">body &#123;</div>
                <div className="ml-4">font-family: Arial, sans-serif;</div>
                <div className="ml-4">line-height: 1.6;</div>
                <div>&#125;</div>
                <div className="mt-4">/* 모바일 스타일 */</div>
                <div>.nav &#123; display: none; &#125;</div>
                <div>.hamburger &#123; display: block; &#125;</div>
                <div>.grid &#123;</div>
                <div className="ml-4">display: grid;</div>
                <div className="ml-4">grid-template-columns: 1fr;</div>
                <div className="ml-4">gap: 20px;</div>
                <div className="ml-4">padding: 20px;</div>
                <div>&#125;</div>
                <div className="mt-4">/* 태블릿 스타일 */</div>
                <div>@media (min-width: 768px) &#123;</div>
                <div className="ml-4">.nav &#123;</div>
                <div className="ml-8">display: flex;</div>
                <div className="ml-8">gap: 20px;</div>
                <div className="ml-4">&#125;</div>
                <div className="ml-4">.hamburger &#123; display: none; &#125;</div>
                <div className="ml-4">.grid &#123;</div>
                <div className="ml-8">grid-template-columns: 1fr 1fr;</div>
                <div className="ml-4">&#125;</div>
                <div>&#125;</div>
                <div className="mt-4">/* 데스크톱 스타일 */</div>
                <div>@media (min-width: 1024px) &#123;</div>
                <div className="ml-4">.grid &#123;</div>
                <div className="ml-8">grid-template-columns: 1fr 1fr 1fr;</div>
                <div className="ml-8">max-width: 1200px;</div>
                <div className="ml-8">margin: 0 auto;</div>
                <div className="ml-4">&#125;</div>
                <div>&#125;</div>
              </div>
            </div>
          </div>
        </section>

        {/* 반응형 테스트 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🧪 반응형 테스트</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">브라우저에서 테스트</h3>
              <ol className="text-gray-700 space-y-2">
                <li>1. 개발자 도구 열기 (F12)</li>
                <li>2. 반응형 모드 활성화</li>
                <li>3. 다양한 화면 크기 선택</li>
                <li>4. 레이아웃 변화 확인</li>
                <li>5. 실제 기기에서 테스트</li>
              </ol>
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">💡 테스트 팁</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• 다양한 브라우저에서 테스트</li>
                  <li>• 실제 모바일 기기 확인</li>
                  <li>• 터치 인터페이스 테스트</li>
                  <li>• 로딩 속도 확인</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">일반적인 화면 크기</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-100 rounded">
                  <span className="font-semibold">iPhone SE</span>
                  <span className="text-sm text-gray-600">375px</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-100 rounded">
                  <span className="font-semibold">iPhone 12</span>
                  <span className="text-sm text-gray-600">390px</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-100 rounded">
                  <span className="font-semibold">iPad</span>
                  <span className="text-sm text-gray-600">768px</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-100 rounded">
                  <span className="font-semibold">MacBook</span>
                  <span className="text-sm text-gray-600">1440px</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-100 rounded">
                  <span className="font-semibold">Desktop</span>
                  <span className="text-sm text-gray-600">1920px</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 실습 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🛠️ 직접 실습해보기</h2>
          <p className="text-gray-600 mb-4">반응형 디자인 코드를 직접 수정해보세요! 브라우저 창 크기를 조절해서 결과를 확인해보세요.</p>
          <PracticePreview initialCode={responsiveExampleCode} />
        </section>

        {/* 다음 단계 */}
        <section className="bg-rose-50 border-l-4 border-rose-400 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-rose-800 mb-3">📚 다음 단계</h2>
          <p className="text-gray-700 mb-4">
            반응형 디자인을 배웠다면, 다음 단계로 넘어가보세요:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/html-basics" className="bg-rose-600 text-white p-3 rounded-lg text-center hover:bg-rose-700 transition-colors">
              HTML 기초
            </Link>
            <Link href="/css-basics" className="bg-rose-600 text-white p-3 rounded-lg text-center hover:bg-rose-700 transition-colors">
              CSS 기초
            </Link>
            <Link href="/layout-practice" className="bg-rose-600 text-white p-3 rounded-lg text-center hover:bg-rose-700 transition-colors">
              레이아웃 연습
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 