import { Aside } from "./Aside";
import { CardsLeagues } from "./CardsLeagues";
export const MainPage = ({ leagues }) => {
  return (
    <>
      <Aside />
      <main>
        <section className="section-games">
          {leagues.map((league) => (
            <CardsLeagues key={league.id} league={league} />
          ))}
        </section>
      </main>
    </>
  );
};
