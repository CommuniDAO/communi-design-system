import React from 'react';
import clsx from 'clsx';
import { icons } from "../../../assets/icons";
var Path = function Path(_ref) {
  var name = _ref.name;
  return /*#__PURE__*/React.createElement("path", {
    d: icons["".concat(name)],
    className: "w-full",
    fill: "currentColor"
  });
};
export var Icon = function Icon(_ref2) {
  var name = _ref2.name,
    color = _ref2.color,
    _ref2$viewBox = _ref2.viewBox,
    viewBox = _ref2$viewBox === void 0 ? "0 0 ".concat("64", " ").concat("64") : _ref2$viewBox,
    _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? 'small' : _ref2$size,
    customCss = _ref2.customCss;
  var iconStyle = clsx(size === 'tiny' && 'w-[18px] h-[18px]', size === 'small' && 'w-[22px] h-[22px]', size === 'medium' && 'w-[30px] h-[30px]', size === 'large' && 'w-[36px] h-[36px]', size === 'xlarge' && 'w-[48px] h-[48px] flex justify-center', "".concat(customCss));
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: viewBox,
    className: iconStyle,
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement(Path, {
    name: name
  }));
};