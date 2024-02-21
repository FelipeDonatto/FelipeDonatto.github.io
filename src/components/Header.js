import React, { useEffect } from "react";

export default function Header() {
  useEffect(() => {}, []);
  return (
    <header className="App-header">
      <div className="header-container">
        <div className="header-text">
          FELIPE DONATTO
          <span className="blinking-underline">_</span>
        </div>

        <div>
          <button>INICIO</button>
          <button>PORTFÓLIO</button>
        </div>
      </div>
    </header>
  );
}
