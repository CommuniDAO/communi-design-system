/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react';
import { Transition } from '@headlessui/react';
// import { CheckCircleIcon } from '@heroicons/react/outline';
// import { XIcon } from '@heroicons/react/solid';
export var Notification = function Notification(_ref) {
  var content = _ref.content,
    initialState = _ref.initialState,
    closeNotification = _ref.closeNotification;
  var title = content.title;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "aria-live": "assertive",
    className: "fixed bottom-0 w-full items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full flex flex-col items-center space-y-4 drop-shadow"
  }, /*#__PURE__*/React.createElement(Transition, {
    show: initialState,
    as: Fragment,
    enter: "transform ease-out duration-300 transition",
    enterFrom: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
    enterTo: "translate-y-0 opacity-100 sm:translate-x-0",
    leave: "transition ease-in duration-100",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "transition-opacity duration-500 max-w-[400px] w-full bg-neutral-100 shadow-lg rounded-[20px] pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-[20px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-shrink-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ml-3 w-0 flex-1 pt-0.5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-medium text-neutral-900"
  }), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-p1-medium text-center text-neutral-700"
  }, title)))))))));
};