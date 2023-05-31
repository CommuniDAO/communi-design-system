function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Image, Badge } from "../..";
import { RadioGroup as RadioGroupComponent } from '@headlessui/react';
import { motion } from "framer-motion";
export var VerticalGroup = function VerticalGroup(_ref) {
  var handleSelection = _ref.handleSelection,
    selected = _ref.selected,
    options = _ref.options;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RadioGroupComponent, {
    value: selected,
    onChange: function onChange(e) {
      return handleSelection(e);
    }
  }, /*#__PURE__*/React.createElement(RadioGroupComponent.Label, {
    className: "sr-only"
  }, "Label"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row space-x-[20px]"
  }, options.map(function (option) {
    return /*#__PURE__*/React.createElement(RadioGroupComponent.Option, {
      key: option.name,
      value: option,
      disabled: option.disabled,
      className: function className(_ref2) {
        var active = _ref2.active,
          checked = _ref2.checked;
        return "".concat(active ? 'ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60' : '', "\n                ").concat(checked ? 'bg-neutral-100 text-neutral-800' : 'bg-neutral-50 text-neutral-800', "\n                  bg-primary-400 relative rounded-lg shadow-md   ").concat(option.disabled ? 'cursor-not-allowed' : 'cursor-pointer', " flex focus:outline-none w-[200px] overflow-hidden");
      }
    }, function (_ref3) {
      var active = _ref3.active,
        checked = _ref3.checked;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between w-full"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RadioGroupComponent.Label, {
        as: "p",
        className: "font-medium  ".concat(checked ? 'text-neutral-800' : 'text-neutral-900')
      }, /*#__PURE__*/React.createElement(motion.div, {
        className: "absolute",
        initial: {
          scale: 1
        },
        whileHover: {
          scale: option.disabled ? 1 : 1.2
        }
      }, /*#__PURE__*/React.createElement(Image, {
        fullHeight: true,
        imageUrl: option.image_url,
        customCss: "z-[1] ".concat(option.disabled && 'filter grayscale')
      })), /*#__PURE__*/React.createElement("div", {
        className: "relative h-[300px]"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col justify-end w-[200px]  px-[16px] py-[20px]"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex flex-row justify-between h-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: ""
      }, option.name), checked && /*#__PURE__*/React.createElement("div", {
        className: "flex-shrink-0 text-neutral-800 bg-gradient-to-tr from-primary-500 via-secondary-500 to-secondary-400 rounded-full"
      }, /*#__PURE__*/React.createElement(CheckIcon, {
        className: "w-6 h-6"
      })), !!option.badge && /*#__PURE__*/React.createElement(Badge, {
        title: option.badge
      }))))), /*#__PURE__*/React.createElement(RadioGroupComponent.Description, {
        as: "span",
        className: "inline ".concat(checked ? 'text-neutral-300' : 'text-neutral-600')
      })))));
    });
  }))));
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