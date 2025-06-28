import Link from "next/link";
import PracticePreview from "@/components/PracticePreview";

export default function CssBasicsPage() {
  const cssExampleCode = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>CSS 실습</title>
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
    .highlight {
      background: #f0f8ff;
      padding: 10px;
      border-left: 4px solid #667eea;
      margin: 10px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>CSS 스타일링 실습</h1>
    <p>이 페이지는 CSS로 스타일링된 예시입니다.</p>
    <div class="highlight">
      <p>이 부분은 특별히 강조된 영역입니다.</p>
    </div>
    <p>CSS를 사용하면 웹페이지를 아름답게 꾸밀 수 있습니다!</p>
  </div>
</body>
</html>`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <div className="container mx-auto px-4 py-8">
        {/* 네비게이션 */}
        <nav className="mb-8">
          <Link href="/" className="text-pink-600 hover:text-pink-800 font-medium">
            ← 메인으로 돌아가기
          </Link>
        </nav>

        {/* 헤더 */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            CSS 기초
          </h1>
          <p className="text-xl text-gray-600">
            웹 페이지를 예쁘게 꾸미는 스타일링
          </p>
        </header>

        {/* CSS란? */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🔍 CSS란?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-pink-800 mb-3">일상적인 비유</h3>
              <p className="text-gray-700 mb-4">
                CSS는 마치 집을 꾸미는 인테리어와 같습니다. 
                뼈대(HTML)는 이미 완성되어 있고, 
                이제 벽지, 가구, 조명, 색깔 등을 선택해서 
                아름다운 공간을 만드는 것이 CSS입니다.
              </p>
              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-semibold text-pink-800 mb-2">예시:</h4>
                <p className="text-sm text-gray-700">
                  • 색깔 = 벽지와 페인트<br/>
                  • 크기 = 가구의 크기<br/>
                  • 위치 = 가구 배치<br/>
                  • 폰트 = 인테리어 스타일
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">개발자 관점</h3>
              <p className="text-gray-700 mb-4">
                CSS(Cascading Style Sheets)는 HTML로 작성된 웹 페이지의 
                시각적 표현을 담당하는 스타일시트 언어입니다.
                색상, 레이아웃, 폰트, 애니메이션 등을 정의하여 
                웹 페이지를 아름답고 사용하기 쉽게 만듭니다.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">특징:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 시각적 스타일링</li>
                  <li>• 레이아웃 제어</li>
                  <li>• 반응형 디자인</li>
                  <li>• 애니메이션과 전환 효과</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CSS 기본 문법 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 CSS 기본 문법</h2>
          <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
            <div className="text-yellow-400">/* CSS 선택자와 속성 */</div>
            <div className="mt-4">h1 &#123;</div>
            <div className="ml-4">color: blue; <span className="text-gray-500">/* 글자 색깔 */</span></div>
            <div className="ml-4">font-size: 24px; <span className="text-gray-500">/* 글자 크기 */</span></div>
            <div className="ml-4">text-align: center; <span className="text-gray-500">/* 가운데 정렬 */</span></div>
            <div>&#125;</div>
            <div className="mt-4">.container &#123;</div>
            <div className="ml-4">background-color: #f0f0f0; <span className="text-gray-500">/* 배경 색깔 */</span></div>
            <div className="ml-4">padding: 20px; <span className="text-gray-500">/* 안쪽 여백 */</span></div>
            <div className="ml-4">border-radius: 8px; <span className="text-gray-500">/* 모서리 둥글게 */</span></div>
            <div>&#125;</div>
          </div>
        </section>

        {/* CSS 선택자 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 CSS 선택자</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h3 className="font-semibold text-blue-800 mb-2">태그 선택자</h3>
              <div className="text-sm space-y-1">
                <div>h1 &#123; color: red; &#125;</div>
                <div>p &#123; font-size: 16px; &#125;</div>
                <div>div &#123; margin: 10px; &#125;</div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h3 className="font-semibold text-green-800 mb-2">클래스 선택자</h3>
              <div className="text-sm space-y-1">
                <div>.title &#123; font-weight: bold; &#125;</div>
                <div>.button &#123; background: blue; &#125;</div>
                <div>.card &#123; border: 1px solid; &#125;</div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h3 className="font-semibold text-purple-800 mb-2">ID 선택자</h3>
              <div className="text-sm space-y-1">
                <div>#header &#123; height: 60px; &#125;</div>
                <div>#main &#123; width: 100%; &#125;</div>
                <div>#footer &#123; position: fixed; &#125;</div>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h3 className="font-semibold text-orange-800 mb-2">자식 선택자</h3>
              <div className="text-sm space-y-1">
                <div>div {'>'} p &#123; margin: 0; &#125;</div>
                <div>ul {'>'} li &#123; list-style: none; &#125;</div>
              </div>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h3 className="font-semibold text-red-800 mb-2">가상 클래스</h3>
              <div className="text-sm space-y-1">
                <div>button:hover &#123; background: gray; &#125;</div>
                <div>a:visited &#123; color: purple; &#125;</div>
                <div>input:focus &#123; border: 2px solid; &#125;</div>
              </div>
            </div>
            
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400">
              <h3 className="font-semibold text-cyan-800 mb-2">속성 선택자</h3>
              <div className="text-sm space-y-1">
                <div>[type="text"] &#123; padding: 8px; &#125;</div>
                <div>[class*="btn"] &#123; cursor: pointer; &#125;</div>
              </div>
            </div>
          </div>
        </section>

        {/* 주요 CSS 속성들 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎨 주요 CSS 속성들</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">텍스트 관련</h3>
              <div className="space-y-4">
                <div className="bg-gray-100 p-3 rounded">
                  <div className="font-semibold text-gray-800 mb-1">color</div>
                  <div className="text-sm text-gray-600">글자 색깔</div>
                  <div className="text-xs text-gray-500">color: red; color: #ff0000; color: rgb(255, 0, 0);</div>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <div className="font-semibold text-gray-800 mb-1">font-size</div>
                  <div className="text-sm text-gray-600">글자 크기</div>
                  <div className="text-xs text-gray-500">font-size: 16px; font-size: 1.2em; font-size: 120%;</div>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <div className="font-semibold text-gray-800 mb-1">font-family</div>
                  <div className="text-sm text-gray-600">글꼴</div>
                  <div className="text-xs text-gray-500">font-family: Arial, sans-serif;</div>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <div className="font-semibold text-gray-800 mb-1">text-align</div>
                  <div className="text-sm text-gray-600">텍스트 정렬</div>
                  <div className="text-xs text-gray-500">text-align: center; text-align: left; text-align: right;</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">박스 모델</h3>
              <div className="space-y-4">
                <div className="bg-gray-100 p-3 rounded">
                  <div className="font-semibold text-gray-800 mb-1">width / height</div>
                  <div className="text-sm text-gray-600">너비 / 높이</div>
                  <div className="text-xs text-gray-500">width: 100px; height: 200px;</div>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <div className="font-semibold text-gray-800 mb-1">margin</div>
                  <div className="text-sm text-gray-600">바깥쪽 여백</div>
                  <div className="text-xs text-gray-500">margin: 10px; margin: 10px 20px;</div>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <div className="font-semibold text-gray-800 mb-1">padding</div>
                  <div className="text-sm text-gray-600">안쪽 여백</div>
                  <div className="text-xs text-gray-500">padding: 15px; padding: 10px 20px;</div>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <div className="font-semibold text-gray-800 mb-1">border</div>
                  <div className="text-sm text-gray-600">테두리</div>
                  <div className="text-xs text-gray-500">border: 1px solid black;</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 실습 예시 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 실습 예시</h2>
          <p className="text-gray-600 mb-4">아래 CSS 코드를 수정해서 결과를 확인해보세요!</p>
          <PracticePreview initialCode={cssExampleCode} />
        </section>

        {/* CSS 적용 방법 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🔗 CSS 적용 방법</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h3 className="font-semibold text-blue-800 mb-2">1. 인라인 스타일</h3>
              <div className="text-sm text-gray-700">
                <div>&lt;h1 style="color: red;"&gt;제목&lt;/h1&gt;</div>
                <div className="mt-2 text-xs text-gray-500">장점: 간단함</div>
                <div className="text-xs text-gray-500">단점: 재사용 어려움</div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h3 className="font-semibold text-green-800 mb-2">2. 내부 스타일</h3>
              <div className="text-sm text-gray-700">
                <div>&lt;style&gt;</div>
                <div className="ml-2">h1 &#123; color: red; &#125;</div>
                <div>&lt;/style&gt;</div>
                <div className="mt-2 text-xs text-gray-500">장점: 페이지 내 재사용</div>
                <div className="text-xs text-gray-500">단점: 페이지 간 공유 어려움</div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h3 className="font-semibold text-purple-800 mb-2">3. 외부 스타일</h3>
              <div className="text-sm text-gray-700">
                <div>&lt;link rel="stylesheet" href="style.css"&gt;</div>
                <div className="mt-2 text-xs text-gray-500">장점: 재사용성 높음</div>
                <div className="text-xs text-gray-500">단점: 파일 관리 필요</div>
              </div>
            </div>
          </div>
        </section>

        {/* 실습 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🛠️ 직접 실습해보기</h2>
          <div className="bg-pink-50 border-l-4 border-pink-400 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-pink-800 mb-3">간단한 CSS 스타일링</h3>
            <ol className="text-gray-700 space-y-2">
              <li>1. 이전에 만든 HTML 파일을 열어주세요</li>
              <li>2. &lt;head&gt; 태그 안에 다음 CSS를 추가해주세요:</li>
            </ol>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mt-4">
              <div>&lt;style&gt;</div>
              <div className="ml-4">body &#123;</div>
              <div className="ml-8">font-family: Arial, sans-serif;</div>
              <div className="ml-8">background-color: #f0f0f0;</div>
              <div className="ml-8">margin: 0;</div>
              <div className="ml-8">padding: 20px;</div>
              <div className="ml-4">&#125;</div>
              <div className="ml-4">h1 &#123;</div>
              <div className="ml-8">color: #333;</div>
              <div className="ml-8">text-align: center;</div>
              <div className="ml-8">border-bottom: 2px solid #007bff;</div>
              <div className="ml-8">padding-bottom: 10px;</div>
              <div className="ml-4">&#125;</div>
              <div className="ml-4">ul &#123;</div>
              <div className="ml-8">background: white;</div>
              <div className="ml-8">padding: 20px;</div>
              <div className="ml-8">border-radius: 8px;</div>
              <div className="ml-8">box-shadow: 0 2px 4px rgba(0,0,0,0.1);</div>
              <div className="ml-4">&#125;</div>
              <div>&lt;/style&gt;</div>
            </div>
            <ol className="text-gray-700 space-y-2 mt-4">
              <li>3. 파일을 저장하고 브라우저에서 새로고침해주세요</li>
              <li>4. 스타일이 적용된 것을 확인해보세요!</li>
              <li>5. 색깔이나 크기를 바꿔가며 실험해보세요</li>
            </ol>
          </div>
        </section>

        {/* 다음 단계 */}
        <section className="bg-pink-50 border-l-4 border-pink-400 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-pink-800 mb-3">📚 다음 단계</h2>
          <p className="text-gray-700 mb-4">
            CSS 기초를 배웠다면, 다음 단계로 넘어가보세요:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/html-basics" className="bg-pink-600 text-white p-3 rounded-lg text-center hover:bg-pink-700 transition-colors">
              HTML 기초
            </Link>
            <Link href="/html-css-difference" className="bg-pink-600 text-white p-3 rounded-lg text-center hover:bg-pink-700 transition-colors">
              HTML vs CSS
            </Link>
            <Link href="/layout-practice" className="bg-pink-600 text-white p-3 rounded-lg text-center hover:bg-pink-700 transition-colors">
              레이아웃 연습
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 