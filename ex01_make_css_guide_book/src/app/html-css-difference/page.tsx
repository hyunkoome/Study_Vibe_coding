import Link from "next/link";
import PracticePreview from "@/components/PracticePreview";

export default function HtmlCssDifferencePage() {
  const htmlCssExampleCode = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>HTML vs CSS 실습</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      margin: 0;
      padding: 20px;
      min-height: 100vh;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }
    h1 {
      color: #333;
      text-align: center;
      border-bottom: 3px solid #667eea;
      padding-bottom: 10px;
    }
    p {
      line-height: 1.6;
      color: #666;
    }
    .html-section {
      background: #e3f2fd;
      padding: 15px;
      border-radius: 8px;
      margin: 10px 0;
    }
    .css-section {
      background: #f3e5f5;
      padding: 15px;
      border-radius: 8px;
      margin: 10px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>HTML과 CSS의 조화</h1>
    <div class="html-section">
      <h2>HTML (구조)</h2>
      <p>HTML은 웹페이지의 구조를 담당합니다.</p>
    </div>
    <div class="css-section">
      <h2>CSS (스타일)</h2>
      <p>CSS는 웹페이지의 시각적 표현을 담당합니다.</p>
    </div>
    <p>둘을 함께 사용하면 아름다운 웹페이지를 만들 수 있습니다!</p>
  </div>
</body>
</html>`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        {/* 네비게이션 */}
        <nav className="mb-8">
          <Link href="/" className="text-indigo-600 hover:text-indigo-800 font-medium">
            ← 메인으로 돌아가기
          </Link>
        </nav>

        {/* 헤더 */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            HTML vs CSS
          </h1>
          <p className="text-xl text-gray-600">
            둘의 차이점과 역할 비교 실습
          </p>
        </header>

        {/* 기본 비교 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🔍 HTML과 CSS의 차이점</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🏗️ HTML (구조)</h3>
              <p className="text-gray-700 mb-4">
                HTML은 웹 페이지의 <strong>구조와 내용</strong>을 담당합니다.
                마치 집의 뼈대와 벽, 문, 창문을 만드는 것과 같습니다.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span className="text-sm">페이지의 구조 정의</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span className="text-sm">콘텐츠의 의미 표현</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span className="text-sm">태그 기반 마크업</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span className="text-sm">접근성과 SEO 중요</span>
                </div>
              </div>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400">
              <h3 className="text-lg font-semibold text-pink-800 mb-3">🎨 CSS (스타일)</h3>
              <p className="text-gray-700 mb-4">
                CSS는 웹 페이지의 <strong>시각적 표현</strong>을 담당합니다.
                마치 집의 인테리어, 색깔, 가구 배치를 담당하는 것과 같습니다.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                  <span className="text-sm">시각적 스타일링</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                  <span className="text-sm">레이아웃과 배치</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                  <span className="text-sm">색상과 폰트</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                  <span className="text-sm">애니메이션과 효과</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 역할 비교 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 역할 비교표</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">구분</th>
                  <th className="border border-gray-300 p-3 text-left">HTML</th>
                  <th className="border border-gray-300 p-3 text-left">CSS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">주요 역할</td>
                  <td className="border border-gray-300 p-3">구조와 내용 정의</td>
                  <td className="border border-gray-300 p-3">시각적 스타일링</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">언어 유형</td>
                  <td className="border border-gray-300 p-3">마크업 언어</td>
                  <td className="border border-gray-300 p-3">스타일시트 언어</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">기본 문법</td>
                  <td className="border border-gray-300 p-3">&lt;태그&gt;내용&lt;/태그&gt;</td>
                  <td className="border border-gray-300 p-3">선택자 {'{'} 속성: 값; {'}'}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">파일 확장자</td>
                  <td className="border border-gray-300 p-3">.html, .htm</td>
                  <td className="border border-gray-300 p-3">.css</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">브라우저 처리</td>
                  <td className="border border-gray-300 p-3">DOM 트리 생성</td>
                  <td className="border border-gray-300 p-3">렌더 트리 생성</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">SEO 영향</td>
                  <td className="border border-gray-300 p-3">매우 중요</td>
                  <td className="border border-gray-300 p-3">간접적 영향</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 실습 비교 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 실습으로 비교해보기</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">HTML만 사용</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div>&lt;h1&gt;제목&lt;/h1&gt;</div>
                <div>&lt;p&gt;이것은 문단입니다.&lt;/p&gt;</div>
                <div>&lt;button&gt;버튼&lt;/button&gt;</div>
              </div>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <h1 className="text-2xl font-bold">제목</h1>
                <p>이것은 문단입니다.</p>
                <button>버튼</button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">HTML + CSS</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div>&lt;h1 class="title"&gt;제목&lt;/h1&gt;</div>
                <div>&lt;p class="text"&gt;이것은 문단입니다.&lt;/p&gt;</div>
                <div>&lt;button class="btn"&gt;버튼&lt;/button&gt;</div>
                <div className="mt-2 text-yellow-400">/* CSS */</div>
                <div>.title &#123; color: blue; &#125;</div>
                <div>.text &#123; font-size: 18px; &#125;</div>
                <div>.btn &#123; background: red; &#125;</div>
              </div>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <h1 className="text-2xl font-bold text-blue-600">제목</h1>
                <p className="text-lg">이것은 문단입니다.</p>
                <button className="bg-red-500 text-white px-4 py-2 rounded">버튼</button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">고급 CSS</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div>&lt;div class="card"&gt;</div>
                <div className="ml-4">&lt;h1&gt;제목&lt;/h1&gt;</div>
                <div className="ml-4">&lt;p&gt;내용&lt;/p&gt;</div>
                <div className="ml-4">&lt;button&gt;버튼&lt;/button&gt;</div>
                <div>&lt;/div&gt;</div>
                <div className="mt-2 text-yellow-400">/* 고급 CSS */</div>
                <div>.card &#123;</div>
                <div className="ml-4">border-radius: 10px;</div>
                <div className="ml-4">box-shadow: 0 4px 8px;</div>
                <div className="ml-4">padding: 20px;</div>
                <div>&#125;</div>
              </div>
              <div className="mt-4 p-4 bg-white rounded-lg shadow-lg border">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">제목</h1>
                <p className="text-gray-600 mb-3">내용</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  버튼
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 실습 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🛠️ 직접 실습해보기</h2>
          <p className="text-gray-600 mb-4">HTML과 CSS를 함께 사용하는 예시를 직접 수정해보세요!</p>
          <PracticePreview initialCode={htmlCssExampleCode} />
        </section>

        {/* 다음 단계 */}
        <section className="bg-indigo-50 border-l-4 border-indigo-400 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-indigo-800 mb-3">📚 다음 단계</h2>
          <p className="text-gray-700 mb-4">
            HTML과 CSS의 차이점을 이해했다면, 다음 단계로 넘어가보세요:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/html-basics" className="bg-indigo-600 text-white p-3 rounded-lg text-center hover:bg-indigo-700 transition-colors">
              HTML 기초
            </Link>
            <Link href="/css-basics" className="bg-indigo-600 text-white p-3 rounded-lg text-center hover:bg-indigo-700 transition-colors">
              CSS 기초
            </Link>
            <Link href="/interactive-demo" className="bg-indigo-600 text-white p-3 rounded-lg text-center hover:bg-indigo-700 transition-colors">
              인터랙티브 데모
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 