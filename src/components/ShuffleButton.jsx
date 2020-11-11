import React from "react";
import "./ShuffleButton.css";
import shuffleButton from "../images/shuffle.png";

// const muscles ="";

// if (shuffleTitle="chest"){
//   muscle="chest"
// }

const ShuffleButton = ({shuffleTitle}) =>

(
  <div className="shuffle-button">
    <img className="shuffle-img" src={shuffleButton} />
    <div className="shuffle-text"> Random exercise {shuffleTitle}</div>
  </div>
);

export default ShuffleButton;
