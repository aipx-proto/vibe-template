import React from "react";
import { HelloWorld } from "./HelloWorld.jsx";

export function App() {
  return (
    <div className="flex flex-col items-center mx-auto w-2xl p-12">
      <h1 className="text-2xl font-bold mb-4">Vibe App Template</h1>
      <HelloWorld/>
    </div>
  );
}