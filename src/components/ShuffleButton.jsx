import React from "react"
import "./ShuffleButton.css"
import shuffleButton from "../images/shuffle.png"

const ShuffleButton = (props) => {
  // muscleGroup is a string
  const { isReadOnly, muscleGroup } = props

  let shuffleImgHTML = null
  let className = "shuffle-button noselect"
  if(isReadOnly === false) {
    shuffleImgHTML = <img className="shuffle-img" src={shuffleButton} alt="shuffle button" />
  } else {
    // className += ' notClickable'
  }

  return (
    <div className={className}>
      {shuffleImgHTML}
      <div className="shuffle-text">{muscleGroup}</div>
    </div>
  );
}

export default ShuffleButton;