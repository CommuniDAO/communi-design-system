function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
import React from 'react';
import { hexToRgb, calculateRatio, rgbToHsb, hsbToRgb, rgbToHex } from "./utils";
import { Button } from '..';
export var ColorChecker = function ColorChecker(_ref) {
  _objectDestructuringEmpty(_ref);
  var _React$useState = React.useState('ffffff'),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    colorOne = _React$useState2[0],
    setColorOne = _React$useState2[1];
  var _React$useState3 = React.useState('ffffff'),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    colorTwo = _React$useState4[0],
    setColorTwo = _React$useState4[1];
  var _React$useState5 = React.useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    ratio = _React$useState6[0],
    setRatio = _React$useState6[1];
  React.useEffect(function () {
    var c1 = hexToRgb(colorOne);
    var c2 = hexToRgb(colorTwo);
    var r = calculateRatio(c1, c2).toFixed(2);
    setRatio(r);
    // if (parseInt(r) > 1) {
    //   console.log('greater')
    // } else {
    //   if (!c2) return;
    //   console.log('not greater')
    //   const { r, g , b } = c2
    //   const { h, s , b: brightness} = rgbToHsb(r, g, b)
    //   const newB = brightness * 0.33
    //   const newC = hsbToRgb(h,s,newB)
    //   console.log(newC)
    //   const newR = calculateRatio(c1, newC).toFixed(2)
    //   console.log('iRatio', newR, parseFloat(newR), parseFloat(newR) > 7)
    //   if (parseFloat(newR) > 7) {
    //     console.log('is Greater')
    //     // const newH = rgbToHex(newC)
    //     const newH = rgbToHex(newC?.r, newC?.g, newC?.b)
    //     console.log('newH', parseInt(newH).toString())
    //     setColorTwo(parseInt(newH).toString())
    //     setRatio(newR)
    //   }
    // }
  }, [colorOne, colorTwo]);
  var fixContrast = function fixContrast() {
    var c1 = hexToRgb(colorOne);
    var c2 = hexToRgb(colorTwo);
    if (!c2) return;
    var r = c2.r,
      g = c2.g,
      b = c2.b;
    var _rgbToHsb = rgbToHsb(r, g, b),
      h = _rgbToHsb.h,
      s = _rgbToHsb.s,
      brightness = _rgbToHsb.b;
    var newB = brightness * 0.33;
    var newC = hsbToRgb(h, s, newB);
    var newR = calculateRatio(c1, newC).toFixed(2);
    if (parseFloat(newR) > 7) {
      var newH = rgbToHex(newC === null || newC === void 0 ? void 0 : newC.r, newC === null || newC === void 0 ? void 0 : newC.g, newC === null || newC === void 0 ? void 0 : newC.b);
      setColorTwo(parseInt(newH).toString());
      setRatio(newR);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "text-neutral-800"
  }, /*#__PURE__*/React.createElement("div", null, "Ratio: ", ratio), /*#__PURE__*/React.createElement("div", null, "Color 1: ", colorOne), /*#__PURE__*/React.createElement("div", null, "Color 2: ", colorTwo), /*#__PURE__*/React.createElement(Button, {
    text: "fix contrast",
    onClick: function onClick() {
      return fixContrast();
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-[200px] h-[200px]",
    style: {
      backgroundColor: "#".concat(colorOne)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#".concat(colorTwo)
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vero sequi similique ullam, accusamus architecto cumque delectus quae, quo odio, vel rerum repellat?")));
};