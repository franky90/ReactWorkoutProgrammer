"use strict";

require("core-js/modules/es.array.filter");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetaController = void 0;

var _express = _interopRequireDefault(require("express"));

var _ApiDetailManager = require("./../Service/ApiDetailManager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MetaController = _express.default.Router();

exports.MetaController = MetaController;
MetaController.get('/', function (req, res) {
  var allRouteData = _ApiDetailManager.ApiDetailManagerInstance.getAllDetails();

  if (req && req.query && req.query.controllerName) {
    var controllerName = req.query.controllerName;
    var routeDataForControllerWithName = allRouteData.filter(function (x) {
      return x.controller === controllerName;
    });

    if (Array.isArray(routeDataForControllerWithName) && routeDataForControllerWithName.length > 0) {
      res.send(routeDataForControllerWithName);
      return;
    }
  }

  res.send(allRouteData);
});
MetaController.get('/byControllerName', function (req, res) {
  var allRouteData = _ApiDetailManager.ApiDetailManagerInstance.getAllDetails();

  var dynamicObject = {};

  for (var i = 0; i < allRouteData.length; i++) {
    var routeData = allRouteData[i];
    var controllerName = routeData.controller;

    if (dynamicObject[controllerName]) {
      dynamicObject[controllerName].push(routeData);
    } else {
      dynamicObject[controllerName] = [routeData];
    }
  }

  res.send(dynamicObject);
});