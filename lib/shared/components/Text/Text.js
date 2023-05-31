import React from 'react';
export var Text = function Text(_ref) {
  var content = _ref.content,
    fontSize = _ref.fontSize;
  return /*#__PURE__*/React.createElement("div", {
    className: "text-p3-medium text-neutral-800 p-[8px]",
    style: {
      fontSize: "".concat(fontSize, "px")
    }
  }, content);
};