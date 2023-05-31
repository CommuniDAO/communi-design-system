import React from 'react';
import { format } from 'date-fns';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { Dropdown } from "../Dropdown";
export var CalendarHeader = function CalendarHeader(_ref) {
  var activeView = _ref.activeView,
    setView = _ref.setView,
    view = _ref.view,
    cursorDate = _ref.cursorDate,
    CTA = _ref.CTA,
    navigation = _ref.navigation;
  var userNavigation = [{
    text: 'Month',
    type: 'button',
    action: function action() {
      return setView('month');
    }
  }, {
    text: 'Day',
    type: 'button',
    action: function action() {
      return setView('day');
    }
  }, {
    text: 'Week',
    type: 'button',
    action: function action() {
      return setView('week');
    }
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "relative flex items-center justify-between pt-[16px] pb-[24px] sm:px-6 lg:px-8 lg:flex-none"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-lg font-semibold text-neutral-900"
  }, activeView === 'day' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "text-lg font-semibold leading-6 text-neutral-900"
  }, /*#__PURE__*/React.createElement("time", {
    dateTime: "2022-01-22",
    className: "sm:hidden"
  }, format(cursorDate, 'MMM d, Y')), /*#__PURE__*/React.createElement("time", {
    dateTime: "2022-01-22",
    className: "hidden sm:inline"
  }, format(cursorDate, 'MMMM d, Y'))), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-sm text-neutral-500"
  }, format(cursorDate, 'eeee'))) : /*#__PURE__*/React.createElement("time", {
    dateTime: format(cursorDate, 'Y-MMMM')
  }, format(cursorDate, 'MMMM Y'))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-[16px]"
  }, /*#__PURE__*/React.createElement("div", null, CTA), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center rounded-md shadow-sm md:items-stretch text-button-tiny h-[28px]"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "flex items-center justify-center rounded-l-md border border-r-0 border-neutral-400 bg-neutral-50 py-2 pl-3 pr-4 text-neutral-400 hover:text-neutral-500 focus:relative md:w-9 md:px-2 md:hover:bg-neutral-50",
    onClick: function onClick() {
      return navigation.toPrev();
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Previous month")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "hidden border-t border-b border-neutral-400 bg-neutral-50 px-3.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-neutral-400 focus:relative md:block",
    onClick: function onClick() {
      return navigation.setToday();
    }
  }, "Today"), /*#__PURE__*/React.createElement("span", {
    className: "relative -mx-px h-5 w-px bg-neutral-300 md:hidden"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "flex items-center justify-center rounded-r-md border border-l-0 border-neutral-400 bg-neutral-50 py-2 pl-4 pr-3 text-neutral-400 hover:text-neutral-500 focus:relative md:w-9 md:px-2 md:hover:bg-neutral-50",
    onClick: function onClick() {
      return navigation.toNext();
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Next month"))), /*#__PURE__*/React.createElement("div", {
    className: "md:flex md:items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "right-0 origin-top-right"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    items: userNavigation,
    button: {
      icon: 'dots',
      name: activeView,
      size: 'tiny',
      variant: 'outline'
    }
  }))))));
};