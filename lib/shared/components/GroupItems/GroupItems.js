import React from 'react';
import { Icon } from "../Icon";
export var GroupItems = function GroupItems(_ref) {
  var items = _ref.items;
  return /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-4 content-start p-[8px]"
  }, items === null || items === void 0 ? void 0 : items.map(function (item, key) {
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      className: "flex space-x-[4px] text-neutral-800"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
      name: item[0]
    })), /*#__PURE__*/React.createElement("div", {
      className: "text-p3-bold text-neutral-900"
    }, item[1]));
  }));
};