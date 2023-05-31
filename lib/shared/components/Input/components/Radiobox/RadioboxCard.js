import React from 'react';
import clsx from 'clsx';
import { RadioGroup } from '@headlessui/react';
export var RadioboxCard = function RadioboxCard(_ref) {
  var options = _ref.options,
    selected = _ref.selected,
    handleUpdate = _ref.handleUpdate;
  return /*#__PURE__*/React.createElement(RadioGroup, {
    value: selected,
    onChange: handleUpdate,
    className: "mt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-3 sm:grid-cols-6"
  }, options.map(function (item) {
    return /*#__PURE__*/React.createElement(RadioGroup.Option, {
      key: item.name,
      value: item,
      className: function className(_ref2) {
        var active = _ref2.active,
          checked = _ref2.checked;
        return clsx(active ? 'ring-2 ring-offset-2 ring-indigo-500' : '', checked ? 'border-primary-400 border-transparent text-neutral-800 hover:bg-indigo-700' : ' border-neutral-200 text-neutral-600 hover:bg-gray-50', 'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1');
      }
    }, /*#__PURE__*/React.createElement(RadioGroup.Label, {
      as: "span"
    }, item.name));
  })));
};