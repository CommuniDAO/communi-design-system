import React from 'react';
export var ColorPallet = function ColorPallet(_ref) {
  var colors = _ref.colors,
    theme = _ref.theme;
  return /*#__PURE__*/React.createElement("div", {
    className: theme === 'light' ? 'theme-light' : 'theme-midnight'
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, colors.map(function (_ref2) {
    var name = _ref2.name,
      style = _ref2.style;
    return /*#__PURE__*/React.createElement("div", {
      className: "flex flex-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-24"
    }, name), /*#__PURE__*/React.createElement("div", {
      className: "".concat(style, " w-full h-8")
    }));
  })));
};