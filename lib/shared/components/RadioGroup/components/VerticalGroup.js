import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Image, Badge } from '../..';
import { RadioGroup as RadioGroupComponent } from '@headlessui/react';
import { motion } from "framer-motion";
export const VerticalGroup = ({ handleSelection, selected, options }) => {
    return (_jsx(_Fragment, { children: _jsxs(RadioGroupComponent, { value: selected, onChange: (e) => handleSelection(e), children: [_jsx(RadioGroupComponent.Label, { className: "sr-only", children: "Label" }), _jsx("div", { className: "flex flex-row space-x-[20px]", children: options.map((option) => (_jsx(RadioGroupComponent.Option, { value: option, disabled: option.disabled, className: ({ active, checked }) => `${active
                            ? 'ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60'
                            : ''}
                ${checked ? 'bg-neutral-100 text-neutral-800' : 'bg-neutral-50 text-neutral-800'}
                  bg-primary-400 relative rounded-lg shadow-md   ${option.disabled ? 'cursor-not-allowed' : 'cursor-pointer'} flex focus:outline-none w-[200px] overflow-hidden`, children: ({ active, checked }) => (_jsx(_Fragment, { children: _jsx("div", { className: "flex items-center justify-between w-full", children: _jsx("div", { className: "flex items-center", children: _jsxs("div", { children: [_jsxs(RadioGroupComponent.Label, { as: "p", className: `font-medium  ${checked ? 'text-neutral-800' : 'text-neutral-900'}`, children: [_jsx(motion.div, { className: "absolute", initial: { scale: 1 }, whileHover: { scale: option.disabled ? 1 : 1.2 }, children: _jsx(Image, { fullHeight: true, imageUrl: option.image_url, customCss: `z-[1] ${option.disabled && 'filter grayscale'}` }) }), _jsx("div", { className: "relative h-[300px]", children: _jsx("div", { className: 'flex flex-col justify-end w-[200px]  px-[16px] py-[20px]', children: _jsxs("div", { className: "flex flex-row justify-between h-6", children: [_jsx("div", { className: "", children: option.name }), checked && (_jsx("div", { className: "flex-shrink-0 text-neutral-800 bg-gradient-to-tr from-primary-500 via-secondary-500 to-secondary-400 rounded-full", children: _jsx(CheckIcon, { className: "w-6 h-6" }) })), !!option.badge && (_jsx(Badge, { title: option.badge }))] }) }) })] }), _jsx(RadioGroupComponent.Description, { as: "span", className: `inline ${checked ? 'text-neutral-300' : 'text-neutral-600'}` })] }) }) }) })) }, option.name))) })] }) }));
};
function CheckIcon(props) {
    return (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", ...props, children: _jsx("path", { d: "M7 13l3 3 7-7", stroke: "#fff", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }) }));
}
