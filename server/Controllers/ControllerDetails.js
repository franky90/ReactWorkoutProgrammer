import Express from 'express'
import { ApiDetailManagerInstance } from './../Service/ApiDetailManager'

export const MetaController = Express.Router()
MetaController.get('/', (req, res) => {
    const allRouteData = ApiDetailManagerInstance.getAllDetails()
    if(req && req.query && req.query.controllerName) {
        const controllerName = req.query.controllerName
        const routeDataForControllerWithName = allRouteData.filter(x => x.controller === controllerName)
        if(Array.isArray(routeDataForControllerWithName) && routeDataForControllerWithName.length > 0) {
            res.send(routeDataForControllerWithName)
            return
        }
    }
    res.send(allRouteData)
})

MetaController.get('/byControllerName', (req, res) => {
    const allRouteData = ApiDetailManagerInstance.getAllDetails()
    let dynamicObject = {}
    for(let i = 0; i < allRouteData.length; i++) {
        let routeData = allRouteData[i]
        let controllerName = routeData.controller
        if(dynamicObject[controllerName]) {
            dynamicObject[controllerName].push(routeData)
        } else {
            dynamicObject[controllerName] = [routeData]
        }
    }
    res.send(dynamicObject)
})