"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _response = _interopRequireDefault(require("../helpers/response"));

var _sorter = _interopRequireDefault(require("../helpers/sorter"));

var _urlParser = _interopRequireDefault(require("../helpers/urlParser"));

var _index = _interopRequireDefault(require("../mockData/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Products = /*#__PURE__*/function () {
  function Products() {
    _classCallCheck(this, Products);

    this.data = _index["default"];
    this.response = new _response["default"]();
  }

  _createClass(Products, [{
    key: "getList",
    value: function getList(req, res) {
      var reqUrl = (0, _urlParser["default"])(req);
      var searchParams = reqUrl.searchParams;
      var responseData = this.data;
      var querySort = searchParams.get('sort');
      var queryFilters = searchParams.get('filter');
      var querySearch = searchParams.get('search');

      if (querySearch) {
        responseData = responseData.filter(function (data) {
          return data.title.toLowerCase().includes(querySearch.toLowerCase());
        });
      }

      if (queryFilters) {
        var filtersSplited = queryFilters.split(';');
        var filterObject = filtersSplited.reduce(function (acc, filter) {
          var _filter$split = filter.split(':'),
              _filter$split2 = _slicedToArray(_filter$split, 2),
              key = _filter$split2[0],
              value = _filter$split2[1];

          if (value) {
            acc[key] = value;
          }

          return acc;
        }, {});
        responseData = responseData.reduce(function (acc, data) {
          var filterKeys = Object.keys(filterObject);
          var isMatched = filterKeys.reduce(function (accFilter, fk) {
            if (_typeof(data[fk]) !== undefined && filterObject[fk].includes(data[fk])) {
              accFilter.push(true);
            } else {
              accFilter.push(false);
            }

            return accFilter;
          }, []);

          if (isMatched.length > 0 && !isMatched.includes(false)) {
            acc.push(data);
          }

          return acc;
        }, []);
      }

      if (querySort && _typeof(_sorter["default"][querySort]) !== undefined) {
        responseData = responseData.sort(_sorter["default"][querySort]);
      }

      this.response.Ok(res, responseData, 'Success');
    }
  }]);

  return Products;
}();

exports["default"] = Products;