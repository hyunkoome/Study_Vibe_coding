import Link from "next/link";
import PracticePreview from "@/components/PracticePreview";

export default function HtmlBasicsPage() {
  const htmlExampleCode = `<!DOCTYPE html>
<html lang="ko">
<head>
  <title>나의 포트폴리오</title>
</head>
<body>
  <header>
    <h1>김개발의 포트폴리오</h1>
    <nav>
      <a href="#about">소개</a>
      <a href="#projects">프로젝트</a>
    </nav>
  </header>
  <main>
    <section id="about">
      <h2>자기소개</h2>
      <p>안녕하세요! 웹 개발자 김개발입니다.</p>
    </section>
  </main>
</body>
</html>`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100">
      <div className="container mx-auto px-4 py-8">
        {/* 네비게이션 */}
        <nav className="mb-8">
          <Link href="/" className="text-emerald-600 hover:text-emerald-800 font-medium">
            ← 메인으로 돌아가기
          </Link>
        </nav>

        {/* 헤더 */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            HTML 기초
          </h1>
          <p className="text-xl text-gray-600">
            웹 페이지의 구조를 만드는 기본 요소들
          </p>
        </header>

        {/* HTML이란? */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🔍 HTML이란?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-emerald-800 mb-3">일상적인 비유</h3>
              <p className="text-gray-700 mb-4">
                HTML은 마치 집을 지을 때의 뼈대와 같습니다. 
                벽돌(요소)을 쌓아서 방(섹션)을 만들고, 
                그 방들을 조합해서 집(웹페이지)을 완성합니다.
                HTML은 "무엇을 보여줄지"를 결정하는 구조입니다.
              </p>
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h4 className="font-semibold text-emerald-800 mb-2">예시:</h4>
                <p className="text-sm text-gray-700">
                  • &lt;h1&gt; = 큰 제목<br/>
                  • &lt;p&gt; = 문단<br/>
                  • &lt;div&gt; = 구역<br/>
                  • &lt;img&gt; = 이미지
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">개발자 관점</h3>
              <p className="text-gray-700 mb-4">
                HTML(HyperText Markup Language)은 웹 페이지의 구조를 정의하는 마크업 언어입니다.
                태그(tag)를 사용하여 콘텐츠의 의미와 구조를 표현하며,
                웹 브라우저가 이를 해석하여 화면에 표시합니다.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">특징:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 구조와 의미를 표현</li>
                  <li>• 태그 기반의 마크업 언어</li>
                  <li>• 시맨틱(의미론적) 요소 지원</li>
                  <li>• 접근성과 SEO에 중요</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 기본 HTML 구조 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📄 기본 HTML 구조</h2>
          <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
            <div className="text-yellow-400">&lt;!DOCTYPE html&gt;</div>
            <div>&lt;html lang="ko"&gt;</div>
            <div className="ml-4">&lt;head&gt;</div>
            <div className="ml-8">&lt;meta charset="UTF-8"&gt;</div>
            <div className="ml-8">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</div>
            <div className="ml-8">&lt;title&gt;내 첫 번째 웹페이지&lt;/title&gt;</div>
            <div className="ml-4">&lt;/head&gt;</div>
            <div className="ml-4">&lt;body&gt;</div>
            <div className="ml-8">&lt;h1&gt;안녕하세요!&lt;/h1&gt;</div>
            <div className="ml-8">&lt;p&gt;이것은 제 첫 번째 웹페이지입니다.&lt;/p&gt;</div>
            <div className="ml-4">&lt;/body&gt;</div>
            <div>&lt;/html&gt;</div>
          </div>
        </section>

        {/* 주요 HTML 태그들 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🏷️ 주요 HTML 태그들</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h3 className="font-semibold text-blue-800 mb-2">제목 태그</h3>
              <div className="text-sm space-y-1">
                <div>&lt;h1&gt;가장 큰 제목&lt;/h1&gt;</div>
                <div>&lt;h2&gt;두 번째 제목&lt;/h2&gt;</div>
                <div>&lt;h3&gt;세 번째 제목&lt;/h3&gt;</div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h3 className="font-semibold text-green-800 mb-2">텍스트 태그</h3>
              <div className="text-sm space-y-1">
                <div>&lt;p&gt;문단&lt;/p&gt;</div>
                <div>&lt;span&gt;인라인 텍스트&lt;/span&gt;</div>
                <div>&lt;strong&gt;굵은 글씨&lt;/strong&gt;</div>
                <div>&lt;em&gt;기울임 글씨&lt;/em&gt;</div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h3 className="font-semibold text-purple-800 mb-2">링크와 이미지</h3>
              <div className="text-sm space-y-1">
                <div>&lt;a href="주소"&gt;링크&lt;/a&gt;</div>
                <div>&lt;img src="이미지.jpg" alt="설명"&gt;</div>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h3 className="font-semibold text-orange-800 mb-2">목록 태그</h3>
              <div className="text-sm space-y-1">
                <div>&lt;ul&gt;순서 없는 목록&lt;/ul&gt;</div>
                <div>&lt;ol&gt;순서 있는 목록&lt;/ol&gt;</div>
                <div>&lt;li&gt;목록 항목&lt;/li&gt;</div>
              </div>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h3 className="font-semibold text-red-800 mb-2">구조 태그</h3>
              <div className="text-sm space-y-1">
                <div>&lt;div&gt;블록 구역&lt;/div&gt;</div>
                <div>&lt;section&gt;섹션&lt;/section&gt;</div>
                <div>&lt;header&gt;헤더&lt;/header&gt;</div>
                <div>&lt;footer&gt;푸터&lt;/footer&gt;</div>
              </div>
            </div>
            
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400">
              <h3 className="font-semibold text-cyan-800 mb-2">폼 태그</h3>
              <div className="text-sm space-y-1">
                <div>&lt;form&gt;폼&lt;/form&gt;</div>
                <div>&lt;input&gt;입력 필드&lt;/input&gt;</div>
                <div>&lt;button&gt;버튼&lt;/button&gt;</div>
                <div>&lt;textarea&gt;텍스트 영역&lt;/textarea&gt;</div>
              </div>
            </div>
          </div>
        </section>

        {/* 실습 예시 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 실습 예시</h2>
          <p className="text-gray-600 mb-4">아래 코드를 수정해서 결과를 확인해보세요!</p>
          <PracticePreview initialCode={htmlExampleCode} />
        </section>

        {/* 시맨틱 HTML */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 시맨틱 HTML</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-3">비시맨틱 (나쁜 예)</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div>&lt;div class="header"&gt;</div>
                <div className="ml-4">&lt;div class="title"&gt;제목&lt;/div&gt;</div>
                <div>&lt;/div&gt;</div>
                <div>&lt;div class="content"&gt;</div>
                <div className="ml-4">&lt;div class="text"&gt;내용&lt;/div&gt;</div>
                <div>&lt;/div&gt;</div>
                <div className="mt-4 text-red-400">// 문제: 의미가 명확하지 않음</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-3">시맨틱 (좋은 예)</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div>&lt;header&gt;</div>
                <div className="ml-4">&lt;h1&gt;제목&lt;/h1&gt;</div>
                <div>&lt;/header&gt;</div>
                <div>&lt;main&gt;</div>
                <div className="ml-4">&lt;article&gt;내용&lt;/article&gt;</div>
                <div>&lt;/main&gt;</div>
                <div className="mt-4 text-blue-400">// 장점: 의미가 명확함</div>
              </div>
            </div>
          </div>
        </section>

        {/* 실습 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🛠️ 직접 실습해보기</h2>
          <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-emerald-800 mb-3">간단한 HTML 페이지 만들기</h3>
            <ol className="text-gray-700 space-y-2">
              <li>1. 텍스트 에디터를 열어주세요 (메모장, VS Code 등)</li>
              <li>2. 다음 코드를 복사해서 붙여넣기 해주세요:</li>
            </ol>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mt-4">
              <div>&lt;!DOCTYPE html&gt;</div>
              <div>&lt;html lang="ko"&gt;</div>
              <div>&lt;head&gt;</div>
              <div className="ml-4">&lt;title&gt;내 첫 번째 페이지&lt;/title&gt;</div>
              <div>&lt;/head&gt;</div>
              <div>&lt;body&gt;</div>
              <div className="ml-4">&lt;h1&gt;안녕하세요!&lt;/h1&gt;</div>
              <div className="ml-4">&lt;p&gt;이것은 제가 만든 첫 번째 웹페이지입니다.&lt;/p&gt;</div>
              <div className="ml-4">&lt;ul&gt;</div>
              <div className="ml-8">&lt;li&gt;HTML 배우기&lt;/li&gt;</div>
              <div className="ml-8">&lt;li&gt;CSS 배우기&lt;/li&gt;</div>
              <div className="ml-8">&lt;li&gt;JavaScript 배우기&lt;/li&gt;</div>
              <div className="ml-4">&lt;/ul&gt;</div>
              <div>&lt;/body&gt;</div>
              <div>&lt;/html&gt;</div>
            </div>
            <ol className="text-gray-700 space-y-2 mt-4">
              <li>3. 파일을 "index.html"로 저장해주세요</li>
              <li>4. 저장한 파일을 웹 브라우저로 열어보세요</li>
              <li>5. 결과를 확인하고 코드를 수정해보세요!</li>
            </ol>
          </div>
        </section>

        {/* 다음 단계 */}
        <section className="bg-emerald-50 border-l-4 border-emerald-400 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-emerald-800 mb-3">📚 다음 단계</h2>
          <p className="text-gray-700 mb-4">
            HTML 기초를 배웠다면, 다음 단계로 넘어가보세요:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/css-basics" className="bg-emerald-600 text-white p-3 rounded-lg text-center hover:bg-emerald-700 transition-colors">
              CSS 기초
            </Link>
            <Link href="/html-css-difference" className="bg-emerald-600 text-white p-3 rounded-lg text-center hover:bg-emerald-700 transition-colors">
              HTML vs CSS
            </Link>
            <Link href="/interactive-demo" className="bg-emerald-600 text-white p-3 rounded-lg text-center hover:bg-emerald-700 transition-colors">
              인터랙티브 데모
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 