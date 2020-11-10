"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApiDetail = exports.ApiDetailManagerInstance = void 0;

var ApiDetailManager = function ApiDetailManager() {
  var _allDetails = [];

  this.add = function (ApiDetailObject) {
    _allDetails.push(ApiDetailObject);
  };

  this.getAllDetails = function () {
    return [].concat(_allDetails);
  };
};

var ApiDetailManagerInstance = new ApiDetailManager();
exports.ApiDetailManagerInstance = ApiDetailManagerInstance;

var ApiDetail = function ApiDetail() {
  var _path;

  var _controller;

  var _verb;

  var _description;

  var _body;

  this.withBody = function (body) {
    _body = body;
    return this;
  };

  this.withPath = function (path) {
    _path = path;
    return this;
  };

  this.withController = function (controller) {
    _controller = controller;
    return this;
  };

  this.withVerb = function (verb) {
    _verb = verb;
    return this;
  };

  this.withDescription = function (description) {
    _description = description;
    return this;
  };

  function getSettings() {
    var settings = {
      path: _path,
      controller: _controller,
      verb: _verb,
      description: _description,
      body: _body
    };

    for (var settingsItem in settings) {
      var key = settingsItem;
      var value = settings[settingsItem];
      var isValidValue = !!value;

      if (!isValidValue) {
        delete settings[key];
      }
    }

    return settings;
  }

  this.addSettings = function () {
    var newSetting = getSettings();
    ApiDetailManagerInstance.add(newSetting);
  };
};

exports.ApiDetail = ApiDetail;