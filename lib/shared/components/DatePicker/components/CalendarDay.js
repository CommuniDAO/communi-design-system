function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
export var CalendarDay = function CalendarDay(_ref) {
  var selectable = _ref.selectable,
    date = _ref.date,
    dateObj = _ref.dateObj,
    onDateSelected = _ref.onDateSelected,
    color = _ref.color,
    background = _ref.background,
    getDateProps = _ref.getDateProps;
  return /*#__PURE__*/React.createElement("div", {
    className: "cursor-pointer flex w-full justify-center"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: "w-10 h-10 flex items-center justify-center font-medium text-".concat(color, " ").concat(background, " rounded-full")
  }, getDateProps({
    dateObj: dateObj
  }), {
    onClick: function onClick() {
      return onDateSelected(dateObj);
    }
  }), selectable ? date.getDate() : 'X')));
};