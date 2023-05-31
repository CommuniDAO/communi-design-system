function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { Fragment } from 'react';
import { format, isSameDay } from 'date-fns';
import { timesOfDay } from "./constants";
import { CalendarHeader } from "./CalendarHeader";
import { useCalendar } from '@h6s/calendar';
import { DateTime } from 'luxon';
import clsx from 'clsx';
var ColumnsFix = function ColumnsFix() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-neutral-150 max-h-full max-w-full"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sm:col-start-1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sm:col-start-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sm:col-start-3"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sm:col-start-4"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sm:col-start-5"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sm:col-start-6"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sm:col-start-7"
  }));
};
export var WeekView = function WeekView(_ref) {
  var headers = _ref.headers,
    body = _ref.body,
    navigation = _ref.navigation,
    cursorDate = _ref.cursorDate,
    events = _ref.events,
    view = _ref.view;
  var container = React.useRef(null);
  var containerNav = React.useRef(null);
  var containerOffset = React.useRef(null);

  // React.useEffect(() => {
  //   const currentMinute = new Date().getHours() * 60;
  //   if (
  //     typeof container.current?.scrollHeight === 'number' &&
  //     typeof containerNav.current?.offsetHeight === 'number' &&
  //     typeof containerOffset.current?.offsetHeight === 'number'C
  //   ) {
  //     const x =
  //       container.current.scrollHeight -
  //       containerNav.current.offsetHeight -
  //       containerOffset.current.offsetHeight;
  //     window.scrollTo(0, (x * currentMinute) / 1440);
  //   }
  // }, []);
  // console.log('cursorDate', cursorDate)

  var eventsOnWeek = body.value.map(function (_ref2, key) {
    var week = _ref2.value;
    // console.log('item', item)
    // console.log('value', item.value)
    // Find Week
    // console.log('week', key, week)
    var weekly = week.map(function (_ref3) {
      var day = _ref3.value,
        isCurrentDate = _ref3.isCurrentDate;
      if (isCurrentDate) {
        // console.log('week', key, week)
      }
      var evently = events.filter(function (event) {
        // console.log('event', day)

        // console.log(new Date(event.timestamp *1000))
        if (isSameDay(day, +new Date(event.timestamp * 1000))) {
          // console.log(isSameDay(day, +new Date(event.timestamp *1000)), +new Date(event.timestamp *1000))
          return event;
        }
        // const eventTime = new Date(event.timestamp * 1000);
        // return isSameDay(day, +new Date(event.timestamp *1000)) ? event : null;
      });
      // console.log('evently', evently)
      return evently;
    });
    // console.log('weekly', weekly)
    return weekly;
  })[0];

  // console.log('events', events)

  // console.log('eventsOnWeek', eventsOnWeek)

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    ref: container,
    className: "flex flex-auto flex-col overflow-auto bg-neutral-100"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '165%'
    },
    className: "flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full"
  }, /*#__PURE__*/React.createElement("div", {
    ref: containerNav,
    className: "sticky top-0 flex-none bg-neutral-100 shadow ring-1 ring-neutral-800 ring-opacity-5 sm:pr-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-7 text-sm leading-6 text-neutral-500 sm:hidden"
  }, headers.weekDays.map(function (_ref4) {
    var key = _ref4.key,
      value = _ref4.value;
    var isToday = format(value, 'Y-MM-dd') === format(+new Date(), 'Y-MM-dd');
    var isSelected = format(cursorDate, 'Y-MM-dd') === format(value, 'Y-MM-dd') ? true : false;
    var dayStyle = clsx('mt-1 flex h-8 w-8 items-center justify-center font-semibold rounded-full', isToday && isSelected && 'bg-primary-400 text-neutral-100', isToday && !isSelected && 'text-primary-400', isSelected && 'bg-neutral-900 text-neutral-100', !isSelected && 'text-neutral-900');
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "flex flex-col items-center pt-2 pb-3",
      onClick: function onClick() {
        return navigation.setDate(value);
      },
      key: key
    }, format(value, 'eee').charAt(0), /*#__PURE__*/React.createElement("span", {
      className: dayStyle
    }, format(value, 'dd')));
  })), /*#__PURE__*/React.createElement("div", {
    className: "-mr-px hidden grid-cols-7 divide-x divide-neutral-800 border-r border-neutral-100 text-sm leading-6 text-neutral-500 sm:grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-end-1 w-14 border-b"
  }), headers.weekDays.map(function (_ref5) {
    var key = _ref5.key,
      value = _ref5.value;
    var isToday = format(value, 'Y-MM-dd') === format(+new Date(), 'Y-MM-dd');
    var isSelected = format(cursorDate, 'Y-MM-dd') === format(value, 'Y-MM-dd') ? true : false;
    var dayStyle = clsx('items-center justify-center font-semibold ml-1 flex h-6 w-6 rounded-full', isToday && isSelected && 'bg-primary-400 text-neutral-100', isToday && !isSelected && 'text-primary-400', isSelected && 'bg-neutral-900 text-neutral-100', !isSelected && 'text-neutral-900');
    var spanStyle = clsx(isToday && 'flex items-baseline');
    return /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-center py-3",
      key: key
    }, /*#__PURE__*/React.createElement("span", {
      className: spanStyle
    }, format(value, 'eee').slice(0, 3), ' ', /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return navigation.setDate(value);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: dayStyle
    }, format(value, 'dd')))));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sticky left-0 w-14 flex-none bg-neutral-100 ring-1 ring-neutral-800"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid flex-auto grid-cols-1 grid-rows-1 bg-neutral-50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-start-1 col-end-2 row-start-1 grid divide-y divide-neutral-100",
    style: {
      gridTemplateRows: 'repeat(48, minmax(3.5rem, 1fr))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: containerOffset,
    className: "row-end-1 h-7"
  }), timesOfDay.map(function (_ref6, key) {
    var time = _ref6.time;
    return /*#__PURE__*/React.createElement(Fragment, {
      key: key
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-neutral-400"
    }, time)), /*#__PURE__*/React.createElement("div", null));
  }), /*#__PURE__*/React.createElement("div", null)), /*#__PURE__*/React.createElement("div", {
    className: "col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-neutral-400 sm:grid sm:grid-cols-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-start-1 row-span-full"
  }), /*#__PURE__*/React.createElement("div", {
    className: "col-start-2 row-span-full"
  }), /*#__PURE__*/React.createElement("div", {
    className: "col-start-3 row-span-full"
  }), /*#__PURE__*/React.createElement("div", {
    className: "col-start-4 row-span-full"
  }), /*#__PURE__*/React.createElement("div", {
    className: "col-start-5 row-span-full"
  }), /*#__PURE__*/React.createElement("div", {
    className: "col-start-6 row-span-full"
  }), /*#__PURE__*/React.createElement("div", {
    className: "col-start-7 row-span-full"
  }), /*#__PURE__*/React.createElement("div", {
    className: "col-start-8 row-span-full w-8"
  })), /*#__PURE__*/React.createElement("ol", {
    className: "col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8",
    style: {
      gridTemplateRows: '1.75rem repeat(288, minmax(0, 1fr)) auto'
    }
  }, eventsOnWeek.map(function (day, index) {
    console.log('day', day);
    if (day.length > 0) {
      return day.map(function (event) {
        var start = DateTime.fromSeconds(parseInt(event.timestamp)),
          end = DateTime.fromSeconds(parseInt(event.timestamp) + parseInt(event.duration));
        var start_time = (parseInt(start.toFormat('HH')) * 60 + parseInt(start.toFormat('mm'))) / 5 + 2;
        var startTime = start.toFormat('HH:mm'),
          endTime = end.toFormat('HH:mm');
        return /*#__PURE__*/React.createElement(Fragment, {
          key: index
        }, /*#__PURE__*/React.createElement("li", {
          className: "relative mt-px flex sm:col-start-".concat(index + 1),
          style: {
            gridRow: "".concat(start_time, " / span ").concat(event.duration / 60 / 5)
          }
        }, /*#__PURE__*/React.createElement("a", {
          href: "#",
          className: "group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-primary-300 p-2 text-xs leading-5 hover:bg-blue-100"
        }, /*#__PURE__*/React.createElement("p", {
          className: "order-1 font-semibold text-blue-700"
        }, event.name), /*#__PURE__*/React.createElement("p", {
          className: "text-blue-500 group-hover:text-blue-700"
        }, /*#__PURE__*/React.createElement("time", {
          dateTime: "2022-01-22T06:00"
        }, event.date)), /*#__PURE__*/React.createElement("p", null, startTime, " - ", endTime))));
      });
    }
  })))))));
};
export var CalendarWeek = function CalendarWeek(_ref7) {
  var _ref7$events = _ref7.events,
    events = _ref7$events === void 0 ? [] : _ref7$events;
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
    cursorDate: cursorDate,
    navigation: navigation
  }), /*#__PURE__*/React.createElement(WeekView, {
    headers: headers,
    body: body,
    events: events,
    navigation: navigation,
    cursorDate: cursorDate,
    view: view
  })));
};