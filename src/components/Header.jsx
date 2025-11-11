export const Header = () => {
  return (
    <>
      <header className="header">
        <section className="logo-area">
          <img src="./public/logo.png" alt="logo" />
          <h1 className="logo-text">FútbolAlInstante</h1>

          <nav className="nav">
            <ul>
              <li>
                <a href="#" className="nav-link">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  En Juego
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Proximos
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </>
  );
};
