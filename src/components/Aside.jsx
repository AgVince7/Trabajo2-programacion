export const Aside = ({ onLeagueSelect, selectedLeague, isOpen, onClose }) => {
  const leagues = [
    "Inicio",
    "Champions League",
    "Premier League",
    "La Liga",
    "LPF",
  ];

  const handleClick = (e, leagueName) => {
    e.preventDefault();
    onLeagueSelect(leagueName);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && <div className="aside-overlay" onClick={onClose}></div>}
      <aside className={`aside ${isOpen ? "open" : ""}`}>
        <h3 className="section-title">Principales competencias</h3>

        <nav>
          <ul className="leagues">
            {leagues.map((leagueName) => (
              <li key={leagueName}>
                <a
                  href="#"
                  className={`side-item ${
                    selectedLeague === leagueName ? "active" : ""
                  }`}
                  onClick={(e) => handleClick(e, leagueName)}
                >
                  ⚽ {leagueName}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};
