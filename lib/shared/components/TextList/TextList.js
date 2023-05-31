import React from 'react';
export var TextList = function TextList(_ref) {
  var items = _ref.items;
  return /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-4 content-start"
  }, items === null || items === void 0 ? void 0 : items.map(function (item, key) {
    return /*#__PURE__*/React.createElement("div", {
      key: key
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[14px] text-neutral-800 font-bold"
    }, item[0]), /*#__PURE__*/React.createElement("div", {
      className: "text-[16.2px] text-neutral-900"
    }, item[1]));
  }));
};