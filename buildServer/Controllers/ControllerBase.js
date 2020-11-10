"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControllerBase = void 0;

var _express = _interopRequireDefault(require("express"));

var _ApiDetailManager = require("./../Service/ApiDetailManager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ControllerBase = /*#__PURE__*/function () {
  function ControllerBase(controllerPrefix) {
    _classCallCheck(this, ControllerBase);

    this.routerPath = controllerPrefix;
    this.Router = _express.default.Router();
  }

  _createClass(ControllerBase, [{
    key: "descriptor",
    value: function descriptor(_ref) {
      var path = _ref.path,
          verb = _ref.verb,
          description = _ref.description,
          body = _ref.body;
      new _ApiDetailManager.ApiDetail().withController(this.routerPath).withPath(path).withVerb(verb).withDescription(description).withBody(body).addSettings();
    }
  }, {
    key: "toRoute",
    value: function toRoute() {
      return "/" + this.routerPath;
    }
  }]);

  return ControllerBase;
}();

exports.ControllerBase = ControllerBase;