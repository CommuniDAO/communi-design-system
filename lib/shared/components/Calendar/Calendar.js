function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';
import { CalendarViewType, useCalendar } from '@h6s/calendar';
import { format } from 'date-fns';
import clsx from 'clsx';
// import { ClockIcon } from '@heroicons/react/solid';
import { WeekView } from "./CalendarWeek";
import { DayView } from "./CalendarDay";
import { MonthDesktop, MonthMobile } from "./CalendarMonth";
import { CalendarHeader } from "./CalendarHeader";
// Add moonphases to the calendar.
// import { Moon } from 'lunarphase-js';

export var Calendar = function Calendar(_ref) {
  var _ref$events = _ref.events,
    events = _ref$events === void 0 ? [] : _ref$events,
    CTA = _ref.CTA,
    openModal = _ref.openModal,
    _ref$defaultView = _ref.defaultView,
    defaultView = _ref$defaultView === void 0 ? 'month' : _ref$defaultView;
  var _React$useState = React.useState(defaultView),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    activeView = _React$useState2[0],
    changeView = _React$useState2[1];
  var _useCalendar = useCalendar({
      defaultViewType: CalendarViewType.Month
    }),
    cursorDate = _useCalendar.cursorDate,
    headers = _useCalendar.headers,
    body = _useCalendar.body,
    view = _useCalendar.view,
    navigation = _useCalendar.navigation;
  var setView = function setView(option) {
    changeView(option);
    switch (option) {
      case 'month':
        return view.showMonthView();
      case 'day':
        return view.showMonthView();
      case 'week':
        return view.showWeekView();
    }
  };

  // React.useEffect, populate events, watch [view]
  var eventsOnDate = events.filter(function (event) {
    return format(cursorDate, 'DDD') === format(new Date(event.timestamp * 1000), 'DDD') ? true : false;
  });

  // React.useEffect(() => {
  //   console.log('activeView', activeView)
  //   if (!activeView) {
  //     view.showMonthView();
  //   }
  //   if (defaultView === 'week') {
  //     view.showWeekView();
  //   }
  // }, [activeView])

  var bodyStyle = clsx(activeView === 'month' && 'flex flex-col h-[800px]', (activeView === 'week' || activeView === 'day') && 'flex flex-col h-v92');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: bodyStyle
  }, /*#__PURE__*/React.createElement(CalendarHeader, {
    CTA: CTA,
    activeView: activeView,
    setView: setView,
    view: view,
    cursorDate: cursorDate,
    navigation: navigation
  }), activeView === 'month' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-7 gap-px text-center text-xs font-semibold leading-6 text-neutral-700 lg:flex-none"
  }, headers.weekDays.map(function (_ref2, key) {
    var value = _ref2.value;
    var day = format(value, 'eee');
    return /*#__PURE__*/React.createElement("div", {
      className: "py-2",
      key: key
    }, day.charAt(0), /*#__PURE__*/React.createElement("span", {
      className: "sr-only sm:not-sr-only"
    }, day.slice(1, 3)));
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex bg-neutral-300 p-[1px] text-xs leading-6 text-neutral-700 lg:flex-auto rounded-[20px] mb-[40px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-".concat(body.value.length, " lg:gap-px")
  }, body.value.map(function (_ref3) {
    var key = _ref3.key,
      weeks = _ref3.value;
    return /*#__PURE__*/React.createElement(MonthDesktop, {
      openModal: openModal,
      key: key,
      body: body,
      weeks: weeks,
      events: events,
      activeDate: cursorDate,
      navigation: navigation
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "isolate grid w-full grid-cols-7 grid-rows-5 gap-px lg:hidden"
  }, body.value.map(function (_ref4) {
    var key = _ref4.key,
      weeks = _ref4.value;
    return /*#__PURE__*/React.createElement(MonthMobile, {
      openModal: openModal,
      key: key,
      body: body,
      weeks: weeks,
      events: events,
      activeDate: cursorDate,
      navigation: navigation
    });
  }))))), activeView === 'week' && /*#__PURE__*/React.createElement(WeekView, {
    headers: headers,
    body: body,
    events: events,
    navigation: navigation,
    cursorDate: cursorDate,
    view: view
  }), activeView === 'day' && /*#__PURE__*/React.createElement(DayView, {
    headers: headers,
    body: body,
    events: events,
    activeView: activeView,
    navigation: navigation,
    cursorDate: cursorDate,
    view: view
  }), activeView === 'month' && eventsOnDate.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "py-10 px-4 sm:px-6 lg:hidden"
  }, /*#__PURE__*/React.createElement("ol", {
    className: "divide-y divide-neutral-100 overflow-hidden rounded-lg bg-neutral-100 text-sm shadow ring-1 ring-black ring-opacity-5"
  }, eventsOnDate.map(function (event) {
    return /*#__PURE__*/React.createElement("li", {
      key: event.id,
      className: "group flex p-4 pr-6 focus-within:bg-neutral-50 hover:bg-neutral-50"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-auto"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-semibold text-neutral-900"
    }, event.name), /*#__PURE__*/React.createElement("time", {
      dateTime: format(new Date(event.timestamp * 1000), 'P pppp'),
      className: "mt-2 flex items-center text-neutral-700"
    }, format(new Date(event.timestamp * 1000), 'hh bbbb'))), /*#__PURE__*/React.createElement("a", {
      href: event.href,
      className: "ml-6 flex-none self-center rounded-md border border-neutral-900 bg-neutral-100 py-2 px-3 font-semibold text-neutral-700 opacity-0 shadow-sm hover:bg-neutral-50 focus:opacity-100 group-hover:opacity-100"
    }, "Edit", /*#__PURE__*/React.createElement("span", {
      className: "sr-only"
    }, ", ", event.name)));
  })))));
};