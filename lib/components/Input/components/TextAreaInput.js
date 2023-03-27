import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
export const TextAreaInput = ({ config }) => {
    const { id, label, autoComplete, placeholder, defaultValue, maxLength = 500, required, } = config;
    const [count, setCount] = React.useState(0);
    return (_jsx(_Fragment, { children: _jsxs("div", { children: [_jsx("label", { htmlFor: id, className: "block text-sm font-medium text-neutral-800", children: label }), _jsx("div", { className: "mt-1", children: _jsx("textarea", { id: id, name: id, rows: 3, autoComplete: autoComplete, maxLength: maxLength, onChange: e => setCount(e.target.value.length), className: "resize-none shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full text-neutral-800 sm:text-sm border border-neutral-200 bg-neutral-100 rounded-md", placeholder: placeholder, defaultValue: defaultValue, required: required }) }), _jsxs("div", { className: "text-primary-500", children: [count, "/", maxLength] })] }) }));
};
