const express = require('express')
// const ControllerBase = require('./ControllerBase')
const WorkoutController = express.Router()

WorkoutController.get('/', (req, res) => {
    res.send({
        isSuccess: true,
        msg: "Hello from User Controller"
    })
})


module.exports = WorkoutController