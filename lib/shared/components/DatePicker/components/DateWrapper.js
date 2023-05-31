function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { useDayzed } from 'dayzed';
import { Calendar } from '.';
export var DateWrapper = function DateWrapper(_ref) {
  var selected = _ref.selected,
    onDateSelected = _ref.onDateSelected;
  var dayzedData = useDayzed({
    selected: selected,
    onDateSelected: onDateSelected
  });
  return /*#__PURE__*/React.createElement(Calendar, _extends({}, dayzedData, {
    onDateSelected: onDateSelected
  }));
};