export const CardsPartidos = (partido) => {
  const urlImagen = `https://api.promiedos.com.ar/images/team/${partido.partido.teams[0].id}/1`;
  const urlImagen2 = `https://api.promiedos.com.ar/images/team/${partido.partido.teams[1].id}/1`;
  return (
    <section className="cards-partidos">
      <span className="hora">{partido.partido.game_time_to_display}</span>

      <div className="equipos">
        <span>{partido.partido.teams[0].name}</span>
        <img src={urlImagen} alt="Escudo" />
        <span className="versus"> - </span>
        <img src={urlImagen2} alt="Escudo" />
        <span>{partido.partido.teams[1].name}</span>
      </div>
    </section>
  );
};
