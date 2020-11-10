import React from 'react'
import "./Trainings.css"
import TrainingItem from "../../components/TrainingItem"
import chestImage from "../../images/chest.jpg"
import shouldersImage from "../../images/shoulders.jpg"
import legsImage from "../../images/legs.jpg"
import backImage from "../../images/back.jpg"


export default function Trainings(){
    
    
    
    return(
        <div className="trainings-menu">
    <TrainingItem title="Chest" imageUrl={chestImage}  />
    <TrainingItem title="Shoulders" imageUrl={shouldersImage}  />
    <TrainingItem title="Legs" imageUrl={legsImage}  />
    <TrainingItem title="Back" imageUrl={backImage}  />
        </div>
    )
}