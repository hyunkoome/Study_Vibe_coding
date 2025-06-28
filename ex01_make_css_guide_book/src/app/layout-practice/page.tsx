import Link from "next/link";

export default function LayoutPracticePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-8">
        {/* 네비게이션 */}
        <nav className="mb-8">
          <Link href="/" className="text-amber-600 hover:text-amber-800 font-medium">
            ← 메인으로 돌아가기
          </Link>
        </nav>

        {/* 헤더 */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            레이아웃 연습
          </h1>
          <p className="text-xl text-gray-600">
            Flexbox와 Grid를 활용한 레이아웃
          </p>
        </header>

        {/* 레이아웃이란? */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🔍 레이아웃이란?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-amber-800 mb-3">일상적인 비유</h3>
              <p className="text-gray-700 mb-4">
                레이아웃은 마치 가구를 배치하는 것과 같습니다. 
                Flexbox는 유연한 가구 배치 시스템이고, 
                Grid는 격자 형태의 정확한 배치 시스템입니다.
                둘 다 요소들을 원하는 위치에 배치하는 방법입니다.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">예시:</h4>
                <p className="text-sm text-gray-700">
                  • Flexbox = 가구를 유연하게 배치<br/>
                  • Grid = 격자판에 정확히 배치<br/>
                  • 반응형 = 화면 크기에 따라 자동 조정
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">개발자 관점</h3>
              <p className="text-gray-700 mb-4">
                CSS 레이아웃은 웹 페이지의 요소들을 배치하고 정렬하는 방법입니다.
                Flexbox는 1차원 레이아웃(행 또는 열), 
                Grid는 2차원 레이아웃(행과 열)을 위한 CSS 모듈입니다.
                반응형 디자인을 구현하는 핵심 기술입니다.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">특징:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 모던한 레이아웃 방식</li>
                  <li>• 반응형 디자인 지원</li>
                  <li>• 복잡한 레이아웃 구현 가능</li>
                  <li>• 브라우저 호환성 우수</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Flexbox 기초 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📦 Flexbox 기초</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Flexbox 개념</h3>
              <p className="text-gray-700 mb-4">
                Flexbox는 요소들을 유연하게 배치할 수 있는 1차원 레이아웃 모델입니다.
                주축(main axis)과 교차축(cross axis)을 기준으로 요소들을 정렬합니다.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">주요 속성:</h4>
                <ul className="text-sm space-y-1">
                  <li>• <code className="bg-gray-200 px-1 rounded">display: flex</code> - Flexbox 활성화</li>
                  <li>• <code className="bg-gray-200 px-1 rounded">flex-direction</code> - 주축 방향</li>
                  <li>• <code className="bg-gray-200 px-1 rounded">justify-content</code> - 주축 정렬</li>
                  <li>• <code className="bg-gray-200 px-1 rounded">align-items</code> - 교차축 정렬</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Flexbox 예시</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div>.container &#123;</div>
                <div className="ml-4">display: flex;</div>
                <div className="ml-4">justify-content: center;</div>
                <div className="ml-4">align-items: center;</div>
                <div className="ml-4">gap: 20px;</div>
                <div>&#125;</div>
                <div className="mt-4">.item &#123;</div>
                <div className="ml-4">flex: 1;</div>
                <div className="ml-4">padding: 20px;</div>
                <div className="ml-4">background: #f0f0f0;</div>
                <div>&#125;</div>
              </div>
            </div>
          </div>
        </section>

        {/* Flexbox 실습 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 Flexbox 실습</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h3 className="font-semibold text-blue-800 mb-3">기본 Flexbox</h3>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs mb-3">
                display: flex;
              </div>
              <div className="flex bg-gray-200 p-2 rounded">
                <div className="bg-blue-500 text-white p-2 rounded mr-2">1</div>
                <div className="bg-blue-500 text-white p-2 rounded mr-2">2</div>
                <div className="bg-blue-500 text-white p-2 rounded">3</div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h3 className="font-semibold text-green-800 mb-3">중앙 정렬</h3>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs mb-3">
                justify-content: center;
              </div>
              <div className="flex justify-center bg-gray-200 p-2 rounded">
                <div className="bg-green-500 text-white p-2 rounded mr-2">1</div>
                <div className="bg-green-500 text-white p-2 rounded mr-2">2</div>
                <div className="bg-green-500 text-white p-2 rounded">3</div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h3 className="font-semibold text-purple-800 mb-3">양쪽 정렬</h3>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs mb-3">
                justify-content: space-between;
              </div>
              <div className="flex justify-between bg-gray-200 p-2 rounded">
                <div className="bg-purple-500 text-white p-2 rounded">1</div>
                <div className="bg-purple-500 text-white p-2 rounded">2</div>
                <div className="bg-purple-500 text-white p-2 rounded">3</div>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h3 className="font-semibold text-orange-800 mb-3">세로 방향</h3>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs mb-3">
                flex-direction: column;
              </div>
              <div className="flex flex-col bg-gray-200 p-2 rounded">
                <div className="bg-orange-500 text-white p-2 rounded mb-2">1</div>
                <div className="bg-orange-500 text-white p-2 rounded mb-2">2</div>
                <div className="bg-orange-500 text-white p-2 rounded">3</div>
              </div>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h3 className="font-semibold text-red-800 mb-3">균등 분할</h3>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs mb-3">
                flex: 1;
              </div>
              <div className="flex bg-gray-200 p-2 rounded">
                <div className="flex-1 bg-red-500 text-white p-2 rounded mr-2 text-center">1</div>
                <div className="flex-1 bg-red-500 text-white p-2 rounded mr-2 text-center">2</div>
                <div className="flex-1 bg-red-500 text-white p-2 rounded text-center">3</div>
              </div>
            </div>
            
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400">
              <h3 className="font-semibold text-cyan-800 mb-3">세로 중앙</h3>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs mb-3">
                align-items: center;
              </div>
              <div className="flex items-center bg-gray-200 p-2 rounded h-20">
                <div className="bg-cyan-500 text-white p-2 rounded mr-2">1</div>
                <div className="bg-cyan-500 text-white p-2 rounded mr-2">2</div>
                <div className="bg-cyan-500 text-white p-2 rounded">3</div>
              </div>
            </div>
          </div>
        </section>

        {/* Grid 기초 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🔲 Grid 기초</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Grid 개념</h3>
              <p className="text-gray-700 mb-4">
                CSS Grid는 2차원 레이아웃 시스템으로, 행과 열을 모두 제어할 수 있습니다.
                격자 형태로 요소들을 정확하게 배치할 수 있어 복잡한 레이아웃에 유용합니다.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">주요 속성:</h4>
                <ul className="text-sm space-y-1">
                  <li>• <code className="bg-gray-200 px-1 rounded">display: grid</code> - Grid 활성화</li>
                  <li>• <code className="bg-gray-200 px-1 rounded">grid-template-columns</code> - 열 정의</li>
                  <li>• <code className="bg-gray-200 px-1 rounded">grid-template-rows</code> - 행 정의</li>
                  <li>• <code className="bg-gray-200 px-1 rounded">grid-gap</code> - 간격 설정</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Grid 예시</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div>.container &#123;</div>
                <div className="ml-4">display: grid;</div>
                <div className="ml-4">grid-template-columns: 1fr 1fr 1fr;</div>
                <div className="ml-4">grid-template-rows: 100px 100px;</div>
                <div className="ml-4">gap: 20px;</div>
                <div>&#125;</div>
                <div className="mt-4">.item &#123;</div>
                <div className="ml-4">background: #f0f0f0;</div>
                <div className="ml-4">padding: 20px;</div>
                <div className="ml-4">text-align: center;</div>
                <div>&#125;</div>
              </div>
            </div>
          </div>
        </section>

        {/* Grid 실습 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 Grid 실습</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h3 className="font-semibold text-blue-800 mb-3">3x2 Grid</h3>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs mb-3">
                grid-template-columns: 1fr 1fr 1fr;
              </div>
              <div className="grid grid-cols-3 gap-2 bg-gray-200 p-2 rounded">
                <div className="bg-blue-500 text-white p-2 rounded text-center">1</div>
                <div className="bg-blue-500 text-white p-2 rounded text-center">2</div>
                <div className="bg-blue-500 text-white p-2 rounded text-center">3</div>
                <div className="bg-blue-500 text-white p-2 rounded text-center">4</div>
                <div className="bg-blue-500 text-white p-2 rounded text-center">5</div>
                <div className="bg-blue-500 text-white p-2 rounded text-center">6</div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h3 className="font-semibold text-green-800 mb-3">2x3 Grid</h3>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs mb-3">
                grid-template-columns: 1fr 1fr;
              </div>
              <div className="grid grid-cols-2 gap-2 bg-gray-200 p-2 rounded">
                <div className="bg-green-500 text-white p-2 rounded text-center">1</div>
                <div className="bg-green-500 text-white p-2 rounded text-center">2</div>
                <div className="bg-green-500 text-white p-2 rounded text-center">3</div>
                <div className="bg-green-500 text-white p-2 rounded text-center">4</div>
                <div className="bg-green-500 text-white p-2 rounded text-center">5</div>
                <div className="bg-green-500 text-white p-2 rounded text-center">6</div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h3 className="font-semibold text-purple-800 mb-3">비대칭 Grid</h3>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs mb-3">
                grid-template-columns: 2fr 1fr;
              </div>
              <div className="grid grid-cols-3 gap-2 bg-gray-200 p-2 rounded">
                <div className="col-span-2 bg-purple-500 text-white p-2 rounded text-center">1 (2칸)</div>
                <div className="bg-purple-500 text-white p-2 rounded text-center">2</div>
                <div className="bg-purple-500 text-white p-2 rounded text-center">3</div>
                <div className="col-span-2 bg-purple-500 text-white p-2 rounded text-center">4 (2칸)</div>
              </div>
            </div>
          </div>
        </section>

        {/* 실제 레이아웃 예시 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📱 실제 레이아웃 예시</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">카드 레이아웃 (Flexbox)</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
                <div>.card-container &#123;</div>
                <div className="ml-4">display: flex;</div>
                <div className="ml-4">flex-wrap: wrap;</div>
                <div className="ml-4">gap: 20px;</div>
                <div>&#125;</div>
                <div>.card &#123;</div>
                <div className="ml-4">flex: 1 1 300px;</div>
                <div className="ml-4">background: white;</div>
                <div className="ml-4">border-radius: 8px;</div>
                <div className="ml-4">box-shadow: 0 2px 4px;</div>
                <div>&#125;</div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[300px] bg-white border rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold mb-2">카드 1</h4>
                  <p className="text-gray-600">카드 내용입니다.</p>
                </div>
                <div className="flex-1 min-w-[300px] bg-white border rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold mb-2">카드 2</h4>
                  <p className="text-gray-600">카드 내용입니다.</p>
                </div>
                <div className="flex-1 min-w-[300px] bg-white border rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold mb-2">카드 3</h4>
                  <p className="text-gray-600">카드 내용입니다.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">사이드바 레이아웃 (Grid)</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
                <div>.layout &#123;</div>
                <div className="ml-4">display: grid;</div>
                <div className="ml-4">grid-template-columns: 250px 1fr;</div>
                <div className="ml-4">grid-template-rows: 60px 1fr;</div>
                <div className="ml-4">min-height: 100vh;</div>
                <div>&#125;</div>
                <div>.header &#123; grid-column: 1 / -1; &#125;</div>
                <div>.sidebar &#123; grid-row: 2 / -1; &#125;</div>
              </div>
              <div className="grid grid-cols-4 gap-2 bg-gray-200 p-2 rounded h-40">
                <div className="col-span-4 bg-blue-500 text-white p-2 rounded text-center">헤더</div>
                <div className="bg-green-500 text-white p-2 rounded text-center">사이드바</div>
                <div className="col-span-3 bg-white p-2 rounded text-center">메인 콘텐츠</div>
              </div>
            </div>
          </div>
        </section>

        {/* 반응형 레이아웃 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📱 반응형 레이아웃</h2>
          <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm">
            <div className="text-yellow-400">/* 반응형 Grid 예시 */</div>
            <div>.responsive-grid &#123;</div>
            <div className="ml-4">display: grid;</div>
            <div className="ml-4">grid-template-columns: 1fr;</div>
            <div className="ml-4">gap: 20px;</div>
            <div>&#125;</div>
            <div className="mt-4 text-yellow-400">/* 태블릿 */</div>
            <div>@media (min-width: 768px) &#123;</div>
            <div className="ml-4">.responsive-grid &#123;</div>
            <div className="ml-8">grid-template-columns: 1fr 1fr;</div>
            <div className="ml-4">&#125;</div>
            <div>&#125;</div>
            <div className="mt-4 text-yellow-400">/* 데스크톱 */</div>
            <div>@media (min-width: 1024px) &#123;</div>
            <div className="ml-4">.responsive-grid &#123;</div>
            <div className="ml-8">grid-template-columns: 1fr 1fr 1fr;</div>
            <div className="ml-4">&#125;</div>
            <div>&#125;</div>
          </div>
        </section>

        {/* 실습 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🛠️ 직접 실습해보기</h2>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-amber-800 mb-3">레이아웃 실습</h3>
            <ol className="text-gray-700 space-y-2">
              <li>1. 새로운 HTML 파일을 만들어주세요</li>
              <li>2. 다음 코드를 복사해서 붙여넣기 해주세요:</li>
            </ol>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mt-4">
              <div>&lt;!DOCTYPE html&gt;</div>
              <div>&lt;html lang="ko"&gt;</div>
              <div>&lt;head&gt;</div>
              <div className="ml-4">&lt;title&gt;레이아웃 실습&lt;/title&gt;</div>
              <div className="ml-4">&lt;style&gt;</div>
              <div className="ml-8">body &#123;</div>
              <div className="ml-12">margin: 0;</div>
              <div className="ml-12">padding: 20px;</div>
              <div className="ml-12">font-family: Arial, sans-serif;</div>
              <div className="ml-8">&#125;</div>
              <div className="ml-8">.flex-container &#123;</div>
              <div className="ml-12">display: flex;</div>
              <div className="ml-12">justify-content: space-between;</div>
              <div className="ml-12">align-items: center;</div>
              <div className="ml-12">background: #f0f0f0;</div>
              <div className="ml-12">padding: 20px;</div>
              <div className="ml-12">margin-bottom: 20px;</div>
              <div className="ml-8">&#125;</div>
              <div className="ml-8">.grid-container &#123;</div>
              <div className="ml-12">display: grid;</div>
              <div className="ml-12">grid-template-columns: 1fr 1fr 1fr;</div>
              <div className="ml-12">gap: 20px;</div>
              <div className="ml-8">&#125;</div>
              <div className="ml-8">.item &#123;</div>
              <div className="ml-12">background: white;</div>
              <div className="ml-12">padding: 20px;</div>
              <div className="ml-12">border-radius: 8px;</div>
              <div className="ml-12">box-shadow: 0 2px 4px rgba(0,0,0,0.1);</div>
              <div className="ml-8">&#125;</div>
              <div className="ml-4">&lt;/style&gt;</div>
              <div>&lt;/head&gt;</div>
              <div>&lt;body&gt;</div>
              <div className="ml-4">&lt;div class="flex-container"&gt;</div>
              <div className="ml-8">&lt;div class="item"&gt;Flexbox 아이템 1&lt;/div&gt;</div>
              <div className="ml-8">&lt;div class="item"&gt;Flexbox 아이템 2&lt;/div&gt;</div>
              <div className="ml-8">&lt;div class="item"&gt;Flexbox 아이템 3&lt;/div&gt;</div>
              <div className="ml-4">&lt;/div&gt;</div>
              <div className="ml-4">&lt;div class="grid-container"&gt;</div>
              <div className="ml-8">&lt;div class="item"&gt;Grid 아이템 1&lt;/div&gt;</div>
              <div className="ml-8">&lt;div class="item"&gt;Grid 아이템 2&lt;/div&gt;</div>
              <div className="ml-8">&lt;div class="item"&gt;Grid 아이템 3&lt;/div&gt;</div>
              <div className="ml-8">&lt;div class="item"&gt;Grid 아이템 4&lt;/div&gt;</div>
              <div className="ml-8">&lt;div class="item"&gt;Grid 아이템 5&lt;/div&gt;</div>
              <div className="ml-8">&lt;div class="item"&gt;Grid 아이템 6&lt;/div&gt;</div>
              <div className="ml-4">&lt;/div&gt;</div>
              <div>&lt;/body&gt;</div>
              <div>&lt;/html&gt;</div>
            </div>
            <ol className="text-gray-700 space-y-2 mt-4">
              <li>3. 파일을 "layout-practice.html"로 저장해주세요</li>
              <li>4. 브라우저에서 열어보세요</li>
              <li>5. CSS를 수정해서 다양한 레이아웃을 실험해보세요!</li>
            </ol>
          </div>
        </section>

        {/* 다음 단계 */}
        <section className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-amber-800 mb-3">📚 다음 단계</h2>
          <p className="text-gray-700 mb-4">
            레이아웃 연습을 통해 Flexbox와 Grid를 배웠다면, 다음 단계로 넘어가보세요:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/html-basics" className="bg-amber-600 text-white p-3 rounded-lg text-center hover:bg-amber-700 transition-colors">
              HTML 기초
            </Link>
            <Link href="/css-basics" className="bg-amber-600 text-white p-3 rounded-lg text-center hover:bg-amber-700 transition-colors">
              CSS 기초
            </Link>
            <Link href="/responsive-design" className="bg-amber-600 text-white p-3 rounded-lg text-center hover:bg-amber-700 transition-colors">
              반응형 디자인
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 