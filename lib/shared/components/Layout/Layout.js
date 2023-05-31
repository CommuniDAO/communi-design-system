import React from 'react';
import clsx from 'clsx';
export var Layout = function Layout(_ref) {
  var children = _ref.children,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'small' : _ref$variant,
    _ref$customCss = _ref.customCss,
    customCss = _ref$customCss === void 0 ? '' : _ref$customCss;
  var style = clsx(variant === 'tiny' && 'sm:max-w-sm', variant === 'small' && 'sm:max-w-screen-sm', variant === 'large' && 'sm:max-w-screen-lg', variant === 'full' && 'sm:max-w-screen-2xl', "max-w-screen-sm w-full mx-auto ".concat(customCss));
  return /*#__PURE__*/React.createElement("div", {
    className: style
  }, children);
};