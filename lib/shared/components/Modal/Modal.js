function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import clsx from 'clsx';
// import { XIcon, ArrowsExpandIcon } from '@heroicons/react/outline';

export var Modal = function Modal(_ref) {
  var children = _ref.children,
    initialState = _ref.initialState,
    _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? 'small' : _ref$padding,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'small' : _ref$size,
    _ref$align = _ref.align,
    align = _ref$align === void 0 ? 'center' : _ref$align,
    _ref$overlay = _ref.overlay,
    overlay = _ref$overlay === void 0 ? false : _ref$overlay,
    _ref$showBar = _ref.showBar,
    showBar = _ref$showBar === void 0 ? false : _ref$showBar,
    _ref$overflow = _ref.overflow,
    overflow = _ref$overflow === void 0 ? false : _ref$overflow,
    closeModal = _ref.closeModal,
    _ref$closable = _ref.closable,
    closable = _ref$closable === void 0 ? true : _ref$closable,
    theme = _ref.theme;
  var cancelButtonRef = React.useRef(null);
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    expanded = _React$useState2[0],
    setExpanded = _React$useState2[1];
  var modalStyle = clsx("".concat(theme, " inline-block"), size === 'small' && 'w-full max-w-md', size === 'medium' && 'w-full max-w-2xl', size === 'large' && 'w-full max-w-4xl', size === 'fit' && 'w-fit', align === 'right' && 'mr-[20px]', expanded && 'max-w-full h-screen', !expanded && 'rounded-[20px] p-[4px]', "text-left align-middle transition-all transform shadow-xl");
  var containerStyle = clsx(padding === 'small' && 'p-2', padding === 'medium' && 'p-4', padding === 'large' && 'p-[40px]');
  var barStyle = clsx(!expanded && 'rounded-tl-[16px] rounded-tr-[16px]', 'bg-neutral-100 w-full h-8 flex p-2');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Transition.Root, {
    show: initialState,
    as: Fragment
  }, /*#__PURE__*/React.createElement(Dialog, {
    as: "div",
    "auto-reopen": "true",
    className: "fixed inset-0 z-10 overflow-y-auto",
    initialFocus: cancelButtonRef,
    onClose: closable ? closeModal : function () {
      return closable;
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "block items-end justify-end min-h-screen ".concat(align === 'center' ? 'text-center' : 'text-right')
  }, /*#__PURE__*/React.createElement(Transition.Child, {
    as: Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
  })), /*#__PURE__*/React.createElement("span", {
    className: "inline-block h-screen align-middle",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(Transition.Child, {
    as: Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-40",
    enterTo: "opacity-100 translate-y-0",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0",
    leaveTo: "opacity-0 -translate-y-40"
  }, /*#__PURE__*/React.createElement(Dialog.Panel, {
    className: modalStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-background ".concat(!expanded ? 'rounded-[16px]' : 'h-full', " ").concat(!!overflow ? 'overflow-hidden' : '')
  }, showBar && /*#__PURE__*/React.createElement("div", {
    className: barStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-start"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "bg-red-400 text-red-400 rounded-full p-1 hover:text-red-100 hover:bg-red-500 focus:outline-none",
    onClick: closeModal
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Close")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ml-2 bg-green-400 text-green-400 rounded-full p-1 hover:text-green-100 hover:bg-green-500 focus:outline-none",
    onClick: function onClick() {
      return setExpanded(!expanded);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Close"))))), /*#__PURE__*/React.createElement("div", {
    className: containerStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: padding === 'none' ? '' : 'mt-4'
  }, children)))))))));
};