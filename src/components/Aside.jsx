export const Aside = ({ onLeagueSelect, selectedLeague }) => {
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
  };

  return (
    <aside className="aside">
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
  );
};
