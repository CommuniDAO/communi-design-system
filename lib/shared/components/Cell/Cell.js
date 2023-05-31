function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
// Cells are List and Table child components for displaying data.

import React from 'react';
import { Button, Dropdown, Person } from '..';
// type DropdownItemsI = {
//   title: string;
//   type: 'button' | 'link';
//   action?: () => void;
//   to?: string;
// }[];
export var Cell = function Cell(_ref) {
  var type = _ref.type,
    value = _ref.value,
    Component = _ref.component;
  var handleClick = function handleClick() {
    // runSound()
    if (type === 'button') value === null || value === void 0 ? void 0 : value.onClick(value === null || value === void 0 ? void 0 : value.content);
  };
  var cellAssert = function cellAssert(type, value) {
    switch (type) {
      case 'simple':
        return /*#__PURE__*/React.createElement("div", {
          className: "text-p3-medium px-6 py-4"
        }, value);
      case 'person':
        return /*#__PURE__*/React.createElement("div", {
          className: "px-[16px]"
        }, /*#__PURE__*/React.createElement(Person, {
          imageUrl: value.avatar_url,
          fullname: value.first_name
        }));
      case 'description':
        return /*#__PURE__*/React.createElement("div", {
          className: "px-6 py-4"
        }, /*#__PURE__*/React.createElement("div", {
          className: "text-sm text-neutral-800"
        }, value.title), /*#__PURE__*/React.createElement("div", {
          className: "text-sm text-neutral-500"
        }, value.description));
      case 'extended':
        return /*#__PURE__*/React.createElement("div", {
          className: "flex items-center px-6 py-4"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex-shrink-0 h-10 w-10"
        }, /*#__PURE__*/React.createElement("img", {
          className: "h-10 w-10 rounded-full",
          src: value.imageUrl,
          alt: ""
        })), /*#__PURE__*/React.createElement("div", {
          className: "ml-4"
        }, /*#__PURE__*/React.createElement("div", {
          className: "text-sm font-medium text-neutral-800"
        }, value.title), /*#__PURE__*/React.createElement("div", {
          className: "text-sm text-neutral-500"
        }, value.description)));
      case 'button':
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, _extends({
          size: "tiny",
          text: value.text,
          onClick: function onClick() {
            return handleClick();
          }
        }, value)));
      case 'internal_link':
        if (!!Component) return /*#__PURE__*/React.createElement(Component, {
          to: value.to
        }, value.text);
      case 'link':
        return /*#__PURE__*/React.createElement("a", {
          href: value.to
        }, value.text);
      case 'badge':
        return /*#__PURE__*/React.createElement(React.Fragment, null);
      case 'icon':
        return /*#__PURE__*/React.createElement(React.Fragment, null);
      case 'dropdown':
        return /*#__PURE__*/React.createElement("div", {
          className: ""
        }, /*#__PURE__*/React.createElement(Dropdown, {
          button: {
            icon: 'dots',
            size: 'small',
            variant: 'basic'
          },
          items: value,
          component: Component
        }));
      case 'image':
        return /*#__PURE__*/React.createElement("div", {
          className: "flex h-[64px] px-6 py-4",
          style: {
            backgroundImage: "linear-gradient(to left, rgba(44, 51, 53, 1), rgba(44, 51, 53, 0.5), rgba(44, 51, 53, 0.5), rgba(44, 51, 53, 0.2)), url('".concat(value.imageUrl, "')"),
            backgroundSize: 'cover'
          }
        }, value.text);
      default:
        return /*#__PURE__*/React.createElement(React.Fragment, null);
    }
  };
  return cellAssert(type, value);
};