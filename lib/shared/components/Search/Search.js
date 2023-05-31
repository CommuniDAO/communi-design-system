import React from 'react';
import clsx from 'clsx';
export var Search = function Search(_ref) {
  var imageUrl = _ref.imageUrl;
  var style = clsx('w-16 h-16 bg-cover bg-center rounded-full');
  return /*#__PURE__*/React.createElement("div", {
    className: style,
    style: {
      backgroundImage: "url(".concat(imageUrl, ")")
    }
  });
};