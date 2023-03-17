import GameCard from "./GameCard";
import classes from "./gameCard.module.css";

export default function GamesPanel({ allGames }) {
  console.log({ allGames });
  return (
    <div className={classes.gamesPanel}>
      {allGames.map((game, idx) => (
        <GameCard key={`${game.name + idx}`} game={game} />
      ))}
    </div>
  );
}
