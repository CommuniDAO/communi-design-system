function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { Popover as TooltipComponent } from '@headlessui/react';
import React from 'react';
import { Button } from '..';
import { Float } from '@headlessui-float/react';
export var Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
    button = _ref.button;
  var icon = button.icon,
    size = button.size,
    name = button.name;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TooltipComponent, null, /*#__PURE__*/React.createElement(Float, {
    placement: "bottom-start",
    offset: 15,
    shift: 6,
    flip: 10,
    arrow: true,
    portal: true,
    enter: "transition duration-200 ease-out",
    enterFrom: "opacity-0 -translate-y-1",
    enterTo: "opacity-100 translate-y-0",
    leave: "transition duration-150 ease-in",
    leaveFrom: "opacity-100 translate-y-0",
    leaveTo: "opacity-0 -translate-y-1"
  }, /*#__PURE__*/React.createElement(TooltipComponent.Button, {
    className: "outline-none"
  }, /*#__PURE__*/React.createElement(Button, _extends({
    as: "div",
    size: size,
    text: name,
    icon: icon
  }, button))), /*#__PURE__*/React.createElement(TooltipComponent.Panel, {
    className: "w-[240px] h-[70px] bg-neutral-150 border border-neutral-150 rounded-[8px] shadow-lg focus:outline-none"
  }, /*#__PURE__*/React.createElement(Float.Arrow, {
    className: "absolute bg-neutral-100 w-5 h-5 rotate-45 border border-neutral-150"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative h-full bg-neutral-100 p-3 text-neutral-800 rounded-[7px]"
  }, children)))));
};