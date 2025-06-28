"use client";
import { useState } from "react";
import Link from "next/link";

export default function PracticeResultPage() {
  const [code, setCode] = useState(`<!DOCTYPE html>\n<html lang=\"ko\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>실습 미리보기</title>\n  <style>\n    body { font-family: 'Segoe UI', sans-serif; background: #f3f4f6; margin: 0; padding: 20px; }\n    .container { max-width: 600px; margin: 40px auto; background: white; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); padding: 32px; }\n    h1 { color: #2563eb; text-align: center; }\n    p { color: #555; }\n    button { background: #2563eb; color: white; border: none; padding: 8px 20px; border-radius: 6px; cursor: pointer; margin-top: 12px; }\n    button:hover { background: #1e40af; }\n  </style>\n</head>\n<body>\n  <div class=\"container\">\n    <h1>실습 미리보기</h1>\n    <p>여기에 HTML과 CSS 코드를 입력해보세요!</p>\n  </div>\n</body>\n</html>`);
  const [srcDoc, setSrcDoc] = useState(code);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-8">
          <Link href="/" className="text-indigo-600 hover:text-indigo-800 font-medium">← 메인으로 돌아가기</Link>
        </nav>
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">실습 결과 미리보기</h1>
          <p className="text-gray-600">HTML과 CSS 코드를 입력하고, 바로 결과를 확인해보세요.</p>
        </header>
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">코드 입력</h2>
          <textarea
            className="w-full h-64 p-3 border border-gray-300 rounded font-mono text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            value={code}
            onChange={e => setCode(e.target.value)}
            spellCheck={false}
          />
          <button
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition-colors font-semibold"
            onClick={() => setSrcDoc(code)}
          >
            결과 미리보기
          </button>
        </section>
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">미리보기 결과</h2>
          <div className="border rounded overflow-hidden" style={{ minHeight: 300 }}>
            <iframe
              srcDoc={srcDoc}
              title="실습 결과 미리보기"
              sandbox="allow-scripts allow-same-origin"
              className="w-full min-h-[300px] bg-white"
              style={{ border: "none", minHeight: 300 }}
            />
          </div>
        </section>
      </div>
    </div>
  );
} 