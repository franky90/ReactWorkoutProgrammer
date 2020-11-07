const express = require('express')
// const ControllerBase = require('./ControllerBase')
const UserController = express.Router()

UserController.get('/', (req, res) => {
    res.send({
        isSuccess: true,
        msg: "Hello from User Controller"
    })
})


module.exports = UserController