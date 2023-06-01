import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import { RadioGroup } from '@headlessui/react';
export const RadioboxCard = ({ options, selected, handleUpdate, }) => {
    return (_jsx(RadioGroup, { value: selected, onChange: handleUpdate, className: "mt-2", children: _jsx("div", { className: "grid grid-cols-3 gap-3 sm:grid-cols-6", children: options.map((item) => (_jsx(RadioGroup.Option, { value: item, className: ({ active, checked }) => clsx(active ? 'ring-2 ring-offset-2 ring-indigo-500' : '', checked
                    ? 'border-primary-400 border-transparent text-neutral-800 hover:bg-indigo-700'
                    : ' border-neutral-200 text-neutral-600 hover:bg-gray-50', 'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'), children: _jsx(RadioGroup.Label, { as: "span", children: item.name }) }, item.name))) }) }));
};
