import React from "react"
import "./ShuffleButton.css"
import shuffleButton from "../images/shuffle.png"

const ShuffleButton = props => <div className="shuffle-button clickable noselect">
 {props.isReadOnly ? null :  <img className="shuffle-img" src={shuffleButton} alt="shuffle button" />}
  <div className="shuffle-text">{props.muscleGroup}</div>
</div>

export default ShuffleButton