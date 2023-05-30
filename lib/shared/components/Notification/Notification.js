import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Transition } from '@headlessui/react';
export const Notification = ({ content, initialState, closeNotification }) => {
    const { title } = content;
    return (_jsx(_Fragment, { children: _jsx("div", { "aria-live": "assertive", className: "fixed bottom-0 w-full items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start", children: _jsx("div", { className: "w-full flex flex-col items-center space-y-4 drop-shadow", children: _jsx(Transition, { show: initialState, as: Fragment, enter: "transform ease-out duration-300 transition", enterFrom: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2", enterTo: "translate-y-0 opacity-100 sm:translate-x-0", leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: _jsx("div", { className: "transition-opacity duration-500 max-w-[400px] w-full bg-neutral-100 shadow-lg rounded-[20px] pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden", children: _jsx("div", { className: "p-[20px]", children: _jsxs("div", { className: "flex items-start", children: [_jsx("div", { className: "flex-shrink-0" }), _jsxs("div", { className: "ml-3 w-0 flex-1 pt-0.5", children: [_jsx("p", { className: "text-sm font-medium text-neutral-900" }), _jsx("p", { className: "mt-1 text-p1-medium text-center text-neutral-700", children: title })] })] }) }) }) }) }) }) }));
};
