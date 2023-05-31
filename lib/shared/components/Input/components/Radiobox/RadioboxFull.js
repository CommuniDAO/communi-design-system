import React from 'react';
import clsx from 'clsx';
import { RadioGroup } from '@headlessui/react';
export var RadioboxFull = function RadioboxFull(_ref) {
  var options = _ref.options,
    selected = _ref.selected,
    handleUpdate = _ref.handleUpdate;
  // console.log('selected', selected)
  return /*#__PURE__*/React.createElement(RadioGroup, {
    value: selected,
    onChange: handleUpdate
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, options.map(function (item) {
    return /*#__PURE__*/React.createElement(RadioGroup.Option, {
      key: item.name,
      value: item,
      className: function className(_ref2) {
        var checked = _ref2.checked;
        return clsx(
        // itemIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
        // itemIdx === items.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
        checked ? 'z-10' : 'border-neutral-200', 'relative border p-4 flex cursor-pointer focus:outline-none rounded-[8px]');
      }
    }, function (_ref3) {
      var active = _ref3.active,
        checked = _ref3.checked;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        className: clsx(checked ? 'bg-primary-400 border-transparent' : 'border-neutral-300', active ? 'ring-2 ring-offset-2 ring-primary-300' : '', 'h-4 w-4 mt-0.5 cursor-pointer shrink-0 rounded-full border flex items-center justify-center'),
        "aria-hidden": "true"
      }, /*#__PURE__*/React.createElement("span", {
        className: "rounded-full bg-white w-1.5 h-1.5"
      })), /*#__PURE__*/React.createElement("span", {
        className: "ml-3 flex flex-col"
      }, /*#__PURE__*/React.createElement(RadioGroup.Label, {
        as: "span",
        className: clsx(checked ? 'text-primary-400' : 'text-neutral-900', 'block text-sm font-medium')
      }, item.name), /*#__PURE__*/React.createElement(RadioGroup.Description, {
        as: "span",
        className: clsx(checked ? 'text-primary-300' : 'text-neutral-500', 'block text-sm')
      }, item.description)));
    });
  })));
};