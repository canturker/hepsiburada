"use strict";

var _http = _interopRequireDefault(require("http"));

var _products = _interopRequireDefault(require("./controller/products"));

var _response = _interopRequireDefault(require("./helpers/response"));

var _urlParser = _interopRequireDefault(require("./helpers/urlParser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = '8080';
var Products = new _products["default"]();
var Response = new _response["default"]();

_http["default"].createServer(function (req, res) {
  var method = req.method;
  var reqUrl = (0, _urlParser["default"])(req);

  switch (true) {
    case method === 'OPTIONS':
      Response.NoContent();
      break;

    case reqUrl.pathname === '/api/products' && method === 'GET':
      Products.getList(req, res);
      break;

    default:
      Response.Bad(res, 'Bad Request');
      break;
  }
}).listen(PORT);

console.log('\x1b[32m%s\x1b[0m', '------');
console.log('\x1b[32m%s\x1b[0m', "App Listening on localhost:".concat(PORT));
console.log('\x1b[32m%s\x1b[0m', '------');