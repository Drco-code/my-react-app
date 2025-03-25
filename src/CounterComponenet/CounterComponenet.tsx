import React, { useState } from "react";
import * as styles from "./CounterComponent.module.css";

function CounterComponent() {
  let [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter(counter++);
  }

  function decreaseCounter() {
    setCounter(counter--);
  }

  function resetCounter() {
    setCounter((counter = 0));
  }

  const [name, setName] = useState("");

  function handleNameChnage(event) {
    setName(event.target.value);
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.display}>
          Counter: <span className={styles.number}> {counter}</span>
        </h1>
        <button className={styles.resetButton} onClick={resetCounter}>
          Reset
        </button>
        <button className={styles.decreaseButton} onClick={decreaseCounter}>
          Decrease
        </button>
        <button className={styles.increaseButton} onClick={increaseCounter}>
          Increment
        </button>
      </div>

      <div>
        <input type="text" value={name} onChange={handleNameChnage} />
        <p>Name :{name}</p>
      </div>
    </>
  );
}

export default CounterComponent;
