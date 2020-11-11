import React from "react"
import "./ShuffleButton.css"
import shuffleButton from "../images/shuffle.png"

const ShuffleButton = props => <div className="shuffle-button clickable noselect">
  <img className="shuffle-img" src={shuffleButton} />
  <div className="shuffle-text">{props.muscleGroup}</div>
</div>

export default ShuffleButton