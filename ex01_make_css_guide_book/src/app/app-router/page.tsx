import Link from "next/link";

export default function AppRouterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        {/* 네비게이션 */}
        <nav className="mb-8">
          <Link href="/" className="text-green-600 hover:text-green-800 font-medium">
            ← 메인으로 돌아가기
          </Link>
        </nav>

        {/* 헤더 */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            App Router 옵션
          </h1>
          <p className="text-xl text-gray-600">
            Next.js 13의 새로운 파일 기반 라우팅 시스템
          </p>
        </header>

        {/* 기본 설명 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🔍 App Router란?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">일상적인 비유</h3>
              <p className="text-gray-700 mb-4">
                App Router는 마치 도서관의 책 분류 시스템과 같습니다. 
                각 책(페이지)은 특정 위치(폴더)에 놓여있고, 
                그 위치 자체가 책의 주제(URL)를 나타냅니다.
                "소설/로맨스/첫사랑" 폴더에 있는 책은 자동으로 
                "도서관/소설/로맨스/첫사랑" 경로로 접근할 수 있습니다.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">예시:</h4>
                <p className="text-sm text-gray-700">
                  • <code className="bg-gray-200 px-1 rounded">app/about/page.tsx</code> → /about<br/>
                  • <code className="bg-gray-200 px-1 rounded">app/blog/[id]/page.tsx</code> → /blog/123<br/>
                  • <code className="bg-gray-200 px-1 rounded">app/shop/cart/page.tsx</code> → /shop/cart
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">개발자 관점</h3>
              <p className="text-gray-700 mb-4">
                App Router는 Next.js 13에서 도입된 새로운 라우팅 시스템으로, 
                파일 시스템 기반의 직관적인 라우팅을 제공합니다.
                React Server Components를 기본으로 지원하며, 
                더 나은 성능과 개발자 경험을 제공합니다.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">장점:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 직관적인 파일 기반 라우팅</li>
                  <li>• 서버 컴포넌트 기본 지원</li>
                  <li>• 더 나은 성능과 SEO</li>
                  <li>• 레이아웃과 중첩 라우팅</li>
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
                <li>• 새로운 Next.js 프로젝트를 시작할 때</li>
                <li>• 최신 기능과 성능을 원할 때</li>
                <li>• 서버 컴포넌트를 활용하고 싶을 때</li>
                <li>• 복잡한 라우팅 구조가 필요할 때</li>
                <li>• 미래 지향적인 개발을 하고 싶을 때</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ No를 선택하는 경우</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 기존 Pages Router 프로젝트를 유지보수할 때</li>
                <li>• 특정 라이브러리가 App Router를 지원하지 않을 때</li>
                <li>• 학습 곡선을 최소화하고 싶을 때</li>
                <li>• 매우 간단한 단일 페이지 앱을 만들 때</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 구조 비교 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📁 구조 비교</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-3">Pages Router (기존)</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400">pages/</div>
                <div className="ml-4">index.js</div>
                <div className="ml-4">about.js</div>
                <div className="ml-4">blog/</div>
                <div className="ml-8">index.js</div>
                <div className="ml-8">[id].js</div>
                <div className="ml-4">_app.js</div>
                <div className="ml-4">_document.js</div>
                <div className="mt-4 text-gray-500"># 특별한 파일명 규칙</div>
                <div className="text-gray-500"># 클라이언트 컴포넌트만</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-3">App Router (새로운)</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400">app/</div>
                <div className="ml-4">page.tsx</div>
                <div className="ml-4">about/</div>
                <div className="ml-8">page.tsx</div>
                <div className="ml-4">blog/</div>
                <div className="ml-8">page.tsx</div>
                <div className="ml-8">[id]/</div>
                <div className="ml-12">page.tsx</div>
                <div className="ml-4">layout.tsx</div>
                <div className="ml-4">loading.tsx</div>
                <div className="ml-4">error.tsx</div>
                <div className="mt-4 text-blue-400"># 직관적인 파일명</div>
                <div className="text-blue-400"># 서버 컴포넌트 기본</div>
              </div>
            </div>
          </div>
        </section>

        {/* 코드 예시 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 코드 예시</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">기본 페이지 (app/page.tsx)</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400">// app/page.tsx</div>
                <div>export default function HomePage() &#123;</div>
                <div className="ml-4">return (</div>
                <div className="ml-8">&lt;div&gt;</div>
                <div className="ml-12">&lt;h1&gt;홈페이지&lt;/h1&gt;</div>
                <div className="ml-12">&lt;p&gt;환영합니다!&lt;/p&gt;</div>
                <div className="ml-8">&lt;/div&gt;</div>
                <div className="ml-4">);</div>
                <div>&#125;</div>
                <div className="mt-4 text-blue-400">// 자동으로 / 경로에 연결</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">동적 라우트 (app/blog/[id]/page.tsx)</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400">// app/blog/[id]/page.tsx</div>
                <div>export default function BlogPost(&#123; params &#125;) &#123;</div>
                <div className="ml-4">return (</div>
                <div className="ml-8">&lt;div&gt;</div>
                <div className="ml-12">&lt;h1&gt;블로그 포스트 &#123;params.id&#125;&lt;/h1&gt;</div>
                <div className="ml-8">&lt;/div&gt;</div>
                <div className="ml-4">);</div>
                <div>&#125;</div>
                <div className="mt-4 text-blue-400">// /blog/123 → params.id = "123"</div>
              </div>
            </div>
          </div>
        </section>

        {/* 특별한 파일들 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 특별한 파일들</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h3 className="font-semibold text-blue-800 mb-2">layout.tsx</h3>
              <p className="text-sm text-gray-700">
                여러 페이지에서 공통으로 사용되는 레이아웃을 정의합니다.
                헤더, 푸터, 네비게이션 등을 포함할 수 있습니다.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h3 className="font-semibold text-green-800 mb-2">loading.tsx</h3>
              <p className="text-sm text-gray-700">
                페이지가 로딩 중일 때 표시되는 로딩 UI를 정의합니다.
                자동으로 로딩 상태를 처리합니다.
              </p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h3 className="font-semibold text-red-800 mb-2">error.tsx</h3>
              <p className="text-sm text-gray-700">
                에러가 발생했을 때 표시되는 에러 UI를 정의합니다.
                자동으로 에러 상태를 처리합니다.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h3 className="font-semibold text-purple-800 mb-2">not-found.tsx</h3>
              <p className="text-sm text-gray-700">
                404 페이지를 찾을 수 없을 때 표시되는 UI를 정의합니다.
              </p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h3 className="font-semibold text-orange-800 mb-2">page.tsx</h3>
              <p className="text-sm text-gray-700">
                실제 페이지의 내용을 정의합니다.
                각 폴더마다 하나씩 필요합니다.
              </p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400">
              <h3 className="font-semibold text-cyan-800 mb-2">route.ts</h3>
              <p className="text-sm text-gray-700">
                API 엔드포인트를 정의합니다.
                GET, POST 등의 HTTP 메서드를 처리합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 실습 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🛠️ 실습해보기</h2>
          <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm">
            <div className="mb-4">
              <span className="text-yellow-400">#</span> App Router가 포함된 프로젝트 생성:
            </div>
            <div className="mb-2">
              <span className="text-blue-400">$</span> npx create-next-app@latest my-app-router
            </div>
            <div className="mb-4 text-gray-500">
              Would you like to use the `src/` directory? › Yes
            </div>
            <div className="mb-4 text-gray-500">
              Would you like to use App Router? › Yes
            </div>
            <div className="text-gray-500 text-xs">
              # 생성된 app/ 폴더 구조를 확인해보세요!
            </div>
          </div>
        </section>

        {/* 다음 단계 */}
        <section className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-green-800 mb-3">📚 다음 단계</h2>
          <p className="text-gray-700 mb-4">
            App Router를 선택했다면, 다음 옵션들도 함께 고려해보세요:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/typescript" className="bg-green-600 text-white p-3 rounded-lg text-center hover:bg-green-700 transition-colors">
              TypeScript
            </Link>
            <Link href="/tailwind" className="bg-green-600 text-white p-3 rounded-lg text-center hover:bg-green-700 transition-colors">
              Tailwind CSS
            </Link>
            <Link href="/src-directory" className="bg-green-600 text-white p-3 rounded-lg text-center hover:bg-green-700 transition-colors">
              src/ 디렉토리
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 