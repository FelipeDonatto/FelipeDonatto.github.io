import React, { useEffect } from "react";

export default function Header() {
  useEffect(() => {}, []);
  return (
    <header className="App-header">
      <div className="header-container">
        <div className="header-text">
          LOREM IPSUM<span className="blinking-underline">_</span>
        </div>
      </div>
    </header>
  );
}
