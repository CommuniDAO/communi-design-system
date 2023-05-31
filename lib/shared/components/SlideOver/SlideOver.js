function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
// import { XIcon } from '@heroicons/react/outline';

export var SlideOver = function SlideOver(_ref) {
  _objectDestructuringEmpty(_ref);
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  return /*#__PURE__*/React.createElement(Transition.Root, {
    show: open,
    as: Fragment
  }, /*#__PURE__*/React.createElement(Dialog, {
    as: "div",
    className: "fixed inset-0 overflow-hidden",
    onClose: setOpen
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 overflow-hidden"
  }, /*#__PURE__*/React.createElement(Transition.Child, {
    as: Fragment,
    enter: "ease-in-out duration-500",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in-out duration-500",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /*#__PURE__*/React.createElement(Dialog.Overlay, {
    className: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-y-0 right-0 pl-10 max-w-full flex"
  }, /*#__PURE__*/React.createElement(Transition.Child, {
    as: Fragment,
    enter: "transform transition ease-in-out duration-500 sm:duration-700",
    enterFrom: "translate-x-full",
    enterTo: "translate-x-0",
    leave: "transform transition ease-in-out duration-500 sm:duration-700",
    leaveFrom: "translate-x-0",
    leaveTo: "translate-x-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-screen max-w-md"
  }, /*#__PURE__*/React.createElement(Transition.Child, {
    as: Fragment,
    enter: "ease-in-out duration-500",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in-out duration-500",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white",
    onClick: function onClick() {
      return setOpen(false);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Close panel")))), /*#__PURE__*/React.createElement("div", {
    className: "h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-4 sm:px-6"
  }, /*#__PURE__*/React.createElement(Dialog.Title, {
    className: "text-lg font-medium text-gray-900"
  }, "Panel title")), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 relative flex-1 px-4 sm:px-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 px-4 sm:px-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full border-2 border-dashed border-gray-200",
    "aria-hidden": "true"
  }))))))))));
};