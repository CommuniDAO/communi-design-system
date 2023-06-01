import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Icon } from '../..';
import { RadioGroup as RadioGroupComponent } from '@headlessui/react';
export const DefaultGroup = ({ handleSelection, selected, options }) => {
    return (_jsx(_Fragment, { children: _jsx("div", { className: "w-full py-[16px]", children: _jsx("div", { className: "w-full max-w-md mx-auto", children: _jsxs(RadioGroupComponent, { value: selected, onChange: (e) => handleSelection(e), children: [_jsx(RadioGroupComponent.Label, { className: "sr-only", children: "Label" }), _jsx("div", { className: "space-y-[12px]", children: options.map((option) => (_jsx(RadioGroupComponent.Option, { value: option, disabled: option.disabled, className: ({ active, checked }) => `${active
                                    ? 'ring-[2px] ring-tertiary-500'
                                    : `
                    hover:border-[1px] hover:border-tertiary-200
                    hover:ring-[2px] hover:ring-tertiary-500 hover:ring-offset-neutral-50
                    focus:border-[2px] focus:border-tertiary-200
                    focus:ring-[2px] focus:ring-primary-500 focus:ring-offset-neutral-50
                    `}
                ${checked ? 'bg-neutral-100 border-tertiary-400' : 'bg-neutral-50 text-neutral-800'}
                  relative rounded-[16px] shadow-md px-5 py-4 cursor-pointer flex outline-none
                  border-[1px]
                  `, children: ({ active, checked }) => (_jsx(_Fragment, { children: _jsxs("div", { className: "flex items-center justify-between w-full", children: [_jsx("div", { className: "flex items-center", children: _jsxs("div", { className: "text-sm", children: [_jsxs(RadioGroupComponent.Label, { as: "div", children: [_jsx("div", { className: `${active ? 'text-tertiary-500' : checked ? 'text-tertiary-400' : 'text-neutral-600'}`, children: _jsx(Icon, { name: option.icon }) }), _jsx("div", { className: `${active ? 'text-tertiary-500' : checked ? 'text-tertiary-400' : 'text-neutral-600'}`, children: option.name })] }), _jsx(RadioGroupComponent.Description, { as: "span", className: `inline ${checked ? 'text-tertiary-500' : 'text-neutral-600'}` })] }) }), checked && (_jsx("div", { className: "flex-shrink-0 text-neutral-800 bg-gradient-to-tr from-primary-500 via-secondary-500 to-tertiary-500 rounded-full", children: _jsx(CheckIcon, { className: "w-6 h-6" }) }))] }) })) }, option.name))) })] }) }) }) }));
};
function CheckIcon(props) {
    return (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", ...props, children: _jsx("path", { d: "M7 13l3 3 7-7", stroke: "#fff", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }) }));
}
