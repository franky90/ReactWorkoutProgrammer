import React from "react";
import "./ShuffleButton.css"
import shuffleButton from "../images/shuffle.png"

function ShuffleButton(){
    return(
        <div className="shuffle-button">
    <img className="shuffle-img" src={shuffleButton} />
   <div className="shuffle-text"> CLick to Suffle</div>
    </div>
    )
};

export default ShuffleButton;