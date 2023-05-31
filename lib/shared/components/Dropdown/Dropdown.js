function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { Menu, Transition } from '@headlessui/react';
import { Button } from '..';
import React, { Fragment } from 'react';
export var Dropdown = function Dropdown(_ref) {
  var Component = _ref.component,
    children = _ref.children,
    button = _ref.button,
    items = _ref.items;
  var icon = button.icon,
    size = button.size;
  // Add Color to Icon
  // const iconName = icon ? { name: icon, size } : undefined;
  return /*#__PURE__*/React.createElement(Menu, {
    as: "div",
    className: "relative inline-block text-left"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, _extends({
    type: "menu",
    size: size
  }, button, {
    icon: icon
  }))), /*#__PURE__*/React.createElement(Transition, {
    as: Fragment,
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95"
  }, /*#__PURE__*/React.createElement(Menu.Items, {
    className: "absolute right-0 w-56 mt-2 origin-top-right border border-neutral-400 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative p-[8px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 bottom-0 right-0 left-0 rounded-md backdrop-blur-md bg-gradient-to-br from-neutral-50 to-background opacity-[0.98] z-[-1]"
  }), /*#__PURE__*/React.createElement("div", null, items.map(function (_ref2, key) {
    var text = _ref2.text,
      type = _ref2.type,
      to = _ref2.to,
      action = _ref2.action,
      icon = _ref2.icon;
    return /*#__PURE__*/React.createElement("div", {
      key: key
    }, /*#__PURE__*/React.createElement(Menu.Item, {
      as: "div"
    }, function (_ref3) {
      var active = _ref3.active;
      return /*#__PURE__*/React.createElement(React.Fragment, null, type === 'button' && /*#__PURE__*/React.createElement(Button, {
        text: text,
        type: type,
        variant: "dropdown",
        active: active,
        icon: icon,
        onClick: action
      }), type === 'action' && /*#__PURE__*/React.createElement(Button, {
        text: text,
        type: type,
        to: to,
        variant: "dropdown",
        active: active,
        icon: icon
      }), type === 'link' && !!Component && /*#__PURE__*/React.createElement(Button, {
        text: text,
        type: "link",
        variant: "dropdown",
        icon: icon,
        to: to,
        active: active,
        component: Component
      }));
    }));
  }))))));
};