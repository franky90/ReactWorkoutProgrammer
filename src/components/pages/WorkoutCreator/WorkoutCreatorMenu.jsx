import React from 'react'
import "./WorkoutCreator.css"
import TrainingItem from "../../TrainingItem"
import { workoutCreatorMenuItems } from "./workoutCreatorTypeItems"
import { Link } from "react-router-dom"

export default function WorkoutCreatorMenu() {
    return (
        <div>
            <div className="trainings-menu-heading">
                <h1>Workout Creator Menu</h1>
            </div>
            <div className="trainings-menu">

            </div>
            <div className="trainings-menu">
                {workoutCreatorMenuItems.map(({ title, imageUrl, path }) => {
                    return (
                        <Link className="training-item-wrapper" to={path}>
                            <TrainingItem title={title} imageUrl={imageUrl} path={path} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
