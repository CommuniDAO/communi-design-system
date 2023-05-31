function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import React from 'react';
// import clsx from 'clsx';
import { Avatar } from "../Avatar";
export var Person = function Person(_ref) {
  var Component = _ref.component,
    imageUrl = _ref.imageUrl,
    fullname = _ref.fullname,
    details = _ref.details,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    to = _ref.to,
    customCss = _ref.customCss;
  var variantAssert = function variantAssert() {
    switch (variant) {
      case 'landscape':
        return /*#__PURE__*/React.createElement("div", {
          className: "flex flex-col space-y-[8px] m-[8px] w-fit"
        }, /*#__PURE__*/React.createElement("div", {
          className: "mx-auto"
        }, /*#__PURE__*/React.createElement(Avatar, {
          imageUrl: imageUrl,
          size: "tiny"
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
          className: "text-p3-bold text-neutral-800"
        }, fullname)));
      case 'lab':
        return /*#__PURE__*/React.createElement("div", {
          className: "flex space-x-[16px] m-[8px] w-fit"
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Avatar, {
          imageUrl: imageUrl,
          size: "medium"
        })), /*#__PURE__*/React.createElement("div", {
          className: "flex flex-col-reverse"
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          className: "text-p2-bold text-neutral-800"
        }, fullname), /*#__PURE__*/React.createElement("div", {
          className: "text-caption-bold text-primary-500"
        }, details))));
      case 'profile':
        return /*#__PURE__*/React.createElement("div", {
          className: "flex space-x-[16px] m-[8px] h-fit w-fit"
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Avatar, {
          imageUrl: imageUrl,
          size: "medium"
        })), /*#__PURE__*/React.createElement("div", {
          className: "grid content-center"
        }, /*#__PURE__*/React.createElement("div", {
          className: "text-p2-bold text-neutral-800"
        }, fullname), /*#__PURE__*/React.createElement("div", {
          className: "text-caption-bold text-primary-500"
        }, details)));
      case 'card':
        return /*#__PURE__*/React.createElement("div", {
          className: "flex space-x-[8px] w-fit"
        }, /*#__PURE__*/React.createElement(Avatar, {
          imageUrl: imageUrl,
          size: "xtiny"
        }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          className: "mt-[2px] text-p3-bold text-neutral-800 align-middle"
        }, fullname)));
      default:
        return /*#__PURE__*/React.createElement("div", {
          className: "flex space-x-4 w-fit"
        }, /*#__PURE__*/React.createElement(Avatar, {
          imageUrl: imageUrl,
          size: "tiny"
        }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          className: "mt-[5px] text-p3-bold text-neutral-800 align-middle"
        }, fullname)));
    }
  };
  switch (_typeof(to)) {
    case 'string':
      if (!!Component) return /*#__PURE__*/React.createElement(Component, {
        to: "/".concat(to)
      }, variantAssert());
    default:
      return variantAssert();
  }
};