// Click Event = An interaction when a user clicks on a button.
//              we can respond to clicks by passing a callback to the on click handle

import { MouseEventHandler } from "react";

function Button() {

    let count: number = 0;

    const handleClick = (event) => {
        event.target.textContent = "Ouch 🤕!";
    }

  

    return (
      handleClick ? 
    <button onDoubleClick={(event) => handleClick(event)} type="button">
      Clcik Me😀
    </button> : <h2>Name is not Available</h2>
  );
}

export default Button;
