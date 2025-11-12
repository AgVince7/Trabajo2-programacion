import { useState } from "react";
import { Aside } from "./Aside";
import { CardsLeagues } from "./CardsLeagues";

export const MainPage = ({ leagues }) => {
  const [selectedLeague, setSelectedLeague] = useState(null);
  const [selectedLeagueData, setSelectedLeagueData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Mapeo de nombres de ligas a IDs y nombres para la API
  const leagueIdMap = {
    Inicio: {
      id: "",
      name: "Inicio",
      apiId: "inicio",
    },
    "Champions League": {
      id: "fhc/572_73_1_5",
      name: "Champions League",
      apiId: "fhc",
    },
    "Premier League": {
      id: "h/7_131_1_12",
      name: "Premier League",
      apiId: "h",
    },
    "La Liga": { id: "bb/11_98_1_13", name: "La Liga", apiId: "bb" },
    LPF: { id: "hc/72_224_8_16", name: "LPF", apiId: "hc" },
  };

  // URL base de la API para ligas específicas desde .env
  const API_LEAGUE_URL = import.meta.env.VITE_API_LEAGUE_URL;

  const handleLeagueSelect = async (leagueName) => {
    setSelectedLeague(leagueName);
    setLoading(true);

    try {
      const leagueInfo = leagueIdMap[leagueName];
      if (!leagueInfo) {
        console.error("Liga no encontrada en el mapeo");
        setLoading(false);
        return;
      }

      const apiUrl = API_LEAGUE_URL
        ? `${API_LEAGUE_URL}/${leagueInfo.id}`
        : null;

      if (!apiUrl) {
        console.error("VITE_API_LEAGUE_URL no está definida en .env");
        setLoading(false);
        return;
      }

      console.log(apiUrl);
      const response = await fetch(apiUrl);
      const data = await response.json();

      // La API devuelve { TTL, games: [...] }
      // Necesitamos transformarlo al formato que espera CardsLeagues: { id, name, games }
      if (data.games && Array.isArray(data.games)) {
        const leagueData = {
          id: leagueInfo.apiId, // ID para la imagen de la liga
          name: leagueInfo.name, // Nombre de la liga
          games: data.games, // Array de partidos
        };
        setSelectedLeagueData([leagueData]);
      } else {
        console.error("Estructura de respuesta inesperada:", data);
        setSelectedLeagueData(null);
      }
    } catch (error) {
      console.error("Error al cargar la liga:", error);
      setSelectedLeagueData(null);
    } finally {
      setLoading(false);
    }
  };

  // Determinar qué datos mostrar
  const leaguesToDisplay = selectedLeagueData || leagues;

  return (
    <>
      <Aside
        onLeagueSelect={handleLeagueSelect}
        selectedLeague={selectedLeague}
      />
      <main>
        <section className="section-games">
          {loading ? (
            <div className="global-loading">Cargando datos...</div>
          ) : (
            leaguesToDisplay.map((league) => (
              <CardsLeagues key={league.id} league={league} />
            ))
          )}
        </section>
      </main>
    </>
  );
};
