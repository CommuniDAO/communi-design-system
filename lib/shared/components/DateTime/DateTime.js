import React from 'react';
import { format } from 'date-fns';
import clsx from 'clsx';
var getToday = function getToday() {
  var date = format(+new Date(), 'MMM, dd, eee, yyyy').split(',');
  return {
    month: date[0],
    date: date[1],
    dayWeek: date[2],
    year: date[3]
  };
};
export var DateTime = function DateTime(_ref) {
  var Component = _ref.component,
    to = _ref.to,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'large' : _ref$variant;
  var today = getToday();
  var containerStyle = clsx(variant === 'medium' && 'w-[64px] h-[64px]', variant === 'large' && 'w-[96px]', 'block rounded-[8px] overflow-hidden bg-neutral-900 text-center');
  var dateStyle = clsx(variant === 'medium' && 'text-[21px] font-bold', variant === 'large' && 'text-4xl font-bold');
  var yearStyle = clsx(variant === 'medium' && 'text-[7px] font-bold', variant === 'large' && 'text-xs font-bold');
  var dayWeekStyle = clsx(variant === 'medium' && 'text-[7px] font-bold', variant === 'large' && 'text-xs font-bold');
  var monthStyle = clsx(variant === 'medium' && 'bg-secondary-400 text-white text-[12px] py-1 font-bold tracking-wider', variant === 'large' && 'bg-secondary-400 text-white py-1');
  var topStyle = clsx(variant === 'medium' && 'pt-[1px] border-l border-r', variant === 'large' && 'pt-1 border-l border-r');
  var botStyle = clsx(variant === 'medium' && 'pb-[1px] px-[2px] border-l border-r border-b flex justify-between', variant === 'large' && 'pb-2 px-2 border-l border-r border-b flex justify-between');
  return /*#__PURE__*/React.createElement(Component, {
    to: to
  }, variant === "medium" && /*#__PURE__*/React.createElement("div", {
    className: containerStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: monthStyle
  }, today.dayWeek), /*#__PURE__*/React.createElement("div", {
    className: topStyle
  }, /*#__PURE__*/React.createElement("span", {
    className: dateStyle
  }, today.date))), variant === "large" && /*#__PURE__*/React.createElement("div", {
    className: containerStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: monthStyle
  }, today.month), /*#__PURE__*/React.createElement("div", {
    className: topStyle
  }, /*#__PURE__*/React.createElement("span", {
    className: dateStyle
  }, today.date)), /*#__PURE__*/React.createElement("div", {
    className: botStyle
  }, /*#__PURE__*/React.createElement("span", {
    className: yearStyle
  }, today.dayWeek), /*#__PURE__*/React.createElement("span", {
    className: dayWeekStyle
  }, today.year))));
};