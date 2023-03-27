import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { format } from 'date-fns';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { Dropdown } from '../Dropdown';
export const CalendarHeader = ({ activeView, setView, view, cursorDate, CTA, navigation }) => {
    const userNavigation = [
        {
            text: 'Month',
            type: 'button',
            action: () => setView('month')
        },
        { text: 'Day', type: 'button', action: () => setView('day') },
        { text: 'Week', type: 'button', action: () => setView('week') }
    ];
    return (_jsx(_Fragment, { children: _jsxs("header", { className: "relative flex items-center justify-between pt-[16px] pb-[24px] sm:px-6 lg:px-8 lg:flex-none", children: [_jsx("div", { className: "text-lg font-semibold text-neutral-900", children: activeView === 'day' ? (_jsxs(_Fragment, { children: [_jsxs("h1", { className: "text-lg font-semibold leading-6 text-neutral-900", children: [_jsx("time", { dateTime: "2022-01-22", className: "sm:hidden", children: format(cursorDate, 'MMM d, Y') }), _jsx("time", { dateTime: "2022-01-22", className: "hidden sm:inline", children: format(cursorDate, 'MMMM d, Y') })] }), _jsx("p", { className: "mt-1 text-sm text-neutral-500", children: format(cursorDate, 'eeee') })] })) : (_jsx("time", { dateTime: format(cursorDate, 'Y-MMMM'), children: format(cursorDate, 'MMMM Y') })) }), _jsxs("div", { className: "flex items-center space-x-[16px]", children: [_jsx("div", { children: CTA }), _jsxs("div", { className: "flex items-center rounded-md shadow-sm md:items-stretch text-button-tiny h-[28px]", children: [_jsxs("button", { type: "button", className: "flex items-center justify-center rounded-l-md border border-r-0 border-neutral-400 bg-neutral-50 py-2 pl-3 pr-4 text-neutral-400 hover:text-neutral-500 focus:relative md:w-9 md:px-2 md:hover:bg-neutral-50", onClick: () => navigation.toPrev(), children: [_jsx("span", { className: "sr-only", children: "Previous month" }), _jsx(ChevronLeftIcon, { className: "h-5 w-5", "aria-hidden": "true" })] }), _jsx("button", { type: "button", className: "hidden border-t border-b border-neutral-400 bg-neutral-50 px-3.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-neutral-400 focus:relative md:block", onClick: () => navigation.setToday(), children: "Today" }), _jsx("span", { className: "relative -mx-px h-5 w-px bg-neutral-300 md:hidden" }), _jsxs("button", { type: "button", className: "flex items-center justify-center rounded-r-md border border-l-0 border-neutral-400 bg-neutral-50 py-2 pl-4 pr-3 text-neutral-400 hover:text-neutral-500 focus:relative md:w-9 md:px-2 md:hover:bg-neutral-50", onClick: () => navigation.toNext(), children: [_jsx("span", { className: "sr-only", children: "Next month" }), _jsx(ChevronRightIcon, { className: "h-5 w-5", "aria-hidden": "true" })] })] }), _jsx("div", { className: "md:flex md:items-center", children: _jsx("div", { className: "right-0 origin-top-right", children: _jsx(Dropdown, { items: userNavigation, button: {
                                        icon: 'dots',
                                        name: activeView,
                                        size: 'tiny',
                                        variant: 'outline'
                                    } }) }) })] })] }) }));
};
