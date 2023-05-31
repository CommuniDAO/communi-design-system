function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import * as React from 'react';
import clsx from 'clsx';
import { RadioGroup } from '@headlessui/react';
var hoursOptions = [{
  name: '00',
  value: 0
}, {
  name: '01',
  value: 3600
}, {
  name: '02',
  value: 7200
}, {
  name: '03',
  value: 10800
}, {
  name: '04',
  value: 14400
}, {
  name: '05',
  value: 18000
}, {
  name: '06',
  value: 21600
}, {
  name: '07',
  value: 25200
}, {
  name: '08',
  value: 28800
}, {
  name: '09',
  value: 32400
}, {
  name: '10',
  value: 36000
}, {
  name: '11',
  value: 39600
}];
var minutesOptions = [{
  name: '00',
  value: 0
}, {
  name: '15',
  value: 900
}, {
  name: '30',
  value: 1800
}, {
  name: '45',
  value: 2700
}];
export var TimePicker = function TimePicker(_ref) {
  var value = _ref.value,
    handleChange = _ref.handleChange;
  if (!!value) {
    var minutes = value % 3600 / 60;
    var hours = Math.floor(value / 3600);
    console.log("Time ".concat(('0' + hours).slice(-2), ":").concat(('0' + minutes).slice(-2)));
  }
  var _React$useState = React.useState(hoursOptions[0]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    hour = _React$useState2[0],
    setHour = _React$useState2[1];
  var _React$useState3 = React.useState(minutesOptions[0]),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    minute = _React$useState4[0],
    setMinute = _React$useState4[1];
  var updateData = function updateData(e, type) {
    if (type === 'hour') {
      setHour(e);
      var _value = e.value + minute.value === 0 ? String(0) : e.value + minute.value;
      handleChange({
        name: "".concat(e.name, " - ").concat(minute.name),
        value: _value
      });
    } else if (type === 'minute') {
      setMinute(e);
      var _value2 = e.value + hour.value === 0 ? String(0) : e.value + hour.value;
      handleChange({
        name: "".concat(hour.name, " - ").concat(e.name),
        value: _value2
      });
    }
  };
  var getStyles = function getStyles(_ref2) {
    var active = _ref2.active,
      checked = _ref2.checked,
      disabled = _ref2.disabled;
    return clsx(active ? 'ring-2 ring-offset-2 ring-secondary-400' : '', checked ? 'bg-secondary-400 border-transparent text-white hover:bg-secondary-300' : 'bg-neutral-50 border-neutral-200 text-neutral-900 hover:bg-neutral-50', 'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1');
  };
  // console.log('value', value)
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-neutral-800 text-p2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row space-x-[16px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-sm font-medium text-neutral-900"
  }, "Hours")), /*#__PURE__*/React.createElement(RadioGroup
  // value={hour}
  , {
    onChange: function onChange(e) {
      return updateData(e, 'hour');
    },
    value: hour
    // onChange={setHour}
    ,
    className: "mt-2"
  }, /*#__PURE__*/React.createElement(RadioGroup.Label, {
    className: "sr-only"
  }, "Choose a memory option"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-3 sm:grid-cols-3"
  }, hoursOptions.map(function (option) {
    return /*#__PURE__*/React.createElement(RadioGroup.Option, {
      key: option.name,
      value: option,
      className: function className(e) {
        return getStyles(e);
      }
    }, /*#__PURE__*/React.createElement(RadioGroup.Label, {
      as: "span"
    }, option.name));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "w-4/12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-sm font-medium text-neutral-900"
  }, "Minutes")), /*#__PURE__*/React.createElement(RadioGroup, {
    value: minute,
    onChange: function onChange(e) {
      return updateData(e, 'minute');
    },
    className: "mt-2"
  }, /*#__PURE__*/React.createElement(RadioGroup.Label, {
    className: "sr-only"
  }, "Choose a memory option"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-3 sm:grid-cols-1"
  }, minutesOptions.map(function (option) {
    return /*#__PURE__*/React.createElement(RadioGroup.Option, {
      key: option.name,
      value: option,
      className: function className(e) {
        return getStyles(e);
      }
    }, /*#__PURE__*/React.createElement(RadioGroup.Label, {
      as: "span"
    }, option.name));
  })))))));
};