"use strict";

require("core-js/modules/es.string.repeat");

require("core-js/modules/es.string.bold");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logger = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var log = console.log;

var Logger = function Logger() {
  _classCallCheck(this, Logger);
};

exports.Logger = Logger;

_defineProperty(Logger, "spaced", function (lineBreakCount) {
  return log('\n'.repeat(lineBreakCount));
});

_defineProperty(Logger, "danger", function (msg) {
  return log(_chalk.default.bgRed.bold.whiteBright(msg));
});

_defineProperty(Logger, "Title", function (msg) {
  return log(_chalk.default.bgWhiteBright.bold.black(msg));
});

_defineProperty(Logger, "Success", function (msg) {
  return log(_chalk.default.bgGreenBright.bold.black(msg));
});