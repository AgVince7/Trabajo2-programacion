import "./App.css";

function App() {
  
  return (
    <>
      <>
        <header className="header">
          <section className="logo-area">
            <img src="./public/logo.png" alt="logo" />
            <h1 className="logo-text">FútbolAlInstante</h1>

            <nav className="nav">
              <ul>
                <li><a href="#" className="nav-link">Inicio</a></li>
                <li><a href="#" className="nav-link">En Juego</a></li>
                <li><a href="#" className="nav-link">Proximos</a></li>
              </ul>
            </nav>
          </section>
        </header>

        <aside className="aside">
          <h3 className="section-title">Principales competencias</h3>

          <nav>
            <ul className="leagues">
              <li><a href="#" className="side-item">⚽ Champions League</a></li>
              <li><a href="#" className="side-item">⚽ Premier League</a></li>
              <li><a href="#" className="side-item">⚽ La Liga</a></li>
              <li><a href="#" className="side-item">⚽ LPF</a></li>
            </ul>
          </nav>
        </aside>  
      </>
    </>
  );
}

export default App;
