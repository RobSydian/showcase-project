import Image from "next/image";
import { useState, useEffect } from "react";
import { useLocalStorage } from "../../components/customHooks/useLocalStorage";
import GameCard from "../../components/game/GameCard";
import GamesPanel from "../../components/game/GamesPanel";
import GamesApi, { getAllGames } from "../api/games";

export default function GamesPage() {
  const [games, setGames] = useState();
  // useLocalStorage("games", []);
  // localStorage.setItem('games', []);

  useEffect(() => {
    const fetchGamesApi = async () => {
      const allGames = await getAllGames();
      localStorage.setItem("games", JSON.stringify(allGames.data.results));
      console.log({ storedGames: JSON.parse(localStorage.getItem("games")) });
      setGames(JSON.parse(localStorage.getItem("games")));
    };

    if (!localStorage.getItem("games")) {
      fetchGamesApi();
    } else {
      setGames(JSON.parse(localStorage.getItem("games")));
    }
  }, []);

  return (
    <div>
      <h1>Games Page</h1>
      {!games && <p>No games found.</p>}
      {games && (
        <>
          {console.log(games)}
          <GamesPanel allGames={games} />
        </>
      )}
    </div>
  );
}
