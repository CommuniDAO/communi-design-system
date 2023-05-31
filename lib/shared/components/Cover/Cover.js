import React from 'react';
import clsx from 'clsx';
export var Cover = function Cover(_ref) {
  var imageUrl = _ref.imageUrl,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'large' : _ref$variant,
    _ref$fade = _ref.fade,
    fade = _ref$fade === void 0 ? false : _ref$fade;
  var style = clsx(variant === 'medium' && 'h-[160px]', variant === 'large' && 'h-[260px] rounded-t-[20px]', "bg-cover bg-center w-full object-center object-cover");
  return /*#__PURE__*/React.createElement("div", {
    className: style,
    style: {
      backgroundImage: "linear-gradient(to top, rgba(28, 24, 30, 1), rgba(28, 24, 30, 0.2), rgba(249, 252, 255, 0.16)), url('".concat(imageUrl, "')"),
      backgroundSize: 'cover'
    }
  });
};