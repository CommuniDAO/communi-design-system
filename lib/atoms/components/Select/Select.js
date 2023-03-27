import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
export const Select = ({ type = 'action', id, defaultValue, debug, options, afterUpdate, mRef, multiple = false }) => {
    const [selected, setSelected] = React.useState(defaultValue ? options.find(({ value }) => String(value) === String(defaultValue)) : options[0]);
    React.useEffect(() => {
        const value = defaultValue ? options.find(({ value }) => String(value) === String(defaultValue)) : options[0];
        setSelected(value);
        if (!!afterUpdate) {
            afterUpdate(value);
        }
    }, [defaultValue]);
    const handleUpdate = (event) => {
        console.log('event', event);
        setSelected(event);
        if (!!afterUpdate) {
            afterUpdate(event);
        }
    };
    return (_jsx(_Fragment, { children: _jsx(Listbox, { value: selected, onChange: (e) => handleUpdate(e), multiple: multiple, children: ({ open }) => (_jsxs("div", { className: "relative mt-1", children: [_jsxs(Listbox.Button, { className: `${!!open ? 'bg-neutral-50' : 'bg-neutral-100 border-neutral-200'} relative w-full shadow-sm py-2 pl-3 pr-10 text-left text-neutral-800 rounded-md cursor-default open:bg-neutral-50 active:ring-1 active:ring-offset-1 active:ring-blue-500 sm:text-sm border`, children: [_jsxs("span", { className: "block truncate", children: [selected?.name, " ", !selected && 'Select your option'] }), _jsx("span", { className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none", children: _jsx(SelectorIcon, { className: "w-5 h-5 text-primary", "aria-hidden": "true" }) })] }), _jsx(Transition, { as: React.Fragment, show: open, enter: "transition duration-100 ease-out", enterFrom: "transform scale-95 opacity-0", enterTo: "transform scale-100 opacity-100", leave: "transition duration-75 ease-out", leaveFrom: "transform scale-100 opacity-100", leaveTo: "transform scale-95 opacity-0", children: _jsx(Listbox.Options, { className: "absolute w-full py-1 mt-1 overflow-auto text-base bg-neutral-100 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50 py-[8px] border border-neutral-200", children: Array.isArray(options) && options.map((item) => (_jsx(Listbox.Option, { className: ({ active }) => `${active
                                    ? 'text-neutral-600 font-bold bg-primary-300'
                                    : 'text-neutral-800'}
                          cursor-default select-none relative py-2 pl-10 pr-4`, value: item, children: ({ selected, active }) => (_jsxs(_Fragment, { children: [_jsx("span", { className: `${selected ? 'font-medium' : 'font-normal'} block truncate`, children: item.name }), selected ? (_jsx("span", { className: `${active && 'text-neutral-600'}
                                absolute inset-y-0 left-0 flex items-center pl-3`, children: _jsx(CheckIcon, { className: "w-5 h-5", "aria-hidden": "true" }) })) : null] })) }, item.value))) }) })] })) }) }));
};
