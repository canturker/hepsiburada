"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var UrlParser = function UrlParser(req) {
  var baseURL = 'http://' + req.headers.host + '/';
  var reqUrl = new URL(req.url, baseURL);
  return reqUrl;
};

var _default = UrlParser;
exports["default"] = _default;