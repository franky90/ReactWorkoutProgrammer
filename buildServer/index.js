"use strict";

require("core-js/modules/es.array.concat");

var _http = _interopRequireDefault(require("http"));

var _express = _interopRequireDefault(require("express"));

var _Logger = require("./Service/Logger");

var _cors = _interopRequireDefault(require("cors"));

var _UserController = _interopRequireDefault(require("./Controllers/UserController"));

var _WorkoutController = _interopRequireDefault(require("./Controllers/WorkoutController"));

var _ControllerDetails = require("./Controllers/ControllerDetails");

var _CustomMiddlewares = require("./Service/CustomMiddlewares");

var _morgan = _interopRequireDefault(require("morgan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 5000;
var ExpressApp = (0, _express.default)();
ExpressApp.use(_express.default.json());
ExpressApp.use(_express.default.urlencoded()); //Parse URL-encoded bodies

ExpressApp.use((0, _morgan.default)('tiny')); // this will prevent CORS issues in the future! - Currently Applies to all Requests

ExpressApp.use(_CustomMiddlewares.CustomMiddlewares.CORS()); // Setting up my controllers here...

ExpressApp.use(_UserController.default.toRoute(), _UserController.default.Router);
ExpressApp.use(_WorkoutController.default.toRoute(), _WorkoutController.default.Router);
ExpressApp.use("/Meta", _ControllerDetails.MetaController);
ExpressApp.use((0, _cors.default)());

var ApplicationServer = _http.default.createServer(ExpressApp);
/*
ExpressApp.listen(port, () => {
  Logger.Success(`Application is running at http://localhost:${port}`)
  Logger.danger(`Visit http://localhost:${port}/Meta to view information about all Routes`)//controllerName
  Logger.danger(`Visit http://localhost:${port}/Meta?controllerName=User to view information about all Routes belonging to User`)
  Logger.danger(`Visit http://localhost:${port}/Meta/byControllerName to see Apis grouped by resource`)
})
*/


ApplicationServer.listen(port);
ApplicationServer.on('listening', function () {
  _Logger.Logger.Success("Express server started on port ".concat(ApplicationServer.address().port, " at ").concat(ApplicationServer.address().address));

  _Logger.Logger.Success("Application is running at http://localhost:".concat(port));

  _Logger.Logger.danger("Visit http://localhost:".concat(port, "/Meta to view information about all Routes"));

  _Logger.Logger.danger("Visit http://localhost:".concat(port, "/Meta?controllerName=User to view information about all Routes belonging to User"));

  _Logger.Logger.danger("Visit http://localhost:".concat(port, "/Meta/byControllerName to see Apis grouped by resource"));
});