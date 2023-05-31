function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Button, Icon } from "../..";
import { Fragment } from 'react';
import { DateTime } from 'luxon';
export var PickerInput = function PickerInput(_ref) {
  var Component = _ref.component,
    config = _ref.config;
  var id = config.id,
    type = config.type,
    style = config.style,
    label = config.label,
    icon = config.icon,
    autoComplete = config.autoComplete,
    placeholder = config.placeholder,
    defaultValue = config.defaultValue,
    uploadFile = config.uploadFile,
    hidden = config.hidden,
    debug = config.debug,
    options = config.options,
    required = config.required,
    mRef = config.mRef;
  var _React$useState = React.useState(undefined),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    data = _React$useState2[0],
    setData = _React$useState2[1];

  // !!defaultValue ? (typeof defaultValue === 'number' ? new Date(defaultValue) : defaultValue) : new Date()
  // const [date, setDate] = React.useState<Date>(!!defaultValue ? (typeof defaultValue === 'number' ? new Date(defaultValue) : defaultValue) : new Date());

  var handleChange = function handleChange(data) {
    setData(data);
  };
  React.useEffect(function () {
    if (!!defaultValue) {
      if (type === 'datepicker') {
        // console.log('defaultValue', defaultValue.length)
        var date = DateTime.fromSeconds(defaultValue / 1000).startOf('day');
        var v = +new Date(date.toISO()) / 1000;
        return setData({
          name: "".concat(date.weekdayShort, " ").concat(date.day, " ").concat(date.monthLong),
          value: v.toString()
        });
      }
      // if (type === 'timepicker') return setData({name: startOfDay(defaultValue).toString(), value: formatISO(defaultValue, { representation: 'date' })});
    } else {
      if (type === 'datepicker') {
        var _date = DateTime.fromJSDate(new Date()).startOf('day');
        var _v = +new Date(_date.toISO()) / 1000;
        return setData({
          name: "".concat(_date.weekdayShort, " ").concat(_date.day, " ").concat(_date.monthLong),
          value: _v.toString()
        });
      }
    }
  }, [defaultValue]);

  // console.log("icon", icon)
  // +new Date(startOfDay(date).toString())
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: "block text-sm font-medium text-neutral-800"
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: data !== null && data !== void 0 && data.value ? data === null || data === void 0 ? void 0 : data.value : undefined,
    hidden: debug ? !debug : true,
    readOnly: true,
    autoComplete: "off",
    name: id,
    id: id,
    ref: mRef
  }), /*#__PURE__*/React.createElement(Popover, {
    className: "relative mt-1"
  }, function (_ref2) {
    var open = _ref2.open;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Popover.Button, {
      className: "\n                border border-neutral-200 relative w-full shadow-sm py-2 pl-3 pr-10 text-left text-neutral-800 bg-neutral-100 cursor-pointer sm:text-sm ".concat(!open ? 'rounded-[6px]' : 'rounded-[6px]')
    }, /*#__PURE__*/React.createElement("span", {
      className: "absolute inset-y-0 left-0 pl-2 flex items-center ".concat(!open ? 'text-neutral-800' : 'text-primary-400')
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon
    })), /*#__PURE__*/React.createElement("span", {
      className: "pl-7 pr-12"
    }, data === null || data === void 0 ? void 0 : data.name)), /*#__PURE__*/React.createElement(Transition, {
      as: Fragment,
      enter: "transition ease-out duration-300",
      enterFrom: "opacity-0 translate-y-4",
      enterTo: "opacity-100 translate-y-0",
      leave: "transition ease-in duration-150",
      leaveFrom: "opacity-100 translate-y-0",
      leaveTo: "opacity-0 translate-y-4"
    }, /*#__PURE__*/React.createElement(Popover.Panel, {
      className: "absolute z-50 w-full"
    }, /*#__PURE__*/React.createElement("div", {
      className: "overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute bg-neutral-100 mt-[8px] p-[16px] rounded-[12px] border  w-full"
    }, /*#__PURE__*/React.createElement(Component, {
      value: data === null || data === void 0 ? void 0 : data.value,
      handleChange: handleChange,
      defaultValue: defaultValue,
      close: close
    }), /*#__PURE__*/React.createElement(Popover.Button, {
      onClick: function onClick() {
        return close();
      },
      className: "w-full"
    }, /*#__PURE__*/React.createElement(Button, {
      text: "Close",
      size: "tiny",
      variant: "outline",
      as: "div",
      customCss: "w-full mt-4"
    })))))));
  })));
};