import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
const monthNamesShort = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
const weekdayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const Calendar = React.forwardRef(({ calendars, getBackProps, getForwardProps, getDateProps, onDateSelected }, forwarededRef) => {
    const ref = React.useRef(null);
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    React.useImperativeHandle(forwarededRef, () => ref.current);
    if (calendars.length) {
        return (_jsx(_Fragment, { children: calendars.map((calendar, key) => (_jsx("div", { className: "flex items-center justify-center", children: _jsxs("div", { className: "w-full", children: [_jsxs("div", { className: "flex items-center justify-between leading-8", children: [_jsxs("h1", { className: "font-medium text-neutral-800", children: [monthNamesShort[calendar.month], " ", calendar.year] }), _jsxs("div", { className: "flex items-center text-neutral-800", children: [_jsx("button", { ...getBackProps({ calendars }), type: "button", children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-chevron-left", width: 24, height: 24, viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), _jsx("polyline", { points: "15 6 9 12 15 18" })] }) }), _jsx("button", { ...getForwardProps({ calendars }), type: "button", children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler ml-3 icon-tabler-chevron-right", width: 24, height: 24, viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), _jsx("polyline", { points: "9 6 15 12 9 18" })] }) })] })] }), _jsx("div", { className: "flex items-center justify-between pt-4 overflow-x-auto ", children: _jsxs("table", { className: "w-full", children: [_jsx("thead", { children: _jsx("tr", { children: weekdayNamesShort.map((weekday, key) => (_jsx("th", { children: _jsx("div", { className: "w-full flex justify-center", children: _jsx("p", { className: " font-medium text-center text-neutral-800", children: weekday }) }) }, key))) }) }), _jsx("tbody", { children: calendar.weeks.map((week, weekIndex) => {
                                            return (_jsx("tr", { children: week.map((dateObj, index) => {
                                                    const key = `${calendar.month}${calendar.year}${weekIndex}${index}`;
                                                    if (!dateObj) {
                                                        return (_jsx("td", { className: "p-0.5", children: _jsx("div", { className: "cursor-pointer flex w-full justify-center" }) }, key));
                                                    }
                                                    let { date, selected, selectable, today } = dateObj;
                                                    // console.log('Date is', date)
                                                    let background = today
                                                        ? 'text-primary-400'
                                                        : 'transparent';
                                                    background = selected
                                                        ? 'bg-secondary-400 text-neutral-800'
                                                        : background;
                                                    background = !selectable
                                                        ? 'bg-primary-100 text-neutral-800'
                                                        : background;
                                                    return (_jsx("td", { className: "p-0.5", children: _jsx("div", { className: "cursor-pointer flex w-full justify-center", children: _jsx("div", { children: _jsx("button", { type: "button", className: `w-10 h-10 flex items-center justify-center font-medium text-neutral-800 ${background} rounded-full`, ...getDateProps({ dateObj }), onClick: () => onDateSelected(dateObj), children: selectable ? date.getDate() : 'X' }) }) }) }, key));
                                                }) }, weekIndex));
                                        }) })] }) })] }) }, key))) }));
    }
    return null;
});
