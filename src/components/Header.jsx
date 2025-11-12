import React, { useEffect } from "react";

export const Header = () => {
  useEffect(() => {
    if (localStorage.getItem("tema") === "alternativo") {
      document.body.classList.add("tema-alternativo");
    }
  }, []);

  const handleToggle = (e) => {
    const esAlternativo = e.target.checked;
    document.body.classList.toggle("tema-alternativo", esAlternativo);
    localStorage.setItem("tema", esAlternativo ? "alternativo" : "default");
  };

  return (
    <header className="header">
      <section className="logo-area">
        <img src="/logo.png" alt="logo" />
        <h1 className="logo-text">Fútbol Al Instante</h1>
      </section>
      <div className="toggle-container">
        <label className="switch">
          <input
            type="checkbox"
            id="toggleTema"
            onChange={handleToggle}
            defaultChecked={localStorage.getItem("tema") === "alternativo"}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </header>
  );
};

export default Header;
