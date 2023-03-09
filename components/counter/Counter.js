import { useState } from "react";
import Modal from "../modal/Modal";
import classes from "./counter.module.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleIncrement = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    setCounter((prevState) => prevState - 1);
  };

  const modalHandler = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };

  if (counter < 0) {
    return (
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        title="Are you hacking?"
        content="You cannot go below 0! Reload the page..."
        accept="Accept"
        cancel="Cancel"
      />
    );
  }
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
          <button onClick={modalHandler} className={classes.btn}>
            Instructions
          </button>
        </div>
      </div>
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        title="Instructions for Counter"
        content="Press increase button to increase the number on the board, and the decrease button to decrease it. You cannot go below 0."
        // accept="Accept"
        cancel="Understood"
      />
    </>
  );
}
