import React from 'react';
import clsx from 'clsx';
import { Disclosure as DisclosureComponent } from '@headlessui/react';
import { Icon } from '..';
export var Disclosure = function Disclosure(_ref) {
  var items = _ref.items;
  var style = clsx('flex flex-col space-y-[20px] w-full');
  return /*#__PURE__*/React.createElement("div", {
    className: style
  }, items.map(function (_ref2, key) {
    var title = _ref2.title,
      text = _ref2.text;
    return /*#__PURE__*/React.createElement(DisclosureComponent, {
      key: key
    }, function (_ref3) {
      var open = _ref3.open;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DisclosureComponent.Button, {
        className: "w-full py-[15px] px-[30px] text-h4-semi-bold text-neutral-800 border rounded-[4px] border-neutral-150"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between"
      }, /*#__PURE__*/React.createElement("div", null, title), /*#__PURE__*/React.createElement("div", {
        className: "".concat(!!open && 'rotate-180')
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "shootingArrowRight",
        size: "xlarge"
      }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DisclosureComponent.Panel, {
        className: "pt-4 pb-2 text-left text-p1-medium text-neutral-500"
      }, text))));
    });
  }));
};