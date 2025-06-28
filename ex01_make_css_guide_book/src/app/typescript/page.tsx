import Link from "next/link";

export default function TypeScriptPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* 네비게이션 */}
        <nav className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
            ← 메인으로 돌아가기
          </Link>
        </nav>

        {/* 헤더 */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            TypeScript 옵션
          </h1>
          <p className="text-xl text-gray-600">
            JavaScript에 타입 안전성을 추가하는 강력한 도구
          </p>
        </header>

        {/* 기본 설명 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🔍 TypeScript란?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">일상적인 비유</h3>
              <p className="text-gray-700 mb-4">
                TypeScript는 마치 요리사가 레시피를 만들 때 재료의 양을 정확히 표시하는 것과 같습니다.
                "소금 약간" 대신 "소금 1g"이라고 명확하게 표시하는 것처럼, 
                코드에서도 데이터의 형태를 명확하게 정의합니다.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">예시:</h4>
                <p className="text-sm text-gray-700">
                  • 이름은 반드시 텍스트여야 함<br/>
                  • 나이는 반드시 숫자여야 함<br/>
                  • 이메일은 특정 형식을 따라야 함
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">개발자 관점</h3>
              <p className="text-gray-700 mb-4">
                TypeScript는 JavaScript의 상위 집합으로, 정적 타입 검사를 제공합니다.
                컴파일 시점에 타입 오류를 발견할 수 있어 런타임 오류를 줄일 수 있습니다.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">장점:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 코드 오류를 미리 발견</li>
                  <li>• 자동완성 기능 향상</li>
                  <li>• 코드 가독성 및 유지보수성 향상</li>
                  <li>• 팀 협업 시 코드 이해도 증가</li>
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
                <li>• 처음부터 안전한 코드를 작성하고 싶을 때</li>
                <li>• 팀 프로젝트를 진행할 때</li>
                <li>• 대규모 프로젝트를 계획할 때</li>
                <li>• 코드 품질을 중요하게 생각할 때</li>
                <li>• 미래에 프로젝트를 확장할 계획이 있을 때</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ No를 선택하는 경우</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 매우 간단한 프로토타입을 만들 때</li>
                <li>• JavaScript에만 집중하고 싶을 때</li>
                <li>• 학습 곡선을 최소화하고 싶을 때</li>
                <li>• 빠른 실험을 하고 싶을 때</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 코드 예시 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 코드 예시</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-3">JavaScript (타입 없음)</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div>function greetUser(name, age) {'{'}</div>
                <div className="ml-4">return `안녕하세요, ${'{name}'}님!`;</div>
                <div>{'}'}</div>
                <div className="mt-4 text-yellow-400">// 문제: age가 숫자가 아닐 수도 있음</div>
                <div className="text-yellow-400">// 문제: name이 undefined일 수도 있음</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-3">TypeScript (타입 있음)</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div>function greetUser(name: string, age: number): string {'{'}</div>
                <div className="ml-4">return `안녕하세요, ${'{name}'}님!`;</div>
                <div>{'}'}</div>
                <div className="mt-4 text-blue-400">// 장점: 타입이 명확함</div>
                <div className="text-blue-400">// 장점: 컴파일 시 오류 발견</div>
              </div>
            </div>
          </div>
        </section>

        {/* 실습 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🛠️ 실습해보기</h2>
          <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm">
            <div className="mb-4">
              <span className="text-yellow-400">#</span> TypeScript가 포함된 프로젝트 생성:
            </div>
            <div className="mb-2">
              <span className="text-blue-400">$</span> npx create-next-app@latest my-ts-app
            </div>
            <div className="mb-4 text-gray-500">
              Would you like to use TypeScript? › Yes
            </div>
            <div className="text-gray-500 text-xs">
              # 생성된 파일들이 .tsx 확장자를 가진 것을 확인해보세요!
            </div>
          </div>
        </section>

        {/* 다음 단계 */}
        <section className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-blue-800 mb-3">📚 다음 단계</h2>
          <p className="text-gray-700 mb-4">
            TypeScript를 선택했다면, 다음 옵션들도 함께 고려해보세요:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/eslint" className="bg-blue-600 text-white p-3 rounded-lg text-center hover:bg-blue-700 transition-colors">
              ESLint
            </Link>
            <Link href="/src-directory" className="bg-blue-600 text-white p-3 rounded-lg text-center hover:bg-blue-700 transition-colors">
              src/ 디렉토리
            </Link>
            <Link href="/import-alias" className="bg-blue-600 text-white p-3 rounded-lg text-center hover:bg-blue-700 transition-colors">
              Import Alias
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 