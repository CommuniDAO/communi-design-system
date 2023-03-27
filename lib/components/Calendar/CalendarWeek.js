import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { Fragment } from 'react';
import { format, isSameDay } from 'date-fns';
import { timesOfDay } from './constants';
import { CalendarHeader } from './CalendarHeader';
import { useCalendar } from '@h6s/calendar';
import { DateTime } from 'luxon';
import clsx from 'clsx';
const ColumnsFix = () => {
    return _jsxs(_Fragment, { children: [_jsx("div", { className: "min-h-screen bg-neutral-150 max-h-full max-w-full" }), _jsx("div", { className: 'sm:col-start-1' }), _jsx("div", { className: 'sm:col-start-2' }), _jsx("div", { className: 'sm:col-start-3' }), _jsx("div", { className: 'sm:col-start-4' }), _jsx("div", { className: 'sm:col-start-5' }), _jsx("div", { className: 'sm:col-start-6' }), _jsx("div", { className: 'sm:col-start-7' })] });
};
export const WeekView = ({ headers, body, navigation, cursorDate, events, view }) => {
    const container = React.useRef(null);
    const containerNav = React.useRef(null);
    const containerOffset = React.useRef(null);
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
    const eventsOnWeek = body.value.map(({ value: week }, key) => {
        // console.log('item', item)
        // console.log('value', item.value)
        // Find Week
        // console.log('week', key, week)
        const weekly = week.map(({ value: day, isCurrentDate }) => {
            if (isCurrentDate) {
                // console.log('week', key, week)
            }
            const evently = events.filter((event) => {
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
    return (_jsx(_Fragment, { children: _jsx("div", { ref: container, className: "flex flex-auto flex-col overflow-auto bg-neutral-100", children: _jsxs("div", { style: { width: '165%' }, className: "flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full", children: [_jsxs("div", { ref: containerNav, className: "sticky top-0 flex-none bg-neutral-100 shadow ring-1 ring-neutral-800 ring-opacity-5 sm:pr-8", children: [_jsx("div", { className: "grid grid-cols-7 text-sm leading-6 text-neutral-500 sm:hidden", children: headers.weekDays.map(({ key, value }) => {
                                    const isToday = format(value, 'Y-MM-dd') === format(+new Date(), 'Y-MM-dd');
                                    const isSelected = format(cursorDate, 'Y-MM-dd') === format(value, 'Y-MM-dd')
                                        ? true
                                        : false;
                                    const dayStyle = clsx('mt-1 flex h-8 w-8 items-center justify-center font-semibold rounded-full', isToday && isSelected && 'bg-primary-400 text-neutral-100', isToday && !isSelected && 'text-primary-400', isSelected && 'bg-neutral-900 text-neutral-100', !isSelected && 'text-neutral-900');
                                    return (_jsxs("button", { type: "button", className: "flex flex-col items-center pt-2 pb-3", onClick: () => navigation.setDate(value), children: [format(value, 'eee').charAt(0), _jsx("span", { className: dayStyle, children: format(value, 'dd') })] }, key));
                                }) }), _jsxs("div", { className: "-mr-px hidden grid-cols-7 divide-x divide-neutral-800 border-r border-neutral-100 text-sm leading-6 text-neutral-500 sm:grid", children: [_jsx("div", { className: "col-end-1 w-14 border-b" }), headers.weekDays.map(({ key, value }) => {
                                        const isToday = format(value, 'Y-MM-dd') === format(+new Date(), 'Y-MM-dd');
                                        const isSelected = format(cursorDate, 'Y-MM-dd') === format(value, 'Y-MM-dd')
                                            ? true
                                            : false;
                                        const dayStyle = clsx('items-center justify-center font-semibold ml-1 flex h-6 w-6 rounded-full', isToday && isSelected && 'bg-primary-400 text-neutral-100', isToday && !isSelected && 'text-primary-400', isSelected && 'bg-neutral-900 text-neutral-100', !isSelected && 'text-neutral-900');
                                        const spanStyle = clsx(isToday && 'flex items-baseline');
                                        return (_jsx("div", { className: "flex items-center justify-center py-3", children: _jsxs("span", { className: spanStyle, children: [format(value, 'eee').slice(0, 3), ' ', _jsx("button", { type: "button", onClick: () => navigation.setDate(value), children: _jsx("span", { className: dayStyle, children: format(value, 'dd') }) })] }) }, key));
                                    })] })] }), _jsxs("div", { className: "flex flex-auto", children: [_jsx("div", { className: "sticky left-0 w-14 flex-none bg-neutral-100 ring-1 ring-neutral-800" }), _jsxs("div", { className: "grid flex-auto grid-cols-1 grid-rows-1 bg-neutral-50", children: [_jsxs("div", { className: "col-start-1 col-end-2 row-start-1 grid divide-y divide-neutral-100", style: {
                                            gridTemplateRows: 'repeat(48, minmax(3.5rem, 1fr))'
                                        }, children: [_jsx("div", { ref: containerOffset, className: "row-end-1 h-7" }), timesOfDay.map(({ time }, key) => {
                                                return (_jsxs(Fragment, { children: [_jsx("div", { children: _jsx("div", { className: "sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-neutral-400", children: time }) }), _jsx("div", {})] }, key));
                                            }), _jsx("div", {})] }), _jsxs("div", { className: "col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-neutral-400 sm:grid sm:grid-cols-7", children: [_jsx("div", { className: "col-start-1 row-span-full" }), _jsx("div", { className: "col-start-2 row-span-full" }), _jsx("div", { className: "col-start-3 row-span-full" }), _jsx("div", { className: "col-start-4 row-span-full" }), _jsx("div", { className: "col-start-5 row-span-full" }), _jsx("div", { className: "col-start-6 row-span-full" }), _jsx("div", { className: "col-start-7 row-span-full" }), _jsx("div", { className: "col-start-8 row-span-full w-8" })] }), _jsx("ol", { className: "col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8", style: {
                                            gridTemplateRows: '1.75rem repeat(288, minmax(0, 1fr)) auto'
                                        }, children: eventsOnWeek.map((day, index) => {
                                            console.log('day', day);
                                            if (day.length > 0) {
                                                return day.map((event) => {
                                                    const start = DateTime.fromSeconds(parseInt(event.timestamp)), end = DateTime.fromSeconds(parseInt(event.timestamp) + parseInt(event.duration));
                                                    const start_time = (parseInt(start.toFormat('HH')) * 60 + parseInt(start.toFormat('mm'))) / 5 + 2;
                                                    const startTime = start.toFormat('HH:mm'), endTime = end.toFormat('HH:mm');
                                                    return (_jsx(Fragment, { children: _jsx("li", { className: `relative mt-px flex sm:col-start-${index + 1}`, style: {
                                                                gridRow: `${start_time} / span ${event.duration / 60 / 5}`
                                                            }, children: _jsxs("a", { href: "#", className: "group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-primary-300 p-2 text-xs leading-5 hover:bg-blue-100", children: [_jsx("p", { className: "order-1 font-semibold text-blue-700", children: event.name }), _jsx("p", { className: "text-blue-500 group-hover:text-blue-700", children: _jsx("time", { dateTime: "2022-01-22T06:00", children: event.date }) }), _jsxs("p", { children: [startTime, " - ", endTime] })] }) }) }, index));
                                                });
                                            }
                                        }) })] })] })] }) }) }));
};
export const CalendarWeek = ({ events = [] }) => {
    const [activeView, changeView] = React.useState('month');
    const { cursorDate, headers, body, view, navigation } = useCalendar();
    const setView = (option) => {
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
    const eventsOnDate = events.filter((event) => {
        return format(cursorDate, 'DDD') ===
            format(new Date(event.timestamp * 1000), 'DDD')
            ? true
            : false;
    });
    const bodyStyle = clsx(activeView === 'month' && 'flex flex-col', (activeView === 'week' || activeView === 'day') && 'flex flex-col h-screen');
    return (_jsx(_Fragment, { children: _jsxs("div", { className: bodyStyle, children: [_jsx(CalendarHeader, { activeView: activeView, setView: setView, view: view, cursorDate: cursorDate, navigation: navigation }), _jsx(WeekView, { headers: headers, body: body, events: events, navigation: navigation, cursorDate: cursorDate, view: view })] }) }));
};
