import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Popover as TooltipComponent } from '@headlessui/react';
import { Button } from '..';
import { Float } from '@headlessui-float/react';
export const Tooltip = ({ children, button }) => {
    const { icon, size, name } = button;
    return (_jsx(_Fragment, { children: _jsx(TooltipComponent, { children: _jsxs(Float, { placement: "bottom-start", offset: 15, shift: 6, flip: 10, arrow: true, portal: true, enter: "transition duration-200 ease-out", enterFrom: "opacity-0 -translate-y-1", enterTo: "opacity-100 translate-y-0", leave: "transition duration-150 ease-in", leaveFrom: "opacity-100 translate-y-0", leaveTo: "opacity-0 -translate-y-1", children: [_jsx(TooltipComponent.Button, { className: "outline-none", children: _jsx(Button, { as: "div", size: size, text: name, icon: icon, ...button }) }), _jsxs(TooltipComponent.Panel, { className: "w-[240px] h-[70px] bg-neutral-150 border border-neutral-150 rounded-[8px] shadow-lg focus:outline-none", children: [_jsx(Float.Arrow, { className: "absolute bg-neutral-100 w-5 h-5 rotate-45 border border-neutral-150" }), _jsx("div", { className: "relative h-full bg-neutral-100 p-3 text-neutral-800 rounded-[7px]", children: children })] })] }) }) }));
};
