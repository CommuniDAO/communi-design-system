import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import { RadioGroup } from '@headlessui/react';
export const RadioboxBasic = ({ options, selected, handleUpdate, }) => {
    return (_jsx(RadioGroup, { value: selected, onChange: handleUpdate, children: _jsx("div", { className: "space-y-4", children: options.map((item) => (_jsx(RadioGroup.Option, { value: item, className: ({ checked }) => clsx('relative flex cursor-pointer focus:outline-none'), children: ({ active, checked }) => (_jsxs(_Fragment, { children: [_jsx("span", { className: clsx(checked ? 'bg-primary-400' : 'border-gray-300', active ? 'ring-2 ring-offset-2 ring-primary-500' : '', 'h-4 w-4 mt-0.5 cursor-pointer shrink-0 rounded-full border flex items-center justify-center'), "aria-hidden": "true", children: _jsx("span", { className: "rounded-full w-1.5 h-1.5" }) }), _jsx("span", { className: "ml-3 flex flex-col", children: _jsx(RadioGroup.Label, { as: "span", className: clsx(checked ? 'text-primary-900' : 'text-neutral-900', 'ml-3 block text-sm font-medium text-neutral-700'), children: item.name }) })] })) }, item.name))) }) }));
};
