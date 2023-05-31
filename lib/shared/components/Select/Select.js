function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import * as React from 'react';
import { Listbox, Transition } from '@headlessui/react';
// import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

export var Select = function Select(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'action' : _ref$type,
    id = _ref.id,
    defaultValue = _ref.defaultValue,
    debug = _ref.debug,
    options = _ref.options,
    afterUpdate = _ref.afterUpdate,
    mRef = _ref.mRef,
    _ref$multiple = _ref.multiple,
    multiple = _ref$multiple === void 0 ? false : _ref$multiple;
  var _React$useState = React.useState(defaultValue ? options.find(function (_ref2) {
      var value = _ref2.value;
      return String(value) === String(defaultValue);
    }) : options[0]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    selected = _React$useState2[0],
    setSelected = _React$useState2[1];
  React.useEffect(function () {
    var value = defaultValue ? options.find(function (_ref3) {
      var value = _ref3.value;
      return String(value) === String(defaultValue);
    }) : options[0];
    setSelected(value);
    if (!!afterUpdate) {
      afterUpdate(value);
    }
  }, [defaultValue]);
  var handleUpdate = function handleUpdate(event) {
    console.log('event', event);
    setSelected(event);
    if (!!afterUpdate) {
      afterUpdate(event);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Listbox, {
    value: selected,
    onChange: function onChange(e) {
      return handleUpdate(e);
    },
    multiple: multiple
  }, function (_ref4) {
    var open = _ref4.open;
    return /*#__PURE__*/React.createElement("div", {
      className: "relative mt-1"
    }, /*#__PURE__*/React.createElement(Listbox.Button, {
      className: "".concat(!!open ? 'bg-neutral-50' : 'bg-neutral-100 border-neutral-200', " relative w-full shadow-sm py-2 pl-3 pr-10 text-left text-neutral-800 rounded-md cursor-default open:bg-neutral-50 active:ring-1 active:ring-offset-1 active:ring-blue-500 sm:text-sm border")
    }, /*#__PURE__*/React.createElement("span", {
      className: "block truncate"
    }, selected === null || selected === void 0 ? void 0 : selected.name, " ", !selected && 'Select your option'), /*#__PURE__*/React.createElement("span", {
      className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
    })), /*#__PURE__*/React.createElement(Transition, {
      as: React.Fragment,
      show: open,
      enter: "transition duration-100 ease-out",
      enterFrom: "transform scale-95 opacity-0",
      enterTo: "transform scale-100 opacity-100",
      leave: "transition duration-75 ease-out",
      leaveFrom: "transform scale-100 opacity-100",
      leaveTo: "transform scale-95 opacity-0"
    }, /*#__PURE__*/React.createElement(Listbox.Options, {
      className: "absolute w-full py-1 mt-1 overflow-auto text-base bg-neutral-100 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50 py-[8px] border border-neutral-200"
    }, Array.isArray(options) && options.map(function (item) {
      return /*#__PURE__*/React.createElement(Listbox.Option, {
        key: item.value,
        className: function className(_ref5) {
          var active = _ref5.active;
          return "".concat(active ? 'text-neutral-600 font-bold bg-primary-300' : 'text-neutral-800', "\n                          cursor-default select-none relative py-2 pl-10 pr-4");
        },
        value: item
      }, function (_ref6) {
        var selected = _ref6.selected,
          active = _ref6.active;
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
          className: "".concat(selected ? 'font-medium' : 'font-normal', " block truncate")
        }, item.name), selected ? /*#__PURE__*/React.createElement("span", {
          className: "".concat(active && 'text-neutral-600', "\n                                absolute inset-y-0 left-0 flex items-center pl-3")
        }) : null);
      });
    }))));
  }));
};