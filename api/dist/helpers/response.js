"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, GET',
  'Content-Type': 'application/json'
};

var Response = function Response() {
  _classCallCheck(this, Response);

  _defineProperty(this, "Ok", function (res, data, message) {
    res.writeHead(200, headers);
    res.write(JSON.stringify({
      status: 200,
      message: message,
      content: data
    }));
    res.end();
  });

  _defineProperty(this, "Bad", function (res, message) {
    res.writeHead(400, headers);
    res.write(JSON.stringify({
      status: 400,
      message: message,
      content: ''
    }));
    res.end();
  });

  _defineProperty(this, "NoContent", function () {
    res.writeHead(204, headers);
    res.end();
  });
};

exports["default"] = Response;