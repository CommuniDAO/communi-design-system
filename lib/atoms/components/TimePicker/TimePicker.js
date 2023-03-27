import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import clsx from 'clsx';
import { RadioGroup } from '@headlessui/react';
const hoursOptions = [
    { name: '00', value: 0 },
    { name: '01', value: 3600 },
    { name: '02', value: 7200 },
    { name: '03', value: 10800 },
    { name: '04', value: 14400 },
    { name: '05', value: 18000 },
    { name: '06', value: 21600 },
    { name: '07', value: 25200 },
    { name: '08', value: 28800 },
    { name: '09', value: 32400 },
    { name: '10', value: 36000 },
    { name: '11', value: 39600 },
];
const minutesOptions = [
    { name: '00', value: 0 },
    { name: '15', value: 900 },
    { name: '30', value: 1800 },
    { name: '45', value: 2700 },
];
export const TimePicker = ({ value, handleChange }) => {
    if (!!value) {
        const minutes = (value % 3600) / 60;
        const hours = Math.floor(value / 3600);
        console.log(`Time ${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}`);
    }
    const [hour, setHour] = React.useState(hoursOptions[0]);
    const [minute, setMinute] = React.useState(minutesOptions[0]);
    const updateData = (e, type) => {
        if (type === 'hour') {
            setHour(e);
            const value = e.value + minute.value === 0 ? String(0) : e.value + minute.value;
            handleChange({ name: `${e.name} - ${minute.name}`, value });
        }
        else if (type === 'minute') {
            setMinute(e);
            const value = e.value + hour.value === 0 ? String(0) : e.value + hour.value;
            handleChange({ name: `${hour.name} - ${e.name}`, value });
        }
    };
    const getStyles = ({ active, checked, disabled }) => clsx(active ? 'ring-2 ring-offset-2 ring-secondary-400' : '', checked
        ? 'bg-secondary-400 border-transparent text-white hover:bg-secondary-300'
        : 'bg-neutral-50 border-neutral-200 text-neutral-900 hover:bg-neutral-50', 'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1');
    // console.log('value', value)
    return (_jsx(_Fragment, { children: _jsxs("div", { children: [_jsx("div", { className: "text-neutral-800 text-paragraph-medium" }), _jsxs("div", { className: "flex flex-row space-x-[16px]", children: [_jsxs("div", { className: "grow", children: [_jsx("div", { className: "flex items-center justify-between", children: _jsx("h2", { className: "text-sm font-medium text-neutral-900", children: "Hours" }) }), _jsxs(RadioGroup
                                // value={hour}
                                , { 
                                    // value={hour}
                                    onChange: (e) => updateData(e, 'hour'), value: hour, 
                                    // onChange={setHour}
                                    className: "mt-2", children: [_jsx(RadioGroup.Label, { className: "sr-only", children: "Choose a memory option" }), _jsx("div", { className: "grid grid-cols-3 gap-3 sm:grid-cols-3", children: hoursOptions.map((option) => (_jsx(RadioGroup.Option, { value: option, className: (e) => getStyles(e), children: _jsx(RadioGroup.Label, { as: "span", children: option.name }) }, option.name))) })] })] }), _jsxs("div", { className: "w-4/12", children: [_jsx("div", { className: "flex items-center justify-between", children: _jsx("h2", { className: "text-sm font-medium text-neutral-900", children: "Minutes" }) }), _jsxs(RadioGroup, { value: minute, onChange: (e) => updateData(e, 'minute'), className: "mt-2", children: [_jsx(RadioGroup.Label, { className: "sr-only", children: "Choose a memory option" }), _jsx("div", { className: "grid grid-cols-3 gap-3 sm:grid-cols-1", children: minutesOptions.map((option) => (_jsx(RadioGroup.Option, { value: option, className: (e) => getStyles(e), children: _jsx(RadioGroup.Label, { as: "span", children: option.name }) }, option.name))) })] })] })] })] }) }));
};
