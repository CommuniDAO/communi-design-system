import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Menu, Transition } from '@headlessui/react';
import { Button } from '..';
import { Fragment } from 'react';
export const Dropdown = ({ component: Component, children, button, items }) => {
    const { icon, size } = button;
    // Add Color to Icon
    // const iconName = icon ? { name: icon, size } : undefined;
    return (_jsxs(Menu, { as: "div", className: "relative inline-block text-left", children: [_jsx("div", { children: _jsx(Button, { type: "menu", size: size, ...button, icon: icon }) }), _jsx(Transition, { as: Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95", children: _jsx(Menu.Items, { className: "absolute right-0 w-56 mt-2 origin-top-right border border-neutral-400 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50", children: _jsxs("div", { className: "relative p-[8px]", children: [_jsx("div", { className: "absolute top-0 bottom-0 right-0 left-0 rounded-md backdrop-blur-md bg-gradient-to-br from-neutral-50 to-background opacity-[0.98] z-[-1]" }), _jsx("div", { children: items.map(({ text, type, to, action, icon }, key) => {
                                    return (_jsx("div", { children: _jsx(Menu.Item, { as: "div", children: ({ active }) => (_jsxs(_Fragment, { children: [type === 'button' && (_jsx(Button, { text: text, type: type, variant: "dropdown", active: active, icon: icon, onClick: action })), type === 'action' && (_jsx(Button, { text: text, type: type, to: to, variant: "dropdown", active: active, icon: icon })), type === 'link' && !!Component && (_jsx(Button, { text: text, type: "link", variant: "dropdown", icon: icon, to: to, active: active, component: Component }))] })) }) }, key));
                                }) })] }) }) })] }));
};
