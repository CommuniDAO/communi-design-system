import React from 'react';
import clsx from 'clsx';
export var Image = function Image(_ref) {
  var imageUrl = _ref.imageUrl,
    customCss = _ref.customCss,
    width = _ref.width,
    height = _ref.height,
    _ref$fullHeight = _ref.fullHeight,
    fullHeight = _ref$fullHeight === void 0 ? false : _ref$fullHeight;
  var style = clsx('bg-cover bg-center w-full h-full object-center object-cover', "".concat(customCss));
  return /*#__PURE__*/React.createElement("div", {
    className: "w-[200px] ".concat(fullHeight ? 'h-full' : 'h-[200px]')
  }, /*#__PURE__*/React.createElement("img", {
    style: {
      height: "".concat(height, "px"),
      width: "".concat(width, "px")
    },
    className: style,
    src: imageUrl,
    alt: ""
  }));
};