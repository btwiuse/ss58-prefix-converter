import React from "react";
import term from './term.svg';
import "./App.css";

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={term} className="App-term" alt="term" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/btwiuse/react-esbuild-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          btwiuse/react-esbuild-starter
        </a>
      </header>
    </div>
  );
}
