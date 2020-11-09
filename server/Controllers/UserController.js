const express = require('express')
const { ApiDetail, ApiDetailManagerInstance } = require('./../Service/ApiDetailManager')

const UserController = express.Router()

const UserRootSettings = new ApiDetail().withController('/User').withPath('/User').withVerb('GET').getSettings()
ApiDetailManagerInstance.add(UserRootSettings)
UserController.get('/', (req, res) => {
    res.send({
        isSuccess: true,
        msg: "Hello from User Controller"
    })
})


module.exports = UserController