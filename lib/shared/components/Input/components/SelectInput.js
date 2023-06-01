import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Select } from '../../Select';
import { useForm } from '../../Form/context';
export const SelectInput = ({ config }) => {
    const { updateForm } = useForm();
    const { id, label, defaultValue, options, required, debug, mRef, belongs_to, populateOptions, multiple, hidden } = config;
    const [value, setValue] = React.useState(defaultValue);
    React.useEffect(() => {
        // Check if parent options has changed
        const hasValue = options.find((option) => `${option.value}` === value);
        if (!hasValue && options.length > 0) {
            setValue(options[0].value);
        }
    }, [options]);
    const handleChange = (e) => {
        if (e?.value) {
            setValue(`${e.value}`);
            updateForm();
        }
    };
    return (_jsxs(_Fragment, { children: [!hidden &&
                _jsx("label", { htmlFor: id, className: "block text-sm font-medium text-neutral-800", children: label }), _jsx("input", { hidden: hidden ? true : !debug ? true : false, value: value, readOnly: true, autoComplete: 'off', name: id, id: id }), !hidden &&
                _jsx(Select, { type: "input", id: id, mRef: mRef, afterUpdate: handleChange, defaultValue: value, debug: debug, options: options ? options : [], multiple: multiple })] }));
};
