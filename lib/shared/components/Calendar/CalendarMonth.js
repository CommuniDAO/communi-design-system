import React from 'react';
import { format } from 'date-fns';
import { DateTime } from 'luxon';
import clsx from 'clsx';
export var MonthDesktop = function MonthDesktop(_ref) {
  var weeks = _ref.weeks,
    events = _ref.events,
    body = _ref.body,
    activeDate = _ref.activeDate,
    openModal = _ref.openModal,
    navigation = _ref.navigation;
  return /*#__PURE__*/React.createElement(React.Fragment, null, weeks.map(function (_ref2) {
    var key = _ref2.key,
      day = _ref2.value,
      date = _ref2.date,
      isCurrentDate = _ref2.isCurrentDate,
      isCurrentMonth = _ref2.isCurrentMonth;
    var eventsOnDate = events.filter(function (event) {
      return format(day, 'DDD') === format(new Date(event.timestamp * 1000), 'DDD') ? true : false;
    });
    var isSelected = format(activeDate, 'Y-MM-dd') === format(day, 'Y-MM-dd') ? true : false;
    var buttonStyle = clsx('flex h-6 w-6 items-center justify-center rounded-full font-semibold', isCurrentDate && isSelected && 'bg-secondary-400 text-neutral-800', isCurrentDate && !isSelected && 'text-secondary-400', isSelected && 'bg-primary-400 text-neutral-800');
    var topLeft = body.value[0]['value'][0]['value'] === day;
    var topRight = body.value[0]['value'][6]['value'] === day;
    var botLeft = body.value[body.value.length - 1]['value'][0]['value'] === day;
    var botRight = body.value[body.value.length - 1]['value'][6]['value'] === day;
    return /*#__PURE__*/React.createElement("div", {
      key: format(day, 'Y-MM-dd'),
      className: clsx(isCurrentMonth ? 'bg-neutral-100' : 'bg-neutral-50 text-neutral-500', topLeft && 'rounded-tl-[20px]', topRight && 'rounded-tr-[20px]', botLeft && 'rounded-bl-[20px]', botRight && 'rounded-br-[20px]', 'relative py-2 px-3')
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return navigation.setDate(day);
      }
    }, /*#__PURE__*/React.createElement("time", {
      dateTime: format(day, 'y-M-d'),
      className: buttonStyle
    }, format(day, 'dd'))), eventsOnDate.length > 0 && /*#__PURE__*/React.createElement("ol", {
      className: "mt-2"
    }, eventsOnDate.slice(0, 2).map(function (event) {
      var dt = DateTime.fromSeconds(Number(event.timestamp));
      return /*#__PURE__*/React.createElement("li", {
        key: event.id,
        onClick: function onClick() {
          return openModal({
            type: 'event',
            content: event,
            padding: 'none',
            overflow: true
          });
        },
        className: "cursor-pointer"
      }, /*#__PURE__*/React.createElement("a", {
        href: event.href,
        className: "group flex"
      }, /*#__PURE__*/React.createElement("p", {
        className: "flex-auto truncate font-medium text-neutral-900 group-hover:text-secondary-400"
      }, event.name), /*#__PURE__*/React.createElement("time", {
        dateTime: "".concat(('0' + dt.hour).slice(-2), ":").concat(('0' + dt.minute).slice(-2)),
        className: "ml-3 hidden flex-none text-neutral-500 group-hover:text-secondary-400 md:block"
      }, "".concat(('0' + dt.hour).slice(-2), ":").concat(('0' + dt.minute).slice(-2)))));
    }), eventsOnDate.length > 2 && /*#__PURE__*/React.createElement("li", {
      className: "text-neutral-500"
    }, "+ ", eventsOnDate.length - 2, " more")));
  }));
};
export var MonthMobile = function MonthMobile(_ref3) {
  var weeks = _ref3.weeks,
    events = _ref3.events,
    activeDate = _ref3.activeDate,
    openModal = _ref3.openModal,
    navigation = _ref3.navigation;
  return /*#__PURE__*/React.createElement(React.Fragment, null, weeks.map(function (_ref4) {
    var key = _ref4.key,
      day = _ref4.value,
      date = _ref4.date,
      isCurrentDate = _ref4.isCurrentDate,
      isCurrentMonth = _ref4.isCurrentMonth;
    var eventsOnDate = events.filter(function (event) {
      var eventTime = new Date(event.timestamp * 1000);
      return format(day, 'DDD') === format(eventTime, 'DDD') ? true : false;
    });
    var isSelected = format(activeDate, 'Y-MM-dd') === format(day, 'Y-MM-dd') ? true : false;
    var dayStyle = clsx(isCurrentMonth ? 'bg-neutral-100' : 'bg-neutral-50', (isSelected || isCurrentDate) && 'font-semibold', isSelected && 'text-neutral-800', !isSelected && isCurrentDate && 'text-primary-400', !isSelected && isCurrentMonth && !isCurrentDate && 'text-neutral-900', !isSelected && !isCurrentMonth && !isCurrentDate && 'text-neutral-500', 'flex h-14 flex-col py-2 px-3 hover:bg-neutral-100 focus:z-20');
    var eventStyle = clsx(isSelected && 'flex h-6 w-6 items-center justify-center rounded-full', isSelected && isCurrentDate && 'bg-primary-400', isSelected && !isCurrentDate && 'bg-secondary-400', 'ml-auto');
    return /*#__PURE__*/React.createElement("button", {
      key: date,
      type: "button",
      onClick: function onClick() {
        return navigation.setDate(day);
      },
      className: dayStyle
    }, /*#__PURE__*/React.createElement("time", {
      dateTime: format(day, 'd'),
      className: eventStyle
    }, format(day, 'dd')), /*#__PURE__*/React.createElement("p", {
      className: "sr-only"
    }, eventsOnDate.length, " events"), eventsOnDate.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "-mx-0.5 mt-auto flex flex-wrap-reverse"
    }, eventsOnDate.map(function (event) {
      return /*#__PURE__*/React.createElement("div", {
        key: event.id,
        className: "mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-neutral-400"
      });
    })));
  }));
};