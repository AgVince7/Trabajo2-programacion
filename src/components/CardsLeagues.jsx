import { CardsPartidos } from "./CardsPartidos";

export const CardsLeagues = ({ league }) => {
  const urlImagen = `https://api.promiedos.com.ar/images/league/${league.id}/1`;
  return (
    <>
      <section className="cards-leagues">
        <header className="cards-leagues-header">
          <img src={urlImagen} alt="Escudos" />
          <h2>{league.name.toUpperCase()}</h2>
        </header>
        {league.games.map((partido) => (
          <CardsPartidos
            key={partido.id}
            partido={partido}
            className="cards-partidos"
          />
        ))}
      </section>
    </>
  );
};
