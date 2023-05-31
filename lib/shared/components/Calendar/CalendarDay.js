function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useCalendar } from '@h6s/calendar';
import React from 'react';
import { format } from 'date-fns';
import { timesOfDay } from "./constants";
import clsx from 'clsx';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { configResponsive, useResponsive } from 'ahooks';
import { DateTime } from 'luxon';
import { CalendarHeader } from "./CalendarHeader";
configResponsive({
  sm: 0,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
});
var SubHeaderMobileDay = function SubHeaderMobileDay(_ref) {
  var containerNav = _ref.containerNav,
    headers = _ref.headers,
    navigation = _ref.navigation,
    cursorDate = _ref.cursorDate;
  return /*#__PURE__*/React.createElement("div", {
    ref: containerNav,
    className: "sticky top-0 z-10 grid flex-none grid-cols-7 bg-neutral-800 text-xs text-neutral-500 shadow ring-1 ring-black ring-opacity-5 md:hidden"
  }, headers.weekDays.map(function (_ref2) {
    var key = _ref2.key,
      value = _ref2.value;
    var isToday = format(value, 'Y-MM-dd') === format(+new Date(), 'Y-MM-dd');
    var isSelected = format(cursorDate, 'Y-MM-dd') === format(value, 'Y-MM-dd') ? true : false;
    var buttonStyle = clsx('mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold rounded-full', isToday && isSelected && 'bg-secondary-400 text-white', isToday && !isSelected && 'text-secondary-400', isSelected && 'bg-neutral-900 text-white', !isSelected && 'text-neutral-900');
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "flex flex-col items-center pt-3 pb-1.5",
      onClick: function onClick() {
        return navigation.setDate(value);
      },
      key: key
    }, /*#__PURE__*/React.createElement("span", null, format(value, 'EEEEE')), /*#__PURE__*/React.createElement("span", {
      className: buttonStyle
    }, format(value, 'd')));
  }));
};
export var DayView = function DayView(_ref3) {
  var headers = _ref3.headers,
    body = _ref3.body,
    navigation = _ref3.navigation,
    cursorDate = _ref3.cursorDate,
    activeView = _ref3.activeView,
    events = _ref3.events,
    view = _ref3.view;
  var container = React.useRef(null);
  var containerNav = React.useRef(null);
  var containerOffset = React.useRef(null);
  var responsive = useResponsive();
  var sm = responsive.sm,
    md = responsive.md;
  React.useEffect(function () {
    var _container$current, _containerNav$current, _containerOffset$curr;
    var currentMinute = new Date().getHours() * 60;
    if (typeof ((_container$current = container.current) === null || _container$current === void 0 ? void 0 : _container$current.scrollHeight) === 'number' && typeof ((_containerNav$current = containerNav.current) === null || _containerNav$current === void 0 ? void 0 : _containerNav$current.offsetHeight) === 'number' && typeof ((_containerOffset$curr = containerOffset.current) === null || _containerOffset$curr === void 0 ? void 0 : _containerOffset$curr.offsetHeight) === 'number') {
      var x = container.current.scrollHeight - containerNav.current.offsetHeight - containerOffset.current.offsetHeight;
      window.scrollTo(0, x * currentMinute / 1440);
    }
  }, []);
  var eventsOnDate = events.filter(function (event) {
    return format(cursorDate, 'DDD') === format(new Date(event.timestamp * 1000), 'DDD') ? true : false;
  });
  React.useEffect(function () {
    if (sm && !md) {
      view.showWeekView();
    } else if (md) {
      view.showMonthView();
    }
  }, [responsive]);
  React.useEffect(function () {
    window.scrollTo(0, 0);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-auto overflow-hidden bg-neutral-50"
  }, /*#__PURE__*/React.createElement("div", {
    ref: container,
    className: "flex flex-auto flex-col overflow-auto"
  }, /*#__PURE__*/React.createElement(SubHeaderMobileDay, {
    containerNav: containerNav,
    headers: headers,
    navigation: navigation,
    cursorDate: cursorDate
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex w-full flex-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 flex-none bg-neutral-50 ring-1 ring-neutral-100"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid flex-auto grid-cols-1 grid-rows-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-start-1 col-end-2 row-start-1 grid divide-y divide-neutral-100",
    style: {
      gridTemplateRows: 'repeat(48, minmax(3.5rem, 1fr))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: containerOffset,
    className: "row-end-1 h-7"
  }), timesOfDay.map(function (_ref4) {
    var time = _ref4.time;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: Math.random()
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-neutral-400"
    }, time)), /*#__PURE__*/React.createElement("div", null));
  }), /*#__PURE__*/React.createElement("div", null)), /*#__PURE__*/React.createElement("ol", {
    className: "col-start-1 col-end-2 row-start-1 grid grid-cols-1",
    style: {
      gridTemplateRows: '1.75rem repeat(288, minmax(0, 1fr)) auto'
    }
  }, eventsOnDate.length > 0 && eventsOnDate.map(function (event) {
    var start = DateTime.fromSeconds(parseInt(event.timestamp)),
      end = DateTime.fromSeconds(parseInt(event.timestamp) + parseInt(event.duration));
    var start_time = (parseInt(start.toFormat('HH')) * 60 + parseInt(start.toFormat('mm'))) / 5 + 2;
    var startTime = start.toFormat('HH:mm'),
      endTime = end.toFormat('HH:mm');
    return /*#__PURE__*/React.createElement("li", {
      className: "relative mt-px flex",
      style: {
        gridRow: "".concat(start_time, " / span ").concat(event.duration / 60 / 5)
      },
      key: event.name
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      className: "group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100"
    }, /*#__PURE__*/React.createElement("p", {
      className: "order-1 font-semibold text-blue-700"
    }, event.name), /*#__PURE__*/React.createElement("p", {
      className: "text-blue-500 group-hover:text-blue-700"
    }, /*#__PURE__*/React.createElement("time", {
      dateTime: "2022-01-22T06:00"
    }))));
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "hidden w-1/2 max-w-md flex-none border-l border-neutral-100 py-10 px-8 md:block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center text-center text-neutral-900"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return navigation.toPrev();
    },
    className: "-m-1.5 flex flex-none items-center justify-center p-1.5 text-neutral-400 hover:text-neutral-500"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Previous month")), /*#__PURE__*/React.createElement("div", {
    className: "flex-auto font-semibold"
  }, format(cursorDate, 'MMMM Y')), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return navigation.toNext();
    },
    className: "-m-1.5 flex flex-none items-center justify-center p-1.5 text-neutral-400 hover:text-neutral-500"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Next month"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 grid grid-cols-7 text-center text-xs leading-6 text-neutral-500"
  }, headers.weekDays.map(function (_ref5) {
    var key = _ref5.key,
      value = _ref5.value;
    return /*#__PURE__*/React.createElement("div", {
      key: key
    }, format(value, 'EEEEE'));
  })), /*#__PURE__*/React.createElement("div", {
    className: "isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-neutral-200 text-sm shadow ring-1 ring-neutral-200"
  }, body.value.map(function (_ref6) {
    var key = _ref6.key,
      weeks = _ref6.value;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: key
    }, weeks.map(function (_ref7) {
      var key = _ref7.key,
        day = _ref7.value,
        date = _ref7.date,
        isCurrentDate = _ref7.isCurrentDate,
        isCurrentMonth = _ref7.isCurrentMonth;
      var isSelected = format(cursorDate, 'Y-MM-dd') === format(day, 'Y-MM-dd') ? true : false;
      var dayStyle = clsx('flex flex-col items-center pt-[10px] pb-[10px]', 'hover:bg-primary-400 hover:transition-opacity duration-300 ease-out focus:z-10', isCurrentMonth ? 'bg-neutral-100' : 'bg-neutral-50', (isSelected || isCurrentDate) && 'font-semibold', isSelected && 'text-neutral-50', !isSelected && isCurrentMonth && !isCurrentDate && 'text-neutral-900', !isSelected && !isCurrentMonth && !isCurrentDate && 'text-neutral-400', isCurrentDate && !isSelected && 'text-primary-400', body.value[0]['value'][0]['value'] === day && 'rounded-tl-lg', body.value[0]['value'][6]['value'] === day && 'rounded-tr-lg', body.value[body.value.length - 1]['value'][0]['value'] === day && 'rounded-bl-lg', body.value[body.value.length - 1]['value'][6]['value'] === day && 'rounded-br-lg');
      var buttonStyle = clsx('flex h-[32px] w-[32px] p-2 items-center justify-center rounded-full', isSelected && isCurrentDate && 'bg-primary-400', isSelected && !isCurrentDate && 'bg-neutral-900 transition-opacity duration-100');
      return /*#__PURE__*/React.createElement("button", {
        key: key,
        type: "button",
        className: dayStyle,
        onClick: function onClick() {
          return navigation.setDate(day);
        }
      }, /*#__PURE__*/React.createElement("time", {
        dateTime: format(day, 'dd'),
        className: buttonStyle
      }, format(day, 'dd')));
    }));
  })))));
};
export var CalendarDay = function CalendarDay(_ref8) {
  var _ref8$events = _ref8.events,
    events = _ref8$events === void 0 ? [] : _ref8$events,
    CTA = _ref8.CTA;
  var _React$useState = React.useState('month'),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    activeView = _React$useState2[0],
    changeView = _React$useState2[1];
  var _useCalendar = useCalendar(),
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
  var bodyStyle = clsx(activeView === 'month' && 'flex flex-col', (activeView === 'week' || activeView === 'day') && 'flex flex-col h-screen');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: bodyStyle
  }, /*#__PURE__*/React.createElement(CalendarHeader, {
    activeView: activeView,
    setView: setView,
    view: view,
    CTA: CTA,
    cursorDate: cursorDate,
    navigation: navigation
  }), /*#__PURE__*/React.createElement(DayView, {
    headers: headers,
    body: body,
    events: events,
    activeView: activeView,
    navigation: navigation,
    cursorDate: cursorDate,
    view: view
  })));
};