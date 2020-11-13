import React from 'react'
import "./Trainings.css"
import TrainingItem from "../../TrainingItem"
import {exerciseListSplit} from "../data/exerciseListSplit"
import { Link } from "react-router-dom"

export default function Trainings(){
    
    return(
        <div>
        <div className="trainings-menu-heading">
        <h1>Split Workouts</h1>
        </div>
        <div className="trainings-menu">

            {exerciseListSplit.map(({title, imageUrl, path}) =>{
            return(
                <Link className="training-item-wrapper" to={path}>
            <TrainingItem title={title} imageUrl={imageUrl} /> 
            </Link>
            )})}
        </div>
        </div>
    )
}