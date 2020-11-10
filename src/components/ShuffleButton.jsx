import React from "react";
import "./ShuffleButton.css";
import shuffleButton from "../images/shuffle.png";

const ShuffleButton = props => (
  <div className="shuffle-button">
    <img onClick={props.ShuffleButtonClicked} className="shuffle-img" src={shuffleButton} />
    <div className="shuffle-text"> CLick to Suffle</div>
  </div>
);

export default ShuffleButton;
