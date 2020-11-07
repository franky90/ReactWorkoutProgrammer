const express = require('express')

module.exports = class ControllerBase {
    constructor({resourceName}){
        this.Router = express.Router()
        this.resourceName = resourceName
    }
}