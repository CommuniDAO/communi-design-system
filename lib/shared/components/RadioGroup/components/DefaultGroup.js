function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Icon } from "../..";
import { RadioGroup as RadioGroupComponent } from '@headlessui/react';
export var DefaultGroup = function DefaultGroup(_ref) {
  var handleSelection = _ref.handleSelection,
    selected = _ref.selected,
    options = _ref.options;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-full py-[16px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-md mx-auto"
  }, /*#__PURE__*/React.createElement(RadioGroupComponent, {
    value: selected,
    onChange: function onChange(e) {
      return handleSelection(e);
    }
  }, /*#__PURE__*/React.createElement(RadioGroupComponent.Label, {
    className: "sr-only"
  }, "Label"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-[12px]"
  }, options.map(function (option) {
    return /*#__PURE__*/React.createElement(RadioGroupComponent.Option, {
      key: option.name,
      value: option,
      disabled: option.disabled,
      className: function className(_ref2) {
        var active = _ref2.active,
          checked = _ref2.checked;
        return "".concat(active ? 'ring-[2px] ring-tertiary-500' : "\n                    hover:border-[1px] hover:border-tertiary-200\n                    hover:ring-[2px] hover:ring-tertiary-500 hover:ring-offset-neutral-50\n                    focus:border-[2px] focus:border-tertiary-200\n                    focus:ring-[2px] focus:ring-primary-500 focus:ring-offset-neutral-50\n                    ", "\n                ").concat(checked ? 'bg-neutral-100 border-tertiary-400' : 'bg-neutral-50 text-neutral-800', "\n                  relative rounded-[16px] shadow-md px-5 py-4 cursor-pointer flex outline-none\n                  border-[1px]\n                  ");
      }
    }, function (_ref3) {
      var active = _ref3.active,
        checked = _ref3.checked;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between w-full"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-sm"
      }, /*#__PURE__*/React.createElement(RadioGroupComponent.Label, {
        as: "div"
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(active ? 'text-tertiary-500' : checked ? 'text-tertiary-400' : 'text-neutral-600')
      }, /*#__PURE__*/React.createElement(Icon, {
        name: option.icon
      })), /*#__PURE__*/React.createElement("div", {
        className: "".concat(active ? 'text-tertiary-500' : checked ? 'text-tertiary-400' : 'text-neutral-600')
      }, option.name)), /*#__PURE__*/React.createElement(RadioGroupComponent.Description, {
        as: "span",
        className: "inline ".concat(checked ? 'text-tertiary-500' : 'text-neutral-600')
      }))), checked && /*#__PURE__*/React.createElement("div", {
        className: "flex-shrink-0 text-neutral-800 bg-gradient-to-tr from-primary-500 via-secondary-500 to-tertiary-500 rounded-full"
      }, /*#__PURE__*/React.createElement(CheckIcon, {
        className: "w-6 h-6"
      }))));
    });
  }))))));
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