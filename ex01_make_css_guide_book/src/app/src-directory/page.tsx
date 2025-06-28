import Link from "next/link";

export default function SrcDirectoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      <div className="container mx-auto px-4 py-8">
        {/* 네비게이션 */}
        <nav className="mb-8">
          <Link href="/" className="text-orange-600 hover:text-orange-800 font-medium">
            ← 메인으로 돌아가기
          </Link>
        </nav>

        {/* 헤더 */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            src/ 디렉토리 옵션
          </h1>
          <p className="text-xl text-gray-600">
            소스 코드를 별도 폴더로 분리하여 정리하는 방법
          </p>
        </header>

        {/* 기본 설명 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🔍 src/ 디렉토리란?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-orange-800 mb-3">일상적인 비유</h3>
              <p className="text-gray-700 mb-4">
                src/ 디렉토리는 마치 집에서 작업실을 따로 만드는 것과 같습니다.
                거실(루트 폴더)에는 중요한 문서들만 두고, 
                실제 작업은 작업실(src/ 폴더)에서 하는 것처럼,
                프로젝트의 핵심 소스 코드를 별도 공간에 정리합니다.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">예시:</h4>
                <p className="text-sm text-gray-700">
                  • <code className="bg-gray-200 px-1 rounded">src/app/</code> - 실제 애플리케이션 코드<br/>
                  • <code className="bg-gray-200 px-1 rounded">src/components/</code> - 재사용 가능한 컴포넌트<br/>
                  • <code className="bg-gray-200 px-1 rounded">src/lib/</code> - 유틸리티 함수들<br/>
                  • <code className="bg-gray-200 px-1 rounded">public/</code> - 이미지, 폰트 등 정적 파일
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">개발자 관점</h3>
              <p className="text-gray-700 mb-4">
                src/ 디렉토리는 소스 코드와 설정 파일들을 분리하여 
                프로젝트 구조를 더 깔끔하게 만드는 방법입니다.
                이는 대규모 프로젝트에서 특히 유용하며, 
                코드의 가독성과 유지보수성을 향상시킵니다.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">장점:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 프로젝트 구조의 명확성</li>
                  <li>• 소스 코드와 설정 파일 분리</li>
                  <li>• 팀 협업 시 파일 찾기 용이</li>
                  <li>• IDE의 더 나은 지원</li>
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
                <li>• 대규모 프로젝트를 계획할 때</li>
                <li>• 팀 프로젝트를 진행할 때</li>
                <li>• 깔끔한 프로젝트 구조를 원할 때</li>
                <li>• 소스 코드와 설정 파일을 분리하고 싶을 때</li>
                <li>• 미래에 프로젝트가 확장될 가능성이 있을 때</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ No를 선택하는 경우</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 매우 간단한 프로토타입을 만들 때</li>
                <li>• 빠른 실험을 하고 싶을 때</li>
                <li>• 기존 프로젝트 구조를 유지하고 싶을 때</li>
                <li>• 학습 초기 단계에서 복잡함을 피하고 싶을 때</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 구조 비교 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📁 구조 비교</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-3">src/ 디렉토리 없음</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400">my-project/</div>
                <div className="ml-4">app/</div>
                <div className="ml-8">page.tsx</div>
                <div className="ml-8">layout.tsx</div>
                <div className="ml-4">components/</div>
                <div className="ml-8">Button.tsx</div>
                <div className="ml-4">lib/</div>
                <div className="ml-8">utils.ts</div>
                <div className="ml-4">public/</div>
                <div className="ml-8">image.jpg</div>
                <div className="ml-4">package.json</div>
                <div className="ml-4">next.config.js</div>
                <div className="ml-4">tsconfig.json</div>
                <div className="mt-4 text-gray-500"># 모든 파일이 루트에 혼재</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-3">src/ 디렉토리 사용</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400">my-project/</div>
                <div className="ml-4">src/</div>
                <div className="ml-8">app/</div>
                <div className="ml-12">page.tsx</div>
                <div className="ml-12">layout.tsx</div>
                <div className="ml-8">components/</div>
                <div className="ml-12">Button.tsx</div>
                <div className="ml-8">lib/</div>
                <div className="ml-12">utils.ts</div>
                <div className="ml-4">public/</div>
                <div className="ml-8">image.jpg</div>
                <div className="ml-4">package.json</div>
                <div className="ml-4">next.config.js</div>
                <div className="ml-4">tsconfig.json</div>
                <div className="mt-4 text-blue-400"># 소스 코드와 설정 파일 분리</div>
              </div>
            </div>
          </div>
        </section>

        {/* 실제 예시 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 실제 프로젝트 구조 예시</h2>
          <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm">
            <div className="text-yellow-400">my-nextjs-app/</div>
            <div className="ml-4 text-blue-400">📁 src/</div>
            <div className="ml-8 text-green-400">📁 app/</div>
            <div className="ml-12">📄 page.tsx (홈페이지)</div>
            <div className="ml-12">📄 layout.tsx (전체 레이아웃)</div>
            <div className="ml-12">📁 about/</div>
            <div className="ml-16">📄 page.tsx (소개 페이지)</div>
            <div className="ml-8 text-purple-400">📁 components/</div>
            <div className="ml-12">📄 Header.tsx</div>
            <div className="ml-12">📄 Footer.tsx</div>
            <div className="ml-12">📄 Button.tsx</div>
            <div className="ml-8 text-cyan-400">📁 lib/</div>
            <div className="ml-12">📄 utils.ts (유틸리티 함수)</div>
            <div className="ml-12">📄 api.ts (API 함수)</div>
            <div className="ml-4 text-orange-400">📁 public/</div>
            <div className="ml-8">🖼️ logo.png</div>
            <div className="ml-8">🖼️ favicon.ico</div>
            <div className="ml-4 text-gray-400">📄 package.json</div>
            <div className="ml-4 text-gray-400">📄 next.config.js</div>
            <div className="ml-4 text-gray-400">📄 tsconfig.json</div>
            <div className="ml-4 text-gray-400">📄 .env.local</div>
          </div>
        </section>

        {/* 장단점 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">⚖️ 장단점 비교</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <h3 className="text-lg font-semibold text-green-800 mb-3">✅ 장점</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 프로젝트 구조가 더 명확함</li>
                <li>• 소스 코드와 설정 파일 분리</li>
                <li>• IDE에서 더 나은 파일 탐색</li>
                <li>• 팀 협업 시 파일 찾기 용이</li>
                <li>• 대규모 프로젝트에 적합</li>
                <li>• 업계 표준 구조</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
              <h3 className="text-lg font-semibold text-red-800 mb-3">❌ 단점</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 폴더 깊이가 한 단계 더 깊어짐</li>
                <li>• 작은 프로젝트에서는 과도할 수 있음</li>
                <li>• 파일 경로가 약간 더 길어짐</li>
                <li>• 초보자에게는 복잡해 보일 수 있음</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 실습 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🛠️ 실습해보기</h2>
          <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm">
            <div className="mb-4">
              <span className="text-yellow-400">#</span> src/ 디렉토리가 포함된 프로젝트 생성:
            </div>
            <div className="mb-2">
              <span className="text-blue-400">$</span> npx create-next-app@latest my-src-app
            </div>
            <div className="mb-4 text-gray-500">
              Would you like to use the `src/` directory? › Yes
            </div>
            <div className="text-gray-500 text-xs">
              # 생성된 src/ 폴더 구조를 확인해보세요!
            </div>
          </div>
        </section>

        {/* 파일 경로 예시 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📂 파일 경로 예시</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">src/ 디렉토리 없음</h3>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-gray-700">import Button from './components/Button'</div>
                <div className="text-gray-700">import &#123; formatDate &#125; from './lib/utils'</div>
                <div className="text-gray-700">import Header from './components/Header'</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">src/ 디렉토리 사용</h3>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-gray-700">import Button from '@/components/Button'</div>
                <div className="text-gray-700">import &#123; formatDate &#125; from '@/lib/utils'</div>
                <div className="text-gray-700">import Header from '@/components/Header'</div>
                <div className="mt-2 text-blue-600">// @는 src/를 의미하는 별칭</div>
              </div>
            </div>
          </div>
        </section>

        {/* 다음 단계 */}
        <section className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-orange-800 mb-3">📚 다음 단계</h2>
          <p className="text-gray-700 mb-4">
            src/ 디렉토리를 선택했다면, 다음 옵션들도 함께 고려해보세요:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/typescript" className="bg-orange-600 text-white p-3 rounded-lg text-center hover:bg-orange-700 transition-colors">
              TypeScript
            </Link>
            <Link href="/import-alias" className="bg-orange-600 text-white p-3 rounded-lg text-center hover:bg-orange-700 transition-colors">
              Import Alias
            </Link>
            <Link href="/eslint" className="bg-orange-600 text-white p-3 rounded-lg text-center hover:bg-orange-700 transition-colors">
              ESLint
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 