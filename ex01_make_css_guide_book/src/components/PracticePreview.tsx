"use client";
import { useState } from "react";

export default function PracticePreview({ initialCode }: { initialCode: string }) {
  const [code, setCode] = useState(initialCode);
  const [srcDoc, setSrcDoc] = useState(initialCode);

  return (
    <div className="mb-8">
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
        <div className="text-yellow-400 mb-2">/* 코드를 수정해보세요 */</div>
        <textarea
          className="w-full h-48 p-2 border rounded font-mono text-sm bg-gray-800 text-green-400 border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          value={code}
          onChange={e => setCode(e.target.value)}
          spellCheck={false}
        />
      </div>
      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors font-semibold mb-4"
        onClick={() => setSrcDoc(code)}
      >
        결과 미리보기
      </button>
      <div className="border rounded overflow-hidden bg-white" style={{ minHeight: 200 }}>
        <iframe
          srcDoc={srcDoc}
          title="실습 결과"
          sandbox="allow-scripts allow-same-origin"
          className="w-full min-h-[200px] bg-white"
          style={{ border: "none", minHeight: 200 }}
        />
      </div>
    </div>
  );
} 