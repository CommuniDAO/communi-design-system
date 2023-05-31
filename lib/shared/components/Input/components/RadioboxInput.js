function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';
import { RadioboxBasic, RadioboxFull, RadioboxCard } from "./Radiobox";
export var RadioboxInput = function RadioboxInput(_ref) {
  var config = _ref.config;
  var id = config.id,
    label = config.label,
    variant = config.variant,
    autoComplete = config.autoComplete,
    placeholder = config.placeholder,
    defaultValue = config.defaultValue,
    options = config.options,
    parentValue = config.parentValue,
    afterChange = config.afterChange,
    debug = config.debug,
    required = config.required,
    type = config.type,
    mRef = config.mRef;
  var _React$useState = React.useState(undefined),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    selected = _React$useState2[0],
    setSelected = _React$useState2[1];
  var handleUpdate = function handleUpdate(event) {
    setSelected(event);
    if (!!afterChange) {
      afterChange(event);
    }
  };
  var getRadio = function getRadio(_ref2) {
    var variant = _ref2.variant,
      defaultValue = _ref2.defaultValue,
      options = _ref2.options,
      handleUpdate = _ref2.handleUpdate,
      selected = _ref2.selected;
    switch (variant) {
      case 'full':
        return /*#__PURE__*/React.createElement(RadioboxFull, {
          selected: selected,
          handleUpdate: handleUpdate,
          options: options
        });
      case 'card':
        return /*#__PURE__*/React.createElement(RadioboxCard, {
          selected: selected,
          handleUpdate: handleUpdate,
          options: options
        });
      default:
        return /*#__PURE__*/React.createElement(RadioboxBasic, {
          selected: selected,
          handleUpdate: handleUpdate,
          options: options
        });
    }
  };
  React.useEffect(function () {
    setSelected(!!defaultValue ? options.find(function (_ref3) {
      var id = _ref3.id;
      return id === defaultValue;
    }) : options[0]);
    if (!!afterChange) {
      afterChange(options[0]);
    }
  }, [parentValue]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-neutral-900"
  }, label), /*#__PURE__*/React.createElement("input", {
    hidden: debug ? !debug : true,
    value: selected === null || selected === void 0 ? void 0 : selected.value,
    readOnly: true,
    autoComplete: "off",
    name: id,
    id: id,
    ref: mRef
  }), /*#__PURE__*/React.createElement("fieldset", {
    className: "mt-4"
  }, getRadio({
    variant: variant,
    defaultValue: defaultValue,
    options: options,
    handleUpdate: handleUpdate,
    selected: selected
  })));
};
function CheckIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7 13l3 3 7-7",
    stroke: "#fff",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}