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

  const [name, setName] = useState("Guest");

  const [quantity, SetQuantity] = useState(1);

  const [comment, SetComment] = useState("");

  const [payment, setPayment] = useState("");

  const [delivery, setDelivery] = useState("");

  function handleDeliveryChange(event) {
    setDelivery(event.target.value);
  }

  function handlePaymentChnage(event) {
    setPayment(event.target.value);
  }
  function handleCommentChange(event) {
    SetComment(event.target.value);
  }

  function handleNameChnage(event) {
    setName(event.target.value);
  }

  function handleNameQuantity(event) {
    SetQuantity(event.target.value);
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

      <div className="max-w-md mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-6 space-y-4 dark:bg-gray-800 dark:border-gray-700">
        <input
          type="text"
          value={name}
          onChange={handleNameChnage}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          placeholder="Enter your name"
        />
        <p className="text-gray-600 text-sm dark:text-gray-400">Name :{name}</p>

        <input className="block text-sm font-medium text-gray-700 dark:text-gray-300" type="number" value={quantity} onChange={handleNameQuantity} />
        <p>Quantity :{quantity}</p>

        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Enter delivery Instrustions"
        ></textarea>
        <p>Commnet: {comment}</p>

        <select value={payment} onChange={handlePaymentChnage}>
          <option value="">Select An Option</option>
          <option value="Visa">Visa</option>
          <option value="MasterCard">MasterCard</option>
          <option value="GiftCard">GiftCard</option>
        </select>
        <p>Pyament: {payment}</p>

        <label htmlFor="">
          <input
            type="radio"
            value="Pick UP"
            checked={delivery === "Pick UP"}
            onChange={handleDeliveryChange}
          />
          Pick Up
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="Delivery"
            checked={delivery === "Delivery"}
            onChange={handleDeliveryChange}
          />
          Delivery
        </label>
        <p>Delivery {delivery}</p>
      </div>
    </>
  );
}

export default CounterComponent;
