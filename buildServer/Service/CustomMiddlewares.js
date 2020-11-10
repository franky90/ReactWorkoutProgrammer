"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomMiddlewares = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CustomMiddlewares = /*#__PURE__*/function () {
  function CustomMiddlewares() {
    _classCallCheck(this, CustomMiddlewares);
  }

  _createClass(CustomMiddlewares, null, [{
    key: "CORS",
    value: function CORS() {
      return function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', '*');

        if (req.method === 'OPTIONS') {
          // is Preflight request
          res.header('Access-Control-Allow-Methods', "PUT, POST, DELETE, GET, PATCH");
          return res.status(200).json({});
        }

        next();
      };
    }
  }]);

  return CustomMiddlewares;
}();

exports.CustomMiddlewares = CustomMiddlewares;