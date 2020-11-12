import React from "react";
import "./ShuffleButton.css";
import shuffleButton from "../images/shuffle.png";


const ShuffleButton = ({muscleGroup}) =>

(
  <div className="shuffle-button">
    <img className="shuffle-img" src={shuffleButton} />
    <div className="shuffle-text"> {muscleGroup}</div>
  </div>
);

export default ShuffleButton;
