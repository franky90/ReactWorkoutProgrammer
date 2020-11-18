import treatments from "../../../images/treatments.jpg"
import split from "../../../images/split-background.jpg"
import fullBody from "../../../images/fullBody.jpg"

export const workoutCreatorTypeItems = [
    {
        id: 'regular',
        title: 'Regular',
        imageUrl: fullBody,
        path: "/workout-creator/regular"
    },
    {
        id: 'supersets',
        title: 'Supersets',
        imageUrl: split,
        path: "/workout-creator/supersets"
    },
    {
        id: 'giantsets',
        title: 'Giant Sets',
        imageUrl: treatments,
        path: "/workout-creator/giantsets"
    },
    {
        id: 'homeworkout',
        title: 'Home Workout',
        imageUrl: split,
        path: "/workout-creator/homeworkout"
    }      
]