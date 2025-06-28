import Link from "next/link";

export default function ImportAliasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        {/* 네비게이션 */}
        <nav className="mb-8">
          <Link href="/" className="text-red-600 hover:text-red-800 font-medium">
            ← 메인으로 돌아가기
          </Link>
        </nav>

        {/* 헤더 */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Import Alias 옵션
          </h1>
          <p className="text-xl text-gray-600">
            파일 경로를 간단하고 직관적으로 설정하는 방법
          </p>
        </header>

        {/* 기본 설명 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🔍 Import Alias란?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-3">일상적인 비유</h3>
              <p className="text-gray-700 mb-4">
                Import Alias는 마치 집에서 각 방에 별명을 붙이는 것과 같습니다.
                "2층 왼쪽 끝에 있는 큰 방" 대신 "서재"라고 부르는 것처럼,
                복잡한 파일 경로 대신 간단한 별칭을 사용할 수 있습니다.
                "src/components/ui/Button.tsx" 대신 "@/components/Button"처럼요!
              </p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">예시:</h4>
                <p className="text-sm text-gray-700">
                  • <code className="bg-gray-200 px-1 rounded">@/</code> = src/ 폴더<br/>
                  • <code className="bg-gray-200 px-1 rounded">@/components</code> = src/components<br/>
                  • <code className="bg-gray-200 px-1 rounded">@/lib</code> = src/lib<br/>
                  • <code className="bg-gray-200 px-1 rounded">@/utils</code> = src/lib/utils
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">개발자 관점</h3>
              <p className="text-gray-700 mb-4">
                Import Alias는 TypeScript/JavaScript에서 모듈을 가져올 때 
                복잡한 상대 경로 대신 간단한 별칭을 사용할 수 있게 해주는 기능입니다.
                tsconfig.json에서 경로 매핑을 설정하여 사용합니다.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">장점:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 더 짧고 읽기 쉬운 import 문</li>
                  <li>• 파일 이동 시 경로 수정 최소화</li>
                  <li>• IDE 자동완성 지원</li>
                  <li>• 코드 가독성 향상</li>
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
                <li>• src/ 디렉토리를 사용할 때</li>
                <li>• 깊은 폴더 구조를 가진 프로젝트</li>
                <li>• 코드 가독성을 중요하게 생각할 때</li>
                <li>• 파일 이동이 자주 발생하는 프로젝트</li>
                <li>• 팀 프로젝트에서 일관된 import 스타일을 원할 때</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ No를 선택하는 경우</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 매우 간단한 프로젝트 구조</li>
                <li>• 상대 경로를 선호할 때</li>
                <li>• 설정 복잡함을 피하고 싶을 때</li>
                <li>• 기존 프로젝트의 import 방식을 유지하고 싶을 때</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 코드 비교 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 코드 비교</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-3">상대 경로 (복잡함)</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400">// src/app/blog/[id]/page.tsx</div>
                <div className="mt-2">import Button from '../../../components/Button'</div>
                <div>import &#123; formatDate &#125; from '../../../lib/utils'</div>
                <div>import Header from '../../../components/Header'</div>
                <div>import Footer from '../../../components/Footer'</div>
                <div className="mt-2 text-red-400">// 문제점:</div>
                <div className="text-red-400">// - 경로가 길고 복잡함</div>
                <div className="text-red-400">// - 파일 이동 시 수정 필요</div>
                <div className="text-red-400">// - 가독성이 떨어짐</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-3">Import Alias (간단함)</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400">// src/app/blog/[id]/page.tsx</div>
                <div className="mt-2">import Button from '@/components/Button'</div>
                <div>import &#123; formatDate &#125; from '@/lib/utils'</div>
                <div>import Header from '@/components/Header'</div>
                <div>import Footer from '@/components/Footer'</div>
                <div className="mt-2 text-blue-400">// 장점:</div>
                <div className="text-blue-400">// - 짧고 명확함</div>
                <div className="text-blue-400">// - 파일 이동 시 수정 불필요</div>
                <div className="text-blue-400">// - 가독성이 좋음</div>
              </div>
            </div>
          </div>
        </section>

        {/* 설정 예시 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">⚙️ 설정 예시</h2>
          <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm">
            <div className="text-yellow-400">// tsconfig.json</div>
            <div>&#123;</div>
            <div className="ml-4">"compilerOptions": &#123;</div>
            <div className="ml-8">"baseUrl": ".",</div>
            <div className="ml-8">"paths": &#123;</div>
            <div className="ml-12">"@/*": ["src/*"],</div>
            <div className="ml-12">"@/components/*": ["src/components/*"],</div>
            <div className="ml-12">"@/lib/*": ["src/lib/*"],</div>
            <div className="ml-12">"@/utils/*": ["src/lib/utils/*"]</div>
            <div className="ml-8">&#125;</div>
            <div className="ml-4">&#125;</div>
            <div>&#125;</div>
            <div className="mt-4 text-blue-400">// 이제 @/로 src/ 폴더에 접근 가능</div>
          </div>
        </section>

        {/* 실제 사용 예시 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 실제 사용 예시</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">컴포넌트에서 사용</h3>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-gray-700">// src/app/page.tsx</div>
                <div className="mt-2 text-gray-700">import Header from '@/components/Header'</div>
                <div className="text-gray-700">import Button from '@/components/ui/Button'</div>
                <div className="text-gray-700">import &#123; formatDate &#125; from '@/lib/utils'</div>
                <div className="text-gray-700">import &#123; api &#125; from '@/lib/api'</div>
                <div className="mt-2 text-blue-600">// 깔끔하고 직관적!</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">유틸리티 함수에서 사용</h3>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-gray-700">// src/lib/utils.ts</div>
                <div className="mt-2 text-gray-700">import &#123; constants &#125; from '@/lib/constants'</div>
                <div className="text-gray-700">import &#123; types &#125; from '@/types'</div>
                <div className="text-gray-700">import &#123; helpers &#125; from '@/lib/helpers'</div>
                <div className="mt-2 text-blue-600">// 일관된 패턴!</div>
              </div>
            </div>
          </div>
        </section>

        {/* 자주 사용하는 별칭들 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 자주 사용하는 별칭들</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h3 className="font-semibold text-blue-800 mb-2">@/</h3>
              <p className="text-sm text-gray-700">
                src/ 폴더의 루트를 의미합니다. 가장 기본적인 별칭입니다.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h3 className="font-semibold text-green-800 mb-2">@/components</h3>
              <p className="text-sm text-gray-700">
                재사용 가능한 컴포넌트들을 가져올 때 사용합니다.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h3 className="font-semibold text-purple-800 mb-2">@/lib</h3>
              <p className="text-sm text-gray-700">
                유틸리티 함수, API 함수 등을 가져올 때 사용합니다.
              </p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h3 className="font-semibold text-orange-800 mb-2">@/types</h3>
              <p className="text-sm text-gray-700">
                TypeScript 타입 정의들을 가져올 때 사용합니다.
              </p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h3 className="font-semibold text-red-800 mb-2">@/hooks</h3>
              <p className="text-sm text-gray-700">
                커스텀 React 훅들을 가져올 때 사용합니다.
              </p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400">
              <h3 className="font-semibold text-cyan-800 mb-2">@/styles</h3>
              <p className="text-sm text-gray-700">
                CSS 모듈이나 스타일 관련 파일들을 가져올 때 사용합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 실습 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🛠️ 실습해보기</h2>
          <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm">
            <div className="mb-4">
              <span className="text-yellow-400">#</span> Import Alias가 포함된 프로젝트 생성:
            </div>
            <div className="mb-2">
              <span className="text-blue-400">$</span> npx create-next-app@latest my-alias-app
            </div>
            <div className="mb-4 text-gray-500">
              Would you like to use the `src/` directory? › Yes
            </div>
            <div className="mb-4 text-gray-500">
              Would you like to use import alias? › Yes
            </div>
            <div className="text-gray-500 text-xs">
              # 생성된 tsconfig.json의 paths 설정을 확인해보세요!
            </div>
          </div>
        </section>

        {/* 팁 */}
        <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-yellow-800 mb-3">💡 Import Alias 사용 팁</h2>
          <ul className="text-gray-700 space-y-2">
            <li>• <code className="bg-gray-200 px-1 rounded">@/</code>는 src/ 폴더를 의미하는 표준 별칭입니다</li>
            <li>• 프로젝트에 맞는 추가 별칭을 설정할 수 있습니다</li>
            <li>• IDE에서 자동완성을 지원하므로 타이핑이 줄어듭니다</li>
            <li>• 파일을 이동해도 import 경로를 수정할 필요가 없습니다</li>
            <li>• 팀 프로젝트에서 일관된 import 스타일을 유지할 수 있습니다</li>
          </ul>
        </section>

        {/* 다음 단계 */}
        <section className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-red-800 mb-3">📚 다음 단계</h2>
          <p className="text-gray-700 mb-4">
            Import Alias를 선택했다면, 다음 옵션들도 함께 고려해보세요:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/typescript" className="bg-red-600 text-white p-3 rounded-lg text-center hover:bg-red-700 transition-colors">
              TypeScript
            </Link>
            <Link href="/src-directory" className="bg-red-600 text-white p-3 rounded-lg text-center hover:bg-red-700 transition-colors">
              src/ 디렉토리
            </Link>
            <Link href="/eslint" className="bg-red-600 text-white p-3 rounded-lg text-center hover:bg-red-700 transition-colors">
              ESLint
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 