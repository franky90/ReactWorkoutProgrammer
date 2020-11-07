/**
 * All Controllers will Extends ControllerBase!
 * Controller base has 
 *      + Router
 *      + resourceName
 */
const UserRouteClass = require('./UserController')
const _UserRouteInstance = new UserRouteClass({resourceName: 'User'})

const WorkoutRoute = require('./WorkoutController')
const _WorkoutRouteInstance = new WorkoutRoute({resourceName: 'Workout'})

/**
 * Export all ControllerBase Objects
 */
module.exports = [
    _UserRouteInstance,
    _WorkoutRouteInstance
]