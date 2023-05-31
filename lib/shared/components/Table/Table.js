import React from 'react';
import { Cell } from "../Cell";
export var Table = function Table(_ref) {
  var header = _ref.header,
    data = _ref.data,
    component = _ref.component,
    _ref$background = _ref.background,
    background = _ref$background === void 0 ? 'default' : _ref$background,
    customCss = _ref.customCss;
  return /*#__PURE__*/React.createElement(React.Fragment, null, data.length !== 0 ? /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col ".concat(customCss)
  }, /*#__PURE__*/React.createElement("div", {
    className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shadow overflow-hidden border-b border-neutral-200 sm:rounded-lg"
  }, /*#__PURE__*/React.createElement("table", {
    className: "min-w-full divide-y divide-neutral-200"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "".concat(background === 'default' ? 'bg-neutral-100' : 'bg-neutral-150')
  }, /*#__PURE__*/React.createElement("tr", null, header.map(function (item, key) {
    return /*#__PURE__*/React.createElement("th", {
      key: key,
      scope: "col",
      className: "px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
    }, item);
  }))), /*#__PURE__*/React.createElement("tbody", {
    className: "bg-white divide-y divide-neutral-200"
  }, data.map(function (row, key) {
    return /*#__PURE__*/React.createElement("tr", {
      key: key
    }, row.map(function (column, key) {
      return /*#__PURE__*/React.createElement("td", {
        className: "".concat(background === 'default' ? 'bg-neutral-100' : 'bg-neutral-150', " text-neutral-800 min-h-[64px] max-w-[500px]"),
        key: key
      }, /*#__PURE__*/React.createElement(Cell, {
        type: column.type,
        value: column.value,
        component: component
      }));
    }));
  }))))))) : '');
};