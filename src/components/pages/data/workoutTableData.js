import { MilitaryPressBarbell, MilitaryPressBarbellRegularEndurance } from './Exercises/Shoulders'
import { BackSquatBarbell, DeadLift } from './Exercises/Legs'
import { StandingCalfRaises } from './Exercises/Calves'
import { HollowBody } from './Exercises/Abs'
import { Chest, LowRepsChest } from './Exercises/Chest'
import { PullUps } from './Exercises/Back'
import { Goals, muscleGroup } from './Exercises/Exercises.model'

export const rangeTypes = {
    numericMultiple: 'numericMultiple',
    numeric: 'numeric',
    numericWeightMultiple: 'numericWeightMultiple',
    numericWeight: 'numericWeight',
    numericSeconds: 'numericSeconds',
}

export const regularStrength = {
    title: 'regularStrength',
    goal: Goals.Strength,
    exercise: [
        {
            title: muscleGroup.Shoulders,
            exercise: [MilitaryPressBarbell]
        },
        {
            title: muscleGroup.LegsPush,
            exercise: [BackSquatBarbell]
        },
        {
            title: muscleGroup.Chest,
            exercise: [Chest]
        },
        {
            title: muscleGroup.Back,
            exercise: [PullUps]
        },
        {
            title: muscleGroup.LegsPull,
            exercise: [DeadLift]
        },
        {
            title: muscleGroup.Calves,
            exercise: [StandingCalfRaises]
        },
        {
            title: muscleGroup.Abs,
            exercise: [HollowBody]
        },
    ]
}

export const regularEndurance = {
    title: 'regularEndurance',
    goal: Goals.Endurance,
    exercise: [
        {
            title: muscleGroup.Shoulders,
            exercise: [MilitaryPressBarbellRegularEndurance]
        },
    ]
}


export const allExercises = [
    MilitaryPressBarbell,

    BackSquatBarbell,
    DeadLift,

    Chest,
    PullUps,
    StandingCalfRaises,
    HollowBody
]