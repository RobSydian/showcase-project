import { useState } from "react";
import classes from "./counter.module.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    setCounter((prevState) => prevState - 1);
  };
  return (
    <>
      <h1 className={classes.pageTitle}>Counter Component</h1>
      <div className={classes.container}>
        <div className={classes.counterDisplay}>{counter}</div>

        <div className={classes.btnDisplay}>
          <button
            className={`${classes.btn} ${classes.btn__increment}`}
            onClick={handleIncrement}
          >
            Increment
          </button>
          <button
            className={`${classes.btn} ${classes.btn__decrement}`}
            onClick={handleDecrement}
            disabled={counter === 0}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}
