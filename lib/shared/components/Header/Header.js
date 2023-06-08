import React from 'react';
import { Button } from "../Button";
export var Header = function Header(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'SECTION' : _ref$type,
    section = _ref.section,
    page = _ref.page;
  return /*#__PURE__*/React.createElement("div", {
    className: "sm:flex sm:items-center sm:justify-between h-v8 text-neutral-800"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-4xl font-bold leading-6 text-primary"
  }, section === null || section === void 0 ? void 0 : section.title), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex sm:mt-0 sm:ml-4"
  }, (section === null || section === void 0 ? void 0 : section.navOptions) && section.navOptions.map(function (_ref2, key) {
    var title = _ref2.title,
      action = _ref2.action,
      icon = _ref2.icon;
    return /*#__PURE__*/React.createElement(Button, {
      key: key,
      text: title,
      icon: icon,
      size: "small",
      onClick: action
    });
  })));
};