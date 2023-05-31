import * as React from 'react';
import { Transition } from '@headlessui/react';
// import { XIcon, ArrowsExpandIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
export var Sidebar = function Sidebar(_ref) {
  var _ref$initialState = _ref.initialState,
    initialState = _ref$initialState === void 0 ? false : _ref$initialState,
    user = _ref.user,
    items = _ref.items,
    Component = _ref.component,
    closeSidebar = _ref.closeSidebar,
    children = _ref.children;
  var barStyle = clsx('rounded-t-[12px] bg-neutral-100 p-[2px] drop-shadow border-b border-neutral-150');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Transition.Root, {
    show: initialState,
    as: React.Fragment
  }, /*#__PURE__*/React.createElement(Transition.Child, {
    as: React.Fragment,
    enter: "ease-out duration-500",
    enterFrom: "opacity-0 translate-x-[200px]",
    enterTo: "opacity-100 translate-x-[0px]",
    leave: "ease-in duration-500",
    leaveFrom: "opacity-100 translate-x-[0px]",
    leaveTo: "opacity-0 translate-x-[200px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute h-v92 top-0 right-0 w-[200px] bg-neutral-50 border border-neutral-200 rounded-[12px] my-[20px] mr-[20px] text-neutral-600 overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: barStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-start"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "bg-neutral-150 text-neutral-200 p-[2px] rounded-full hover:text-red-100 hover:bg-red-400 focus:outline-none",
    onClick: closeSidebar
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Close"))))), /*#__PURE__*/React.createElement("div", {
    className: "p-[8px]"
  }, children)))));
};