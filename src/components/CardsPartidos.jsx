export const CardsPartidos = (partido) => {
  const urlImagen = `https://api.promiedos.com.ar/images/team/${partido.partido.teams[0].id}/1`;
  const urlImagen2 = `https://api.promiedos.com.ar/images/team/${partido.partido.teams[1].id}/1`;

  const statusPartido = partido.partido.status.enum;

  return (
    <section className="cards-partidos">
      <span className="hora">
        {statusPartido === 1
          ? partido.partido.start_time
          : partido.partido.game_time_status_to_display}
      </span>

      <div className="equipos">
        <div className="equipo1">
          <span>{partido.partido.teams[0].name}</span>
          <img src={urlImagen} alt="Escudo" />
        </div>

        <div>
          {statusPartido !== 1 && <span>{partido.partido.scores?.[0]}</span>}

          <span className="versus"> - </span>
          {statusPartido !== 1 && <span>{partido.partido.scores?.[1]}</span>}
        </div>

        <div className="equipo2">
          <img src={urlImagen2} alt="Escudo" />
          <span>{partido.partido.teams[1].name}</span>
        </div>
      </div>
    </section>
  );
};
