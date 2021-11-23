"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var priceAsc = function priceAsc(a, b) {
  return a.price - b.price;
};

var priceDesc = function priceDesc(a, b) {
  return b.price - a.price;
};

var titleAsc = function titleAsc(a, b) {
  return a.title.localeCompare(b.title);
};

var titleDesc = function titleDesc(a, b) {
  return b.title.localeCompare(a.title);
};

var Sorter = {
  priceAsc: priceAsc,
  priceDesc: priceDesc,
  titleAsc: titleAsc,
  titleDesc: titleDesc
};
var _default = Sorter;
exports["default"] = _default;