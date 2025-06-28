import Link from "next/link";

export default function ESLintPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* 네비게이션 */}
        <nav className="mb-8">
          <Link href="/" className="text-purple-600 hover:text-purple-800 font-medium">
            ← 메인으로 돌아가기
          </Link>
        </nav>

        {/* 헤더 */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            ESLint 옵션
          </h1>
          <p className="text-xl text-gray-600">
            코드 품질을 자동으로 검사하고 개선하는 도구
          </p>
        </header>

        {/* 기본 설명 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🔍 ESLint란?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-purple-800 mb-3">일상적인 비유</h3>
              <p className="text-gray-700 mb-4">
                ESLint는 마치 글쓰기 교정 선생님과 같습니다. 
                당신이 글을 쓸 때마다 맞춤법, 문법, 문체 등을 자동으로 검토하고 
                개선점을 알려주는 도구입니다. "이 문장은 더 명확하게 쓸 수 있어요" 
                같은 조언을 실시간으로 제공합니다.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">예시:</h4>
                <p className="text-sm text-gray-700">
                  • 사용하지 않는 변수 발견<br/>
                  • 잘못된 들여쓰기 지적<br/>
                  • 보안 취약점 경고<br/>
                  • 코드 스타일 통일성 검사
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">개발자 관점</h3>
              <p className="text-gray-700 mb-4">
                ESLint는 JavaScript/TypeScript 코드의 정적 분석 도구로, 
                코드 품질, 잠재적 오류, 스타일 가이드 준수 여부를 자동으로 검사합니다.
                개발 중 실시간으로 피드백을 제공하여 코드 품질을 향상시킵니다.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">장점:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 버그 조기 발견</li>
                  <li>• 코드 일관성 유지</li>
                  <li>• 팀 협업 시 코드 품질 향상</li>
                  <li>• 자동 코드 포맷팅</li>
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
                <li>• 깔끔하고 안전한 코드를 작성하고 싶을 때</li>
                <li>• 팀 프로젝트를 진행할 때</li>
                <li>• 코드 품질을 중요하게 생각할 때</li>
                <li>• 실수를 미리 방지하고 싶을 때</li>
                <li>• 일관된 코딩 스타일을 유지하고 싶을 때</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ No를 선택하는 경우</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 매우 간단한 실험용 코드를 작성할 때</li>
                <li>• 다른 린터 도구를 사용 중일 때</li>
                <li>• 학습 초기 단계에서 방해받고 싶지 않을 때</li>
                <li>• 빠른 프로토타입을 만들 때</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 코드 예시 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 코드 예시</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-3">ESLint 없이 (문제가 있는 코드)</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400">// 문제가 있는 코드들</div>
                <div className="mt-2">let unusedVariable = "사용되지 않음";</div>
                <div>const name="홍길동"; // 세미콜론 누락</div>
                <div>if(condition)&#123; // 공백 누락</div>
                <div className="ml-4">console.log("조건 만족");</div>
                <div>&#125;</div>
                <div className="mt-2 text-red-400">// ESLint가 지적할 문제들:</div>
                <div className="text-red-400">// - 사용하지 않는 변수</div>
                <div className="text-red-400">// - 세미콜론 누락</div>
                <div className="text-red-400">// - 공백 스타일</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-3">ESLint 적용 후 (개선된 코드)</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-yellow-400">// ESLint가 자동으로 수정한 코드</div>
                <div className="mt-2">// let unusedVariable = "사용되지 않음"; // 제거됨</div>
                <div>const name = "홍길동"; // 세미콜론 추가, 공백 추가</div>
                <div>if (condition) &#123;</div>
                <div className="ml-4">console.log("조건 만족");</div>
                <div>&#125;</div>
                <div className="mt-2 text-blue-400">// ESLint의 도움:</div>
                <div className="text-blue-400">// - 깔끔한 코드 스타일</div>
                <div className="text-blue-400">// - 일관된 포맷팅</div>
                <div className="text-blue-400">// - 잠재적 오류 방지</div>
              </div>
            </div>
          </div>
        </section>

        {/* ESLint 경고 예시 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">⚠️ ESLint 경고 예시</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">일반적인 ESLint 경고들</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border">
                <div className="font-semibold text-red-600 mb-2">🔴 오류 (Error)</div>
                <div className="text-sm text-gray-700">
                  <code className="bg-gray-100 px-1 rounded">'unusedVariable' is assigned a value but never used</code>
                  <p className="mt-1">사용하지 않는 변수 선언</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded border">
                <div className="font-semibold text-orange-600 mb-2">🟡 경고 (Warning)</div>
                <div className="text-sm text-gray-700">
                  <code className="bg-gray-100 px-1 rounded">Missing semicolon</code>
                  <p className="mt-1">세미콜론 누락</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded border">
                <div className="font-semibold text-blue-600 mb-2">🔵 정보 (Info)</div>
                <div className="text-sm text-gray-700">
                  <code className="bg-gray-100 px-1 rounded">Expected space after 'if'</code>
                  <p className="mt-1">if 뒤에 공백 필요</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 실습 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🛠️ 실습해보기</h2>
          <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm">
            <div className="mb-4">
              <span className="text-yellow-400">#</span> ESLint가 포함된 프로젝트 생성:
            </div>
            <div className="mb-2">
              <span className="text-blue-400">$</span> npx create-next-app@latest my-eslint-app
            </div>
            <div className="mb-4 text-gray-500">
              Would you like to use ESLint? › Yes
            </div>
            <div className="text-gray-500 text-xs">
              # 생성된 .eslintrc.json 파일을 확인해보세요!
            </div>
          </div>
        </section>

        {/* ESLint 설정 예시 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">⚙️ ESLint 설정 예시</h2>
          <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm">
            <div className="text-yellow-400">// .eslintrc.json</div>
            <div>&#123;</div>
            <div className="ml-4">"extends": [</div>
            <div className="ml-8">"next/core-web-vitals",</div>
            <div className="ml-8">"@typescript-eslint/recommended"</div>
            <div className="ml-4">],</div>
            <div className="ml-4">"rules": &#123;</div>
            <div className="ml-8">"no-unused-vars": "error",</div>
            <div className="ml-8">"semi": ["error", "always"],</div>
            <div className="ml-8">"quotes": ["error", "single"]</div>
            <div className="ml-4">&#125;</div>
            <div>&#125;</div>
          </div>
        </section>

        {/* 다음 단계 */}
        <section className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-purple-800 mb-3">📚 다음 단계</h2>
          <p className="text-gray-700 mb-4">
            ESLint를 선택했다면, 다음 옵션들도 함께 고려해보세요:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/typescript" className="bg-purple-600 text-white p-3 rounded-lg text-center hover:bg-purple-700 transition-colors">
              TypeScript
            </Link>
            <Link href="/tailwind" className="bg-purple-600 text-white p-3 rounded-lg text-center hover:bg-purple-700 transition-colors">
              Tailwind CSS
            </Link>
            <Link href="/src-directory" className="bg-purple-600 text-white p-3 rounded-lg text-center hover:bg-purple-700 transition-colors">
              src/ 디렉토리
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 