import React from 'react'
import "./Trainings.css"
import TrainingItem from "../../TrainingItem"
import {trainingsMenuItems} from "./trainingsMenuItems"
import { Link } from "react-router-dom"


export default function TrainingsMenu(){
    
    return(
        <div>
        <div className="trainings-menu-heading">
        <h1>Trainings</h1>
        </div>
        <div className="trainings-menu">
            
        </div>
        <div className="trainings-menu">
                {trainingsMenuItems.map(({title, imageUrl, path}) =>{
            return(
                <Link className="training-item-wrapper" to={path}>
            <TrainingItem title={title} imageUrl={imageUrl} path={path} /> 
            </Link>
            )})}
            </div>    
        </div>
    )
}
