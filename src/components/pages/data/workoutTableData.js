import { MilitaryPressBarbell } from './Exercises/Shoulders'
import { LegsPush } from './Exercises/Legs'
import { ButtPushups, ButtSquat } from './Exercises/Butt'
import { Dance } from './Exercises/Hips'
import { Chest, LowRepsChest } from './Exercises/Chest'
import { PullUps } from './Exercises/Back'

export const rangeTypes = {
    numericMultiple: 'numericMultiple',
    numeric: 'numeric',
    numericWeightMultiple: 'numericWeightMultiple',
    numericWeight: 'numericWeight',
    numericSeconds: 'numericSeconds',
}

export const allExercises = [MilitaryPressBarbell, LegsPush, Chest, LowRepsChest, PullUps]