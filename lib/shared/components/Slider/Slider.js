function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';
export var Slider = function Slider(_ref) {
  var cards = _ref.cards,
    _ref$debug = _ref.debug,
    debug = _ref$debug === void 0 ? false : _ref$debug;
  var containerRef = React.useRef(null);
  var _React$useState = React.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    x = _React$useState2[0],
    setX = _React$useState2[1];
  var _React$useState3 = React.useState(0),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    scrollWidth = _React$useState4[0],
    setScrollWidth = _React$useState4[1];
  var _React$useState5 = React.useState(0),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    offsetWidth = _React$useState6[0],
    setOffsetWidth = _React$useState6[1];
  React.useEffect(function () {
    var _containerRef$current, _containerRef$current2;
    if (!containerRef.current) return;
    setScrollWidth((_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.scrollWidth);
    setOffsetWidth((_containerRef$current2 = containerRef.current) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.offsetWidth);
  }, []);
  var updatePosition = function updatePosition() {
    var _containerRef$current3;
    if (!containerRef.current) return;
    setX((_containerRef$current3 = containerRef.current) === null || _containerRef$current3 === void 0 ? void 0 : _containerRef$current3.scrollLeft);
  };
  var backward = function backward() {
    var _containerRef$current4;
    if (!containerRef.current) return;
    (_containerRef$current4 = containerRef.current) === null || _containerRef$current4 === void 0 ? void 0 : _containerRef$current4.scroll({
      left: -offsetWidth + (scrollWidth - offsetWidth),
      behavior: 'smooth'
    });
    setX(scrollWidth - offsetWidth);
  };
  var forward = function forward() {
    var _containerRef$current5;
    if (!containerRef.current) return;
    (_containerRef$current5 = containerRef.current) === null || _containerRef$current5 === void 0 ? void 0 : _containerRef$current5.scroll({
      left: offsetWidth + 200,
      behavior: 'smooth'
    });
    setX(scrollWidth - offsetWidth);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    className: "overflow-y-hidden scroll-pl-6 scroll-smooth flex w-full gap-4 snap-x snap-mandatory overflow-x-auto scrollbar-none pl-4",
    onScroll: function onScroll(e) {
      return updatePosition();
    }
  }, cards.map(function (card, key) {
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      className: "relative flex-card snap-start snap-always"
    }, card);
  })), 0 < x && /*#__PURE__*/React.createElement("button", {
    className: "absolute w-[40px] h-full top-0 left-0 bg-gray-800 bg-opacity-50 border border-neutral-500",
    onClick: function onClick(e) {
      return backward();
    }
  }), x + offsetWidth !== scrollWidth && /*#__PURE__*/React.createElement("button", {
    className: "absolute w-[40px] h-full top-0 right-0 bg-gray-800 bg-opacity-50 border border-neutral-500",
    onClick: function onClick(e) {
      return forward();
    }
  })), debug && /*#__PURE__*/React.createElement("div", {
    className: "text-neutral-800"
  }, x, " - ", scrollWidth, " - ", offsetWidth));
};