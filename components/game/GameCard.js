import Image from "next/image";
import classes from "./gameCard.module.css";

export default function GameCard({ game }) {
  const { name, background_image, rating, releaseDate, genres } = game;
  console.log(name, background_image, rating, releaseDate, genres);

  return (
    <div className={classes.gameCard}>
      <Image
        src={background_image}
        className={classes.gameCard__image}
        width={600}
        height={350}
        style={{ objectFit: "cover", objectPosition: "center" }}
        alt={name}
      />
      <h1 className={classes.gameCard__title}>
        {name} {releaseDate}
      </h1>
      <div className={classes.gameCard__footer}>
        <div className={classes.gameCard__footer__genres}>
          {genres?.map((genre, idx) => (
            <div
              className={classes.gameCard__footer__genreItem}
              key={`${genre}-${idx}`}
            >{` ${genre.name} `}</div>
          ))}
        </div>
        <div className={classes.gameCard__footer__ratings}>
          <div className={classes.gameCard__footer__rating}>{rating}</div>
        </div>
      </div>
    </div>
  );
}
