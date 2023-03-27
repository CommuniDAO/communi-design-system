import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { format } from 'date-fns';
import clsx from 'clsx';
const getToday = () => {
    const date = format(+new Date(), 'MMM, dd, eee, yyyy').split(',');
    return { month: date[0], date: date[1], dayWeek: date[2], year: date[3] };
};
export const DateTime = ({ component: Component, to, variant = 'large' }) => {
    const today = getToday();
    const containerStyle = clsx(variant === 'medium' && 'w-[64px] h-[64px]', variant === 'large' && 'w-[96px]', 'block rounded-[8px] overflow-hidden bg-neutral-900 text-center');
    const dateStyle = clsx(variant === 'medium' && 'text-[21px] font-bold', variant === 'large' && 'text-4xl font-bold');
    const yearStyle = clsx(variant === 'medium' && 'text-[7px] font-bold', variant === 'large' && 'text-xs font-bold');
    const dayWeekStyle = clsx(variant === 'medium' && 'text-[7px] font-bold', variant === 'large' && 'text-xs font-bold');
    const monthStyle = clsx(variant === 'medium' && 'bg-secondary-400 text-white text-[12px] py-1 font-bold tracking-wider', variant === 'large' && 'bg-secondary-400 text-white py-1');
    const topStyle = clsx(variant === 'medium' && 'pt-[1px] border-l border-r', variant === 'large' && 'pt-1 border-l border-r');
    const botStyle = clsx(variant === 'medium' && 'pb-[1px] px-[2px] border-l border-r border-b flex justify-between', variant === 'large' && 'pb-2 px-2 border-l border-r border-b flex justify-between');
    return (_jsxs(Component, { to: to, children: [variant === "medium" &&
                _jsxs("div", { className: containerStyle, children: [_jsx("div", { className: monthStyle, children: today.dayWeek }), _jsx("div", { className: topStyle, children: _jsx("span", { className: dateStyle, children: today.date }) })] }), variant === "large" &&
                _jsxs("div", { className: containerStyle, children: [_jsx("div", { className: monthStyle, children: today.month }), _jsx("div", { className: topStyle, children: _jsx("span", { className: dateStyle, children: today.date }) }), _jsxs("div", { className: botStyle, children: [_jsx("span", { className: yearStyle, children: today.dayWeek }), _jsx("span", { className: dayWeekStyle, children: today.year })] })] })] }));
};
