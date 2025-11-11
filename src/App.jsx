import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGames = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setGames(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <>
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
        <main>
          <aside className="aside">
            <h3 className="section-title">Principales competencias</h3>

            <nav>
              <ul className="leagues">
                <li>
                  <a href="#" className="side-item">
                    ⚽ Champions League
                  </a>
                </li>
                <li>
                  <a href="#" className="side-item">
                    ⚽ Premier League
                  </a>
                </li>
                <li>
                  <a href="#" className="side-item">
                    ⚽ La Liga
                  </a>
                </li>
                <li>
                  <a href="#" className="side-item">
                    ⚽ LPF
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
          {loading ? (
            <div className="loading">Cargando juegos...</div>
          ) : (
            <section className="section-games">
              {games.leagues.map((league) => (
                <div key={league.id}>
                  <h2>{league.name}</h2>
                  <p>{league.country_name}</p>
                </div>
              ))}
            </section>
          )}
        </main>
      </>
    </>
  );
}

export default App;
