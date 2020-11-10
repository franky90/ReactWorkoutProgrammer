import React from 'react'
import "./Trainings.css"
import TrainingItem from "../../TrainingItem"
import {exerciseListSplit} from "../data/exerciseListSplit"


export default function Trainings(){
    
    return(
        <div className="trainings-menu">
    
            {exerciseListSplit.map(({title, imageUrl}) =>{
            return(
            <TrainingItem title={title} imageUrl={imageUrl} /> 
            )})}
        </div>
    )
}