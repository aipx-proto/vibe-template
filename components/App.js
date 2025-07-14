import React from 'react';
import ReactDOM from 'react-dom/client';

console.log("Created with vibe template: https://github.com/aipx-proto/vibe-template");

function App() {
  return (
    <div className="flex flex-col items-center mx-auto w-2xl p-12">
      <h1 className="text-2xl font-bold mb-4">Vibe App Template</h1>
      <p className="mb-4">Open Copilot chat and select "Vibe-Coding" mode to get started.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);