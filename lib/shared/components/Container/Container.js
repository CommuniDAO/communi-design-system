import React from 'react';
import clsx from 'clsx';
export var Container = function Container(_ref) {
  var children = _ref.children,
    _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? 'none' : _ref$padding,
    _ref$border = _ref.border,
    border = _ref$border === void 0 ? 'none' : _ref$border,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 'small' : _ref$height,
    _ref$overflow = _ref.overflow,
    overflow = _ref$overflow === void 0 ? false : _ref$overflow,
    customCss = _ref.customCss;
  var style = clsx(padding === 'small' && 'px-2', height === '1/3' && 'h-v76', border === 'bottom' && 'border-b', overflow && 'overflow-y-scroll', 'border-solid border-primary border-collapse', "".concat(customCss));
  return /*#__PURE__*/React.createElement("div", {
    className: style
  }, children);
};