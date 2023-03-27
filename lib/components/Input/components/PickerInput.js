import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Button, Icon } from '../../';
import { Fragment } from 'react';
import { DateTime } from 'luxon';
export const PickerInput = ({ component: Component, config }) => {
    const { id, type, style, label, icon, autoComplete, placeholder, defaultValue, uploadFile, hidden, debug, options, required, mRef } = config;
    const [data, setData] = React.useState(undefined);
    // !!defaultValue ? (typeof defaultValue === 'number' ? new Date(defaultValue) : defaultValue) : new Date()
    // const [date, setDate] = React.useState<Date>(!!defaultValue ? (typeof defaultValue === 'number' ? new Date(defaultValue) : defaultValue) : new Date());
    const handleChange = (data) => {
        setData(data);
    };
    React.useEffect(() => {
        if (!!defaultValue) {
            if (type === 'datepicker') {
                // console.log('defaultValue', defaultValue.length)
                const date = DateTime.fromSeconds(defaultValue / 1000).startOf('day');
                const v = +new Date(date.toISO()) / 1000;
                return setData({ name: `${date.weekdayShort} ${date.day} ${date.monthLong}`, value: v.toString() });
            }
            // if (type === 'timepicker') return setData({name: startOfDay(defaultValue).toString(), value: formatISO(defaultValue, { representation: 'date' })});
        }
        else {
            if (type === 'datepicker') {
                const date = DateTime.fromJSDate(new Date).startOf('day');
                const v = +new Date(date.toISO()) / 1000;
                return setData({ name: `${date.weekdayShort} ${date.day} ${date.monthLong}`, value: v.toString() });
            }
        }
    }, [defaultValue]);
    // console.log("icon", icon)
    // +new Date(startOfDay(date).toString())
    return (_jsx(_Fragment, { children: _jsxs("div", { children: [_jsx("label", { htmlFor: id, className: "block text-sm font-medium text-neutral-800", children: label }), _jsx("input", { type: "text", value: data?.value ? data?.value : undefined, hidden: debug ? !debug : true, readOnly: true, autoComplete: 'off', name: id, id: id, ref: mRef }), _jsx(Popover, { className: "relative mt-1", children: ({ open }) => (_jsxs(_Fragment, { children: [_jsxs(Popover.Button, { className: `
                border border-neutral-200 relative w-full shadow-sm py-2 pl-3 pr-10 text-left text-neutral-800 bg-neutral-100 cursor-pointer sm:text-sm ${!open ? 'rounded-[6px]' : 'rounded-[6px]'}`, children: [_jsx("span", { className: `absolute inset-y-0 left-0 pl-2 flex items-center ${!open ? 'text-neutral-800' : 'text-primary-400'}`, children: _jsx(Icon, { name: icon }) }), _jsx("span", { className: "pl-7 pr-12", children: data?.name })] }), _jsx(Transition, { as: Fragment, enter: "transition ease-out duration-300", enterFrom: "opacity-0 translate-y-4", enterTo: "opacity-100 translate-y-0", leave: "transition ease-in duration-150", leaveFrom: "opacity-100 translate-y-0", leaveTo: "opacity-0 translate-y-4", children: _jsx(Popover.Panel, { className: "absolute z-50 w-full", children: _jsx("div", { className: "overflow-hidden", children: _jsxs("div", { className: "absolute bg-neutral-100 mt-[8px] p-[16px] rounded-[12px] border  w-full", children: [_jsx(Component, { value: data?.value, handleChange: handleChange, defaultValue: defaultValue, close: close }), _jsx(Popover.Button, { onClick: () => close(), className: "w-full", children: _jsx(Button, { text: "Close", size: "tiny", variant: "outline", as: "div", customCss: "w-full mt-4" }) })] }) }) }) })] })) })] }) }));
};
