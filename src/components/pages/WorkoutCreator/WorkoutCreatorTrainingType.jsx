import React from 'react'
// import WorkoutCreatorOptions from './WorkoutCreatorOptions'
import WorkoutItem from "./WorkoutItem"
import {workoutCreatorTypeItems} from "./workoutCreatorTypeItems"
import { Link } from "react-router-dom"

const WorkoutCreatorTrainingType = () => {
    return(
    <div className="workout-type-wrapper">
        <div className="workout-type-heading">
            <h1>Select Training Type</h1>
        </div>
       
        <div className="workout-type-items">
            {workoutCreatorTypeItems.map(({ title, imageUrl, path }) => {
                return (
                    <Link className="workout-type-item" to={path}>
                        <WorkoutItem title={title} imageUrl={imageUrl} path={path} />
                    </Link>
                )
            })}
        </div>
    </div>
)
}

export default WorkoutCreatorTrainingType;