import Link from "next/link";
import PracticePreview from "@/components/PracticePreview";

export default function InteractiveDemoPage() {
  const interactiveExampleCode = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>인터랙티브 데모</title>
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
      margin-bottom: 30px;
    }
    .demo-section {
      margin: 20px 0;
      padding: 20px;
      border: 2px solid #e0e0e0;
      border-radius: 10px;
      transition: all 0.3s ease;
    }
    .demo-section:hover {
      border-color: #667eea;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
    }
    .button {
      background: #667eea;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .button:hover {
      background: #5a67d8;
      transform: scale(1.05);
    }
    .input-field {
      width: 100%;
      padding: 10px;
      border: 2px solid #e0e0e0;
      border-radius: 5px;
      margin: 10px 0;
      transition: border-color 0.3s ease;
    }
    .input-field:focus {
      outline: none;
      border-color: #667eea;
    }
    .color-box {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      margin: 10px;
      cursor: pointer;
      transition: transform 0.3s ease;
    }
    .color-box:hover {
      transform: scale(1.2);
    }
    .red { background: #ef4444; }
    .blue { background: #3b82f6; }
    .green { background: #10b981; }
    .yellow { background: #f59e0b; }
  </style>
</head>
<body>
  <div class="container">
    <h1>인터랙티브 데모</h1>
    
    <div class="demo-section">
      <h3>호버 효과</h3>
      <p>이 섹션에 마우스를 올려보세요!</p>
    </div>
    
    <div class="demo-section">
      <h3>버튼 효과</h3>
      <button class="button">호버해보세요</button>
    </div>
    
    <div class="demo-section">
      <h3>입력 필드</h3>
      <input type="text" class="input-field" placeholder="클릭해서 포커스해보세요">
    </div>
    
    <div class="demo-section">
      <h3>색상 선택</h3>
      <div style="display: flex; justify-content: center;">
        <div class="color-box red"></div>
        <div class="color-box blue"></div>
        <div class="color-box green"></div>
        <div class="color-box yellow"></div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100">
      <div className="container mx-auto px-4 py-8">
        {/* 네비게이션 */}
        <nav className="mb-8">
          <Link href="/" className="text-teal-600 hover:text-teal-800 font-medium">
            ← 메인으로 돌아가기
          </Link>
        </nav>

        {/* 헤더 */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            인터랙티브 데모
          </h1>
          <p className="text-xl text-gray-600">
            실시간으로 HTML/CSS를 수정해보기
          </p>
        </header>

        {/* 실시간 편집기 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 실시간 코드 편집기</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* 코드 편집 영역 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">코드 편집</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">HTML</label>
                  <textarea 
                    className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm bg-gray-50"
                    defaultValue={interactiveExampleCode}
                  />
                </div>
              </div>
            </div>
            
            {/* 결과 미리보기 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">실시간 미리보기</h3>
              <div className="border border-gray-300 rounded-lg p-4 bg-white">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h1 className="text-2xl font-bold text-gray-800 text-center border-b-2 border-blue-500 pb-2 mb-4">
                    안녕하세요!
                  </h1>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    이것은 인터랙티브 데모입니다. 왼쪽의 코드를 수정해보세요!
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    HTML과 CSS를 실시간으로 변경할 수 있습니다.
                  </p>
                  <button className="bg-blue-500 text-white border-none py-2 px-4 rounded mr-2 hover:bg-blue-600 transition-colors">
                    클릭하세요
                  </button>
                  <button className="bg-blue-500 text-white border-none py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                    다른 버튼
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 실습 예제들 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 실습 예제들</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <h3 className="font-semibold text-blue-800 mb-3">색상 변경</h3>
              <p className="text-sm text-gray-700 mb-3">
                제목의 색상을 변경해보세요:
              </p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                h1 &#123;<br/>
                <span className="ml-4">color: red; /* 또는 blue, green 등 */</span><br/>
                &#125;
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <h3 className="font-semibold text-green-800 mb-3">크기 조정</h3>
              <p className="text-sm text-gray-700 mb-3">
                제목의 크기를 변경해보세요:
              </p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                h1 &#123;<br/>
                <span className="ml-4">font-size: 3rem; /* 크게 */</span><br/>
                <span className="ml-4">font-size: 1rem; /* 작게 */</span><br/>
                &#125;
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
              <h3 className="font-semibold text-purple-800 mb-3">배경 변경</h3>
              <p className="text-sm text-gray-700 mb-3">
                배경색을 변경해보세요:
              </p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                body &#123;<br/>
                <span className="ml-4">background-color: #e0f2fe;</span><br/>
                <span className="ml-4">/* 또는 다른 색상 */</span><br/>
                &#125;
              </div>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
              <h3 className="font-semibold text-orange-800 mb-3">버튼 스타일</h3>
              <p className="text-sm text-gray-700 mb-3">
                버튼의 모양을 변경해보세요:
              </p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                .button &#123;<br/>
                <span className="ml-4">background: #10b981;</span><br/>
                <span className="ml-4">border-radius: 20px;</span><br/>
                <span className="ml-4">padding: 15px 30px;</span><br/>
                &#125;
              </div>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
              <h3 className="font-semibold text-red-800 mb-3">애니메이션</h3>
              <p className="text-sm text-gray-700 mb-3">
                호버 효과를 추가해보세요:
              </p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                .button:hover &#123;<br/>
                <span className="ml-4">transform: scale(1.1);</span><br/>
                <span className="ml-4">transition: 0.3s;</span><br/>
                &#125;
              </div>
            </div>
            
            <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-400">
              <h3 className="font-semibold text-cyan-800 mb-3">레이아웃</h3>
              <p className="text-sm text-gray-700 mb-3">
                컨테이너를 변경해보세요:
              </p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                .container &#123;<br/>
                <span className="ml-4">max-width: 800px;</span><br/>
                <span className="ml-4">background: linear-gradient(...);</span><br/>
                <span className="ml-4">border: 3px solid;</span><br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        {/* 단계별 실습 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 단계별 실습</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-teal-400 pl-6">
              <h3 className="text-lg font-semibold text-teal-800 mb-2">1단계: 기본 스타일링</h3>
              <p className="text-gray-700 mb-3">
                제목의 색상과 크기를 변경해보세요.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="text-sm text-gray-700">
                  <strong>시도해보세요:</strong><br/>
                  • h1의 color를 "red"로 변경<br/>
                  • h1의 font-size를 "3rem"으로 변경<br/>
                  • p의 color를 "blue"로 변경
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-teal-400 pl-6">
              <h3 className="text-lg font-semibold text-teal-800 mb-2">2단계: 배경과 레이아웃</h3>
              <p className="text-gray-700 mb-3">
                배경색과 컨테이너 스타일을 변경해보세요.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="text-sm text-gray-700">
                  <strong>시도해보세요:</strong><br/>
                  • body의 background-color를 "#e0f2fe"로 변경<br/>
                  • .container의 border-radius를 "20px"로 변경<br/>
                  • .container에 box-shadow 추가
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-teal-400 pl-6">
              <h3 className="text-lg font-semibold text-teal-800 mb-2">3단계: 버튼 스타일링</h3>
              <p className="text-gray-700 mb-3">
                버튼의 모양과 동작을 변경해보세요.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="text-sm text-gray-700">
                  <strong>시도해보세요:</strong><br/>
                  • .button의 background를 "#10b981"로 변경<br/>
                  • .button:hover에 transform: scale(1.1) 추가<br/>
                  • transition: 0.3s 추가
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-teal-400 pl-6">
              <h3 className="text-lg font-semibold text-teal-800 mb-2">4단계: 고급 효과</h3>
              <p className="text-gray-700 mb-3">
                그라데이션과 애니메이션을 추가해보세요.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="text-sm text-gray-700">
                  <strong>시도해보세요:</strong><br/>
                  • body에 linear-gradient 배경 추가<br/>
                  • h1에 text-shadow 추가<br/>
                  • .container에 animation 추가
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 팁과 트릭 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💡 팁과 트릭</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">CSS 팁</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <code className="bg-gray-100 px-1 rounded">!important</code>를 사용하면 우선순위를 높일 수 있습니다</li>
                <li>• <code className="bg-gray-100 px-1 rounded">/* */</code>로 주석을 달 수 있습니다</li>
                <li>• 색상은 <code className="bg-gray-100 px-1 rounded">#ff0000</code>, <code className="bg-gray-100 px-1 rounded">rgb(255,0,0)</code>, <code className="bg-gray-100 px-1 rounded">red</code> 등으로 표현할 수 있습니다</li>
                <li>• <code className="bg-gray-100 px-1 rounded">px</code>, <code className="bg-gray-100 px-1 rounded">em</code>, <code className="bg-gray-100 px-1 rounded">rem</code>, <code className="bg-gray-100 px-1 rounded">%</code> 등 다양한 단위를 사용할 수 있습니다</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">HTML 팁</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <code className="bg-gray-100 px-1 rounded">&lt;div&gt;</code>는 블록 요소, <code className="bg-gray-100 px-1 rounded">&lt;span&gt;</code>는 인라인 요소입니다</li>
                <li>• <code className="bg-gray-100 px-1 rounded">class</code>는 여러 요소에 적용, <code className="bg-gray-100 px-1 rounded">id</code>는 하나의 요소에만 적용합니다</li>
                <li>• 시맨틱 태그(<code className="bg-gray-100 px-1 rounded">&lt;header&gt;</code>, <code className="bg-gray-100 px-1 rounded">&lt;main&gt;</code>, <code className="bg-gray-100 px-1 rounded">&lt;footer&gt;</code>)를 사용하면 좋습니다</li>
                <li>• <code className="bg-gray-100 px-1 rounded">alt</code> 속성은 이미지에 반드시 추가해야 합니다</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 실습 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🛠️ 직접 실습해보기</h2>
          <p className="text-gray-600 mb-4">인터랙티브 효과가 포함된 코드를 직접 수정해보세요!</p>
          <PracticePreview initialCode={interactiveExampleCode} />
        </section>

        {/* 다음 단계 */}
        <section className="bg-teal-50 border-l-4 border-teal-400 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-teal-800 mb-3">📚 다음 단계</h2>
          <p className="text-gray-700 mb-4">
            인터랙티브 데모를 통해 HTML과 CSS를 실습했다면, 다음 단계로 넘어가보세요:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/html-basics" className="bg-teal-600 text-white p-3 rounded-lg text-center hover:bg-teal-700 transition-colors">
              HTML 기초
            </Link>
            <Link href="/css-basics" className="bg-teal-600 text-white p-3 rounded-lg text-center hover:bg-teal-700 transition-colors">
              CSS 기초
            </Link>
            <Link href="/layout-practice" className="bg-teal-600 text-white p-3 rounded-lg text-center hover:bg-teal-700 transition-colors">
              레이아웃 연습
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 