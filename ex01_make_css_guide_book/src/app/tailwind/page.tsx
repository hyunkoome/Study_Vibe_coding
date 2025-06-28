import Link from "next/link";

export default function TailwindPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        {/* 네비게이션 */}
        <nav className="mb-8">
          <Link href="/" className="text-cyan-600 hover:text-cyan-800 font-medium">
            ← 메인으로 돌아가기
          </Link>
        </nav>

        {/* 헤더 */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Tailwind CSS 옵션
          </h1>
          <p className="text-xl text-gray-600">
            유틸리티 기반의 현대적인 CSS 프레임워크
          </p>
        </header>

        {/* 기본 설명 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🔍 Tailwind CSS란?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-cyan-800 mb-3">일상적인 비유</h3>
              <p className="text-gray-700 mb-4">
                Tailwind CSS는 마치 레고 블록을 조립하는 것과 같습니다. 
                미리 만들어진 작은 부품들(클래스)을 조합해서 원하는 모양을 만듭니다.
                "큰 빨간 블록 2개, 작은 파란 블록 3개"처럼 구체적으로 조립하는 방식입니다.
              </p>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <h4 className="font-semibold text-cyan-800 mb-2">예시:</h4>
                <p className="text-sm text-gray-700">
                  • <code className="bg-gray-200 px-1 rounded">bg-blue-500</code> = 파란색 배경<br/>
                  • <code className="bg-gray-200 px-1 rounded">text-white</code> = 흰색 글자<br/>
                  • <code className="bg-gray-200 px-1 rounded">p-4</code> = 안쪽 여백 16px
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">개발자 관점</h3>
              <p className="text-gray-700 mb-4">
                Tailwind CSS는 유틸리티 퍼스트 CSS 프레임워크로, 
                미리 정의된 클래스들을 HTML 요소에 직접 적용하여 스타일링합니다.
                CSS 파일을 따로 작성할 필요 없이 HTML에서 바로 스타일을 적용할 수 있습니다.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">장점:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 빠른 개발 속도</li>
                  <li>• 일관된 디자인 시스템</li>
                  <li>• 반응형 디자인 쉬움</li>
                  <li>• CSS 파일 크기 최적화</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 선택 기준 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🤔 언제 선택해야 할까요?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Yes를 선택하는 경우</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 빠르게 프로토타입을 만들고 싶을 때</li>
                <li>• 일관된 디자인을 원할 때</li>
                <li>• CSS 작성 시간을 줄이고 싶을 때</li>
                <li>• 반응형 웹사이트를 만들고 싶을 때</li>
                <li>• 팀 프로젝트에서 디자인 통일성을 원할 때</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ No를 선택하는 경우</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 전통적인 CSS 방식을 선호할 때</li>
                <li>• 매우 복잡한 커스텀 디자인이 필요할 때</li>
                <li>• CSS-in-JS 방식을 사용하고 싶을 때</li>
                <li>• 기존 CSS 프레임워크를 사용 중일 때</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 코드 예시 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 코드 예시</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-3">전통적인 CSS</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400">/* CSS 파일 */</div>
                <div>.button {'{'}</div>
                <div className="ml-4">background-color: #3b82f6;</div>
                <div className="ml-4">color: white;</div>
                <div className="ml-4">padding: 12px 24px;</div>
                <div className="ml-4">border-radius: 8px;</div>
                <div className="ml-4">font-weight: 600;</div>
                <div>{'}'}</div>
                <div className="mt-4 text-yellow-400">/* HTML */</div>
                <div>&lt;button class="button"&gt;클릭하세요&lt;/button&gt;</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-3">Tailwind CSS</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400">/* CSS 파일 불필요! */</div>
                <div className="mt-4 text-yellow-400">/* HTML만으로 스타일링 */</div>
                <div>&lt;button class="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold"&gt;</div>
                <div className="ml-4">클릭하세요</div>
                <div>&lt;/button&gt;</div>
                <div className="mt-4 text-blue-400">// 장점: 빠르고 직관적</div>
                <div className="text-blue-400">// 장점: CSS 파일 관리 불필요</div>
              </div>
            </div>
          </div>
        </section>

        {/* 실습 예시 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎨 실습 예시</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">카드 컴포넌트 만들기</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div>&lt;div class="bg-white rounded-lg shadow-lg p-6 max-w-sm"&gt;</div>
                <div className="ml-4">&lt;h3 class="text-xl font-bold text-gray-800 mb-2"&gt;</div>
                <div className="ml-8">제목</div>
                <div className="ml-4">&lt;/h3&gt;</div>
                <div className="ml-4">&lt;p class="text-gray-600"&gt;</div>
                <div className="ml-8">설명 텍스트</div>
                <div className="ml-4">&lt;/p&gt;</div>
                <div className="ml-4">&lt;button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"&gt;</div>
                <div className="ml-8">버튼</div>
                <div className="ml-4">&lt;/button&gt;</div>
                <div>&lt;/div&gt;</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">실제 결과</h3>
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm border">
                <h3 className="text-xl font-bold text-gray-800 mb-2">제목</h3>
                <p className="text-gray-600">설명 텍스트</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  버튼
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 실습 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🛠️ 실습해보기</h2>
          <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm">
            <div className="mb-4">
              <span className="text-yellow-400">#</span> Tailwind CSS가 포함된 프로젝트 생성:
            </div>
            <div className="mb-2">
              <span className="text-blue-400">$</span> npx create-next-app@latest my-tailwind-app
            </div>
            <div className="mb-4 text-gray-500">
              Would you like to use Tailwind CSS? › Yes
            </div>
            <div className="text-gray-500 text-xs">
              # 생성된 파일에서 className 속성을 확인해보세요!
            </div>
          </div>
        </section>

        {/* 다음 단계 */}
        <section className="bg-cyan-50 border-l-4 border-cyan-400 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-cyan-800 mb-3">📚 다음 단계</h2>
          <p className="text-gray-700 mb-4">
            Tailwind CSS를 선택했다면, 다음 옵션들도 함께 고려해보세요:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/typescript" className="bg-cyan-600 text-white p-3 rounded-lg text-center hover:bg-cyan-700 transition-colors">
              TypeScript
            </Link>
            <Link href="/eslint" className="bg-cyan-600 text-white p-3 rounded-lg text-center hover:bg-cyan-700 transition-colors">
              ESLint
            </Link>
            <Link href="/app-router" className="bg-cyan-600 text-white p-3 rounded-lg text-center hover:bg-cyan-700 transition-colors">
              App Router
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 