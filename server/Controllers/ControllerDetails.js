const express = require('express')
const { ApiDetailManagerInstance } = require('./../Service/ApiDetailManager')

const MetaController = express.Router()
MetaController.get('/', (req, res) => {
    res.send(ApiDetailManagerInstance.getAllDetails())
})


module.exports = MetaController