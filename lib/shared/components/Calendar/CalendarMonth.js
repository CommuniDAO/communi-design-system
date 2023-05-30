import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { format } from 'date-fns';
import { DateTime } from 'luxon';
import clsx from 'clsx';
export const MonthDesktop = ({ weeks, events, body, activeDate, openModal, navigation }) => {
    return (_jsx(_Fragment, { children: weeks.map(({ key, value: day, date, isCurrentDate, isCurrentMonth }) => {
            const eventsOnDate = events.filter((event) => {
                return format(day, 'DDD') === format(new Date(event.timestamp * 1000), 'DDD') ? true : false;
            });
            const isSelected = format(activeDate, 'Y-MM-dd') === format(day, 'Y-MM-dd') ? true : false;
            const buttonStyle = clsx('flex h-6 w-6 items-center justify-center rounded-full font-semibold', isCurrentDate && isSelected && 'bg-secondary-400 text-neutral-800', isCurrentDate && !isSelected && 'text-secondary-400', isSelected && 'bg-primary-400 text-neutral-800');
            const topLeft = body.value[0]['value'][0]['value'] === day;
            const topRight = body.value[0]['value'][6]['value'] === day;
            const botLeft = body.value[body.value.length - 1]['value'][0]['value'] === day;
            const botRight = body.value[body.value.length - 1]['value'][6]['value'] === day;
            return (_jsxs("div", { className: clsx(isCurrentMonth ? 'bg-neutral-100' : 'bg-neutral-50 text-neutral-500', topLeft && 'rounded-tl-[20px]', topRight && 'rounded-tr-[20px]', botLeft && 'rounded-bl-[20px]', botRight && 'rounded-br-[20px]', 'relative py-2 px-3'), children: [_jsx("button", { onClick: () => navigation.setDate(day), children: _jsx("time", { dateTime: format(day, 'y-M-d'), className: buttonStyle, children: format(day, 'dd') }) }), eventsOnDate.length > 0 && (_jsxs("ol", { className: "mt-2", children: [eventsOnDate.slice(0, 2).map((event) => {
                                const dt = DateTime.fromSeconds(Number(event.timestamp));
                                return (_jsx("li", { onClick: () => openModal({ type: 'event', content: event, padding: 'none', overflow: true }), className: "cursor-pointer", children: _jsxs("a", { href: event.href, className: "group flex", children: [_jsx("p", { className: "flex-auto truncate font-medium text-neutral-900 group-hover:text-secondary-400", children: event.name }), _jsx("time", { dateTime: `${('0' + dt.hour).slice(-2)}:${('0' + dt.minute).slice(-2)}`, className: "ml-3 hidden flex-none text-neutral-500 group-hover:text-secondary-400 md:block", children: `${('0' + dt.hour).slice(-2)}:${('0' + dt.minute).slice(-2)}` })] }) }, event.id));
                            }), eventsOnDate.length > 2 && (_jsxs("li", { className: "text-neutral-500", children: ["+ ", eventsOnDate.length - 2, " more"] }))] }))] }, format(day, 'Y-MM-dd')));
        }) }));
};
export const MonthMobile = ({ weeks, events, activeDate, openModal, navigation }) => {
    return (_jsx(_Fragment, { children: weeks.map(({ key, value: day, date, isCurrentDate, isCurrentMonth }) => {
            const eventsOnDate = events.filter((event) => {
                const eventTime = new Date(event.timestamp * 1000);
                return format(day, 'DDD') === format(eventTime, 'DDD') ? true : false;
            });
            const isSelected = format(activeDate, 'Y-MM-dd') === format(day, 'Y-MM-dd')
                ? true
                : false;
            const dayStyle = clsx(isCurrentMonth ? 'bg-neutral-100' : 'bg-neutral-50', (isSelected || isCurrentDate) && 'font-semibold', isSelected && 'text-neutral-800', !isSelected && isCurrentDate && 'text-primary-400', !isSelected && isCurrentMonth && !isCurrentDate && 'text-neutral-900', !isSelected && !isCurrentMonth && !isCurrentDate && 'text-neutral-500', 'flex h-14 flex-col py-2 px-3 hover:bg-neutral-100 focus:z-20');
            const eventStyle = clsx(isSelected && 'flex h-6 w-6 items-center justify-center rounded-full', isSelected && isCurrentDate && 'bg-primary-400', isSelected && !isCurrentDate && 'bg-secondary-400', 'ml-auto');
            return (_jsxs("button", { type: "button", onClick: () => navigation.setDate(day), className: dayStyle, children: [_jsx("time", { dateTime: format(day, 'd'), className: eventStyle, children: format(day, 'dd') }), _jsxs("p", { className: "sr-only", children: [eventsOnDate.length, " events"] }), eventsOnDate.length > 0 && (_jsx("div", { className: "-mx-0.5 mt-auto flex flex-wrap-reverse", children: eventsOnDate.map((event) => (_jsx("div", { className: "mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-neutral-400" }, event.id))) }))] }, date));
        }) }));
};
