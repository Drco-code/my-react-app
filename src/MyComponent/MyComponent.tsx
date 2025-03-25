import React, { use, useState } from "react";

function MyComponent() {
  let [name, setName] = useState("Guest");
  let [age, setAge] = useState(0);
  let [isEmployed, SetIsEmployed] = useState(false);

  const updateName = () => {
    setName("Derrick");
  };

  const updateAge = () => {
    setAge(age + 2);
  };

  const toogleIsEmployed = () => {
    SetIsEmployed(!isEmployed);
  };


  return (
      <>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={updateAge}>Increment Age</button>

        <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toogleIsEmployed}>Toogle Status</button>
    </>
  );
}

export default MyComponent;
