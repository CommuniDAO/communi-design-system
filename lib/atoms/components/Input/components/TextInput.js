import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useForm } from '../../Form/context/Form';
import * as React from 'react';
import clsx from 'clsx';
import { CheckIcon, XIcon } from '@heroicons/react/solid';
import { Icon } from '../..';
export const TextInput = ({ config }) => {
    const { id, label, autoComplete, type, hidden, icon, placeholder, afterChange, validation, defaultValue, maxLength, disabled, required, mRef } = config;
    const [status, setStatus] = React.useState('EMPTY');
    const { updateForm } = useForm();
    const [value, setValue] = React.useState(defaultValue);
    // const updateStatus = async (value: 'VALID' | 'ERROR') => {
    //   setStatus(value)
    // }
    const validate = async (event) => {
        setValue(event);
        updateForm();
        const e = await validation?.fn(event);
        if (e.valid === true) {
            setStatus('VALID');
            afterChange({ id, value: event, type, label, status: 'VALID', message: e.message });
        }
        else if (e.valid === false) {
            setStatus('ERROR');
            afterChange({ id, value: event, type, label, status: 'ERROR', message: e.message });
        }
    };
    const inputStyle = clsx(`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-neutral-200 rounded-md text-neutral-800 bg-neutral-100`, status === 'VALID' && 'border-green-400 focus:ring-green-500 focus:border-green-500', status === 'ERROR' && 'border-red-400 focus:ring-red-500 focus:border-red-500', !!icon && 'pl-10');
    const iconStyle = clsx('absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400', status === 'VALID' && 'text-green-400', status === 'ERROR' && 'text-red-400');
    const iconStatus = (status) => {
        switch (status) {
            case 'VALID': return _jsx(CheckIcon, { className: "w-[20px] h-[20px]" });
            case 'ERROR': return _jsx(XIcon, { className: "w-[20px] h-[20px]" });
            default: return _jsx("div", { className: "origin-center animate-spin", children: _jsx(Icon, { name: "spinner" }) });
        }
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { children: [_jsx("label", { htmlFor: id, className: !hidden ? "block text-sm font-medium text-neutral-800" : 'hidden', children: label }), _jsxs("div", { className: "mt-1 relative", children: [_jsx("input", { disabled: disabled, type: !hidden ? 'text' : 'hidden', name: id, id: id, ref: mRef, readOnly: hidden, value: value, maxLength: maxLength, autoComplete: autoComplete, onChange: (e) => validate(e.target.value), className: inputStyle, placeholder: placeholder, required: required }), !!icon && !hidden &&
                            _jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-800", children: _jsx(Icon, { name: icon }) }), status !== 'EMPTY' && !hidden &&
                            _jsx("div", { className: iconStyle, children: iconStatus(status) })] })] }) }));
};
