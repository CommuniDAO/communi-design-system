function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { Popover as PopoverComponent, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { Button } from '..';
export var Popover = function Popover(_ref) {
  var children = _ref.children,
    button = _ref.button;
  var icon = button.icon,
    size = button.size,
    name = button.name;
  return /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement(PopoverComponent, {
    className: "relative"
  }, function (_ref2) {
    var open = _ref2.open;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, _extends({
      type: "popover",
      size: size,
      text: name
    }, button, {
      icon: icon
    }))), /*#__PURE__*/React.createElement(Transition, {
      as: Fragment,
      enter: "transition ease-out duration-200",
      enterFrom: "opacity-0 translate-y-1",
      enterTo: "opacity-100 translate-y-0",
      leave: "transition ease-in duration-150",
      leaveFrom: "opacity-100 translate-y-0",
      leaveTo: "opacity-0 translate-y-1"
    }, /*#__PURE__*/React.createElement(PopoverComponent.Panel, {
      className: "absolute right-0 w-[300px] mt-2 origin-top-right border border-neutral-200 rounded-[10px] z-50"
    }, /*#__PURE__*/React.createElement("div", {
      className: "overflow-hidden rounded-[10px] shadow-lg"
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative bg-neutral-50"
    }, children)))));
  }));
};