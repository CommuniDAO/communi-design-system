import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
export const CheckBoxInput = ({ config }) => {
    const { id, label, autoComplete, placeholder, defaultValue, options, debug, required, type, mRef } = config;
    const [list, setList] = React.useState(options.map((obj) => ({ ...obj, active: false })));
    const [value, setValue] = React.useState('');
    React.useEffect(() => {
        updateValue();
    }, []);
    const updateValue = () => {
        const newList = [];
        list.map((item) => {
            if (item.active === true) {
                newList.push(item.value);
            }
        });
        setValue(newList.toString());
    };
    const handleUpdate = (data) => {
        list[data.value].active = !list[data.value].active;
        setList([...list]);
        updateValue();
    };
    return (_jsxs("div", { children: [_jsx("label", { htmlFor: id, className: "block text-sm font-medium text-neutral-800", children: label }), _jsx("input", { hidden: debug ? !debug : true, value: value, readOnly: true, autoComplete: 'off', name: id, id: id, ref: mRef }), _jsx("div", { className: "mt-1 flex flex-wrap w-full border border-neutral-100 space-x-2 text-center p-1.5 rounded-md bg-neutral-100 text-xs", children: list.map((item, key) => {
                    return (_jsx("div", { className: `flex-1 p-1 rounded-md cursor-pointer ${item.active
                            ? 'bg-secondary-400 text-secondary-100 font-bold'
                            : 'bg-neutral-100 text-neutral-800'}`, onClick: () => handleUpdate(item), children: item.name }, key));
                }) })] }));
};
