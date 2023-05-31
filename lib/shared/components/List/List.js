import React from 'react';
import { Cell } from "../Cell";
export var List = function List(_ref) {
  var data = _ref.data,
    component = _ref.component,
    _ref$background = _ref.background,
    background = _ref$background === void 0 ? 'default' : _ref$background;
  return /*#__PURE__*/React.createElement("div", {
    className: "text-p2-medium text-neutral-800 shadow sm:rounded-[20px] ".concat(background === 'default' ? 'bg-neutral-100' : 'bg-neutral-150', " overflow-hidden")
  }, /*#__PURE__*/React.createElement("ul", {
    role: "list",
    className: "divide-y divide-neutral-50"
  }, data.map(function (row, key) {
    return /*#__PURE__*/React.createElement("li", {
      key: key,
      className: ""
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between last:pr-[16px]"
    }, row.map(function (item, key) {
      return /*#__PURE__*/React.createElement("div", {
        key: key,
        className: ""
      }, /*#__PURE__*/React.createElement(Cell, {
        value: item.value,
        type: item.type,
        component: component
      }));
    })));
  })));
};