import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Popover as PopoverComponent, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Button } from '..';
export const Popover = ({ children, button }) => {
    const { icon, size, name } = button;
    return (_jsx("div", { className: "", children: _jsx(PopoverComponent, { className: "relative", children: ({ open }) => (_jsxs(_Fragment, { children: [_jsx("div", { children: _jsx(Button, { type: "popover", size: size, text: name, ...button, icon: icon }) }), _jsx(Transition, { as: Fragment, enter: "transition ease-out duration-200", enterFrom: "opacity-0 translate-y-1", enterTo: "opacity-100 translate-y-0", leave: "transition ease-in duration-150", leaveFrom: "opacity-100 translate-y-0", leaveTo: "opacity-0 translate-y-1", children: _jsx(PopoverComponent.Panel, { className: "absolute right-0 w-[300px] mt-2 origin-top-right border border-neutral-200 rounded-[10px] z-50", children: _jsx("div", { className: "overflow-hidden rounded-[10px] shadow-lg", children: _jsx("div", { className: "relative bg-neutral-50", children: children }) }) }) })] })) }) }));
};
