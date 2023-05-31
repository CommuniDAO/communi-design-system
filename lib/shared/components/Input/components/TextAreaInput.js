function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';
export var TextAreaInput = function TextAreaInput(_ref) {
  var config = _ref.config;
  var id = config.id,
    label = config.label,
    autoComplete = config.autoComplete,
    placeholder = config.placeholder,
    defaultValue = config.defaultValue,
    _config$maxLength = config.maxLength,
    maxLength = _config$maxLength === void 0 ? 500 : _config$maxLength,
    required = config.required;
  var _React$useState = React.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    count = _React$useState2[0],
    setCount = _React$useState2[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: "block text-sm font-medium text-neutral-800"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "mt-1"
  }, /*#__PURE__*/React.createElement("textarea", {
    id: id,
    name: id,
    rows: 3,
    autoComplete: autoComplete,
    maxLength: maxLength,
    onChange: function onChange(e) {
      return setCount(e.target.value.length);
    },
    className: "resize-none shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full text-neutral-800 sm:text-sm border border-neutral-200 bg-neutral-100 rounded-md",
    placeholder: placeholder,
    defaultValue: defaultValue,
    required: required
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-primary-500"
  }, count, "/", maxLength)));
};