import React from 'react';
import { Button } from "../shared/components/Button";
export var AdminHeader = function AdminHeader(_ref) {
  var menu = _ref.menu,
    Component = _ref.component;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between bg-neutral-400 border-neutral-500 border-[4px] rounded-[8px] h-[80px] px-[20px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-start"
  }, menu.map(function (item) {
    return /*#__PURE__*/React.createElement(Button, {
      text: item.text,
      variant: "basic",
      icon: item.icon,
      to: item.to,
      component: Component
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "Clockwork",
    customCss: "rounded-[100px]",
    size: "small",
    to: "/admin/settings"
  })));
};