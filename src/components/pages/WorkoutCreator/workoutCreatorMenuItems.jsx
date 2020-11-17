import treatments from "../../../images/treatments.jpg"
import split from "../../../images/split-background.jpg"
import fullBody from "../../../images/fullBody.jpg"

export const workoutCreatorMenuItems = [
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
    }   
]