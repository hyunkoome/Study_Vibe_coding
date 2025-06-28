import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* 헤더 */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Next.js 프로젝트 생성 가이드북
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <code className="bg-gray-200 px-2 py-1 rounded">npx create-next-app@latest .</code> 명령어의 
            모든 옵션을 쉽게 이해하고 선택하는 방법을 알아보세요!
          </p>
        </header>

        {/* 소개 섹션 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 이 가이드북이 도움을 드릴 분들</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">초보 개발자</h3>
              <p className="text-gray-700">
                Next.js를 처음 시작하는 분들께 각 옵션의 의미와 선택 기준을 명확히 설명합니다.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">비개발자</h3>
              <p className="text-gray-700">
                기술 용어 없이 일상적인 비유를 통해 각 옵션의 역할을 이해할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Next.js 옵션 목록 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">📋 Next.js 설정 옵션들</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/typescript" className="group">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <h3 className="text-xl font-bold mb-2">TypeScript</h3>
                <p className="text-blue-100">타입 안전성을 위한 JavaScript 확장</p>
              </div>
            </Link>
            
            <Link href="/tailwind" className="group">
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <h3 className="text-xl font-bold mb-2">Tailwind CSS</h3>
                <p className="text-cyan-100">유틸리티 기반 CSS 프레임워크</p>
              </div>
            </Link>
            
            <Link href="/eslint" className="group">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <h3 className="text-xl font-bold mb-2">ESLint</h3>
                <p className="text-purple-100">코드 품질 검사 도구</p>
              </div>
            </Link>
            
            <Link href="/app-router" className="group">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <h3 className="text-xl font-bold mb-2">App Router</h3>
                <p className="text-green-100">새로운 파일 기반 라우팅 시스템</p>
              </div>
            </Link>
            
            <Link href="/src-directory" className="group">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <h3 className="text-xl font-bold mb-2">src/ 디렉토리</h3>
                <p className="text-orange-100">소스 코드를 별도 폴더로 분리</p>
              </div>
            </Link>
            
            <Link href="/import-alias" className="group">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <h3 className="text-xl font-bold mb-2">Import Alias</h3>
                <p className="text-red-100">파일 경로를 간단하게 설정</p>
              </div>
            </Link>
          </div>
        </section>

        {/* HTML/CSS 실습 섹션 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">🎨 HTML & CSS 기본 개념 실습</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/html-basics" className="group">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <h3 className="text-xl font-bold mb-2">HTML 기초</h3>
                <p className="text-emerald-100">웹 페이지의 구조를 만드는 기본 요소들</p>
              </div>
            </Link>
            
            <Link href="/css-basics" className="group">
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <h3 className="text-xl font-bold mb-2">CSS 기초</h3>
                <p className="text-pink-100">웹 페이지를 예쁘게 꾸미는 스타일링</p>
              </div>
            </Link>
            
            <Link href="/html-css-difference" className="group">
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <h3 className="text-xl font-bold mb-2">HTML vs CSS</h3>
                <p className="text-indigo-100">둘의 차이점과 역할 비교 실습</p>
              </div>
            </Link>
            
            <Link href="/interactive-demo" className="group">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <h3 className="text-xl font-bold mb-2">인터랙티브 데모</h3>
                <p className="text-teal-100">실시간으로 HTML/CSS를 수정해보기</p>
              </div>
            </Link>
            
            <Link href="/layout-practice" className="group">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <h3 className="text-xl font-bold mb-2">레이아웃 연습</h3>
                <p className="text-amber-100">Flexbox와 Grid를 활용한 레이아웃</p>
              </div>
            </Link>
            
            <Link href="/responsive-design" className="group">
              <div className="bg-gradient-to-r from-rose-500 to-rose-600 text-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <h3 className="text-xl font-bold mb-2">반응형 디자인</h3>
                <p className="text-rose-100">모바일과 데스크톱에서 다르게 보이기</p>
              </div>
            </Link>
            
            <Link href="/practice-result" className="group">
              <div className="bg-gradient-to-r from-violet-500 to-violet-600 text-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <h3 className="text-xl font-bold mb-2">실습 결과 미리보기</h3>
                <p className="text-violet-100">HTML/CSS 코드를 입력하고 결과 확인하기</p>
              </div>
            </Link>
          </div>
        </section>

        {/* 실습 섹션 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🛠️ 실습해보기</h2>
          <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
            <div className="mb-4">
              <span className="text-yellow-400">#</span> 터미널에서 다음 명령어를 실행해보세요:
            </div>
            <div className="mb-2">
              <span className="text-blue-400">$</span> npx create-next-app@latest my-nextjs-app
            </div>
            <div className="text-gray-500 text-xs">
              # 각 옵션에 대해 Yes/No를 선택하면서 실습해보세요!
            </div>
          </div>
        </section>

        {/* 팁 섹션 */}
        <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-yellow-800 mb-3">💡 초보자를 위한 팁</h2>
          <ul className="text-gray-700 space-y-2">
            <li>• 처음에는 모든 옵션을 기본값(Yes)으로 선택하는 것을 권장합니다</li>
            <li>• 프로젝트가 완성되면 각 옵션의 역할을 다시 한번 확인해보세요</li>
            <li>• 실수해도 걱정하지 마세요! 언제든지 새로 프로젝트를 만들 수 있습니다</li>
            <li>• 각 옵션 페이지에서 실제 예시 코드를 확인할 수 있습니다</li>
            <li>• HTML/CSS 실습을 통해 웹 개발의 기초를 다져보세요</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
