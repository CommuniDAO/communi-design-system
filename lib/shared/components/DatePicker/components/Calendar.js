function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
var monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var weekdayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export var Calendar = /*#__PURE__*/React.forwardRef(function (_ref, forwarededRef) {
  var calendars = _ref.calendars,
    getBackProps = _ref.getBackProps,
    getForwardProps = _ref.getForwardProps,
    getDateProps = _ref.getDateProps,
    onDateSelected = _ref.onDateSelected;
  var ref = React.useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  React.useImperativeHandle(forwarededRef, function () {
    return ref.current;
  });
  if (calendars.length) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, calendars.map(function (calendar, key) {
      return /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-center",
        key: key
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-full"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between leading-8"
      }, /*#__PURE__*/React.createElement("h1", {
        className: "font-medium text-neutral-800"
      }, monthNamesShort[calendar.month], " ", calendar.year), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center text-neutral-800"
      }, /*#__PURE__*/React.createElement("button", _extends({}, getBackProps({
        calendars: calendars
      }), {
        type: "button"
      }), /*#__PURE__*/React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "icon icon-tabler icon-tabler-chevron-left",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "currentColor",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, /*#__PURE__*/React.createElement("path", {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }), /*#__PURE__*/React.createElement("polyline", {
        points: "15 6 9 12 15 18"
      }))), /*#__PURE__*/React.createElement("button", _extends({}, getForwardProps({
        calendars: calendars
      }), {
        type: "button"
      }), /*#__PURE__*/React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "icon icon-tabler ml-3 icon-tabler-chevron-right",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "currentColor",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, /*#__PURE__*/React.createElement("path", {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }), /*#__PURE__*/React.createElement("polyline", {
        points: "9 6 15 12 9 18"
      }))))), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between pt-4 overflow-x-auto "
      }, /*#__PURE__*/React.createElement("table", {
        className: "w-full"
      }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, weekdayNamesShort.map(function (weekday, key) {
        return /*#__PURE__*/React.createElement("th", {
          key: key
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-full flex justify-center"
        }, /*#__PURE__*/React.createElement("p", {
          className: " font-medium text-center text-neutral-800"
        }, weekday)));
      }))), /*#__PURE__*/React.createElement("tbody", null, calendar.weeks.map(function (week, weekIndex) {
        return /*#__PURE__*/React.createElement("tr", {
          key: weekIndex
        }, week.map(function (dateObj, index) {
          var key = "".concat(calendar.month).concat(calendar.year).concat(weekIndex).concat(index);
          if (!dateObj) {
            return /*#__PURE__*/React.createElement("td", {
              className: "p-0.5",
              key: key
            }, /*#__PURE__*/React.createElement("div", {
              className: "cursor-pointer flex w-full justify-center"
            }));
          }
          var date = dateObj.date,
            selected = dateObj.selected,
            selectable = dateObj.selectable,
            today = dateObj.today;

          // console.log('Date is', date)
          var background = today ? 'text-primary-400' : 'transparent';
          background = selected ? 'bg-secondary-400 text-neutral-800' : background;
          background = !selectable ? 'bg-primary-100 text-neutral-800' : background;
          return /*#__PURE__*/React.createElement("td", {
            className: "p-0.5",
            key: key
          }, /*#__PURE__*/React.createElement("div", {
            className: "cursor-pointer flex w-full justify-center"
          }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", _extends({
            type: "button",
            className: "w-10 h-10 flex items-center justify-center font-medium text-neutral-800 ".concat(background, " rounded-full")
          }, getDateProps({
            dateObj: dateObj
          }), {
            onClick: function onClick() {
              return onDateSelected(dateObj);
            }
          }), selectable ? date.getDate() : 'X'))));
        }));
      }))))));
    }));
  }
  return null;
});