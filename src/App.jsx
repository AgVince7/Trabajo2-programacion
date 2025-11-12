import "./App.css";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { MainPage } from "./components/MainPage";

function App() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [boolTime, setBoolTime] = useState(false);

  setTimeout(() => {
    setBoolTime(!boolTime);
  }, 10000);

  const fetchGames = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setLeagues(data.leagues);
    setLoading(false);
  };

  useEffect(() => {
    fetchGames();
  }, [boolTime]);

  return (
    <>
      <Header />
      {loading ? (
        <div className="global-loading">Cargando datos...</div>
      ) : (
        <MainPage leagues={leagues} />
      )}
    </>
  );
}

export default App;
