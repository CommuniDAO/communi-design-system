import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import clsx from 'clsx';
import { RadioGroup } from '@headlessui/react';
export const RadioboxFull = ({ options, selected, handleUpdate, }) => {
    // console.log('selected', selected)
    return (_jsx(RadioGroup, { value: selected, onChange: handleUpdate, children: _jsx("div", { className: "space-y-4", children: options.map((item) => (_jsx(RadioGroup.Option, { value: item, className: ({ checked }) => clsx(
                // itemIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                // itemIdx === items.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                checked ? 'z-10' : 'border-neutral-200', 'relative border p-4 flex cursor-pointer focus:outline-none rounded-[8px]'), children: ({ active, checked }) => (_jsxs(_Fragment, { children: [_jsx("span", { className: clsx(checked ? 'bg-primary-400 border-transparent' : 'border-neutral-300', active ? 'ring-2 ring-offset-2 ring-primary-300' : '', 'h-4 w-4 mt-0.5 cursor-pointer shrink-0 rounded-full border flex items-center justify-center'), "aria-hidden": "true", children: _jsx("span", { className: "rounded-full bg-white w-1.5 h-1.5" }) }), _jsxs("span", { className: "ml-3 flex flex-col", children: [_jsx(RadioGroup.Label, { as: "span", className: clsx(checked ? 'text-primary-400' : 'text-neutral-900', 'block text-sm font-medium'), children: item.name }), _jsx(RadioGroup.Description, { as: "span", className: clsx(checked ? 'text-primary-300' : 'text-neutral-500', 'block text-sm'), children: item.description })] })] })) }, item.name))) }) }));
};
