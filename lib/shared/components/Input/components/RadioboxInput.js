import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { RadioboxBasic, RadioboxFull, RadioboxCard } from './Radiobox';
export const RadioboxInput = ({ config, }) => {
    const { id, label, variant, autoComplete, placeholder, defaultValue, options, parentValue, afterChange, debug, required, type, mRef } = config;
    const [selected, setSelected] = React.useState(undefined);
    const handleUpdate = (event) => {
        setSelected(event);
        if (!!afterChange) {
            afterChange(event);
        }
    };
    const getRadio = ({ variant, defaultValue, options, handleUpdate, selected }) => {
        switch (variant) {
            case 'full':
                return _jsx(RadioboxFull, { selected: selected, handleUpdate: handleUpdate, options: options });
            case 'card':
                return _jsx(RadioboxCard, { selected: selected, handleUpdate: handleUpdate, options: options });
            default:
                return _jsx(RadioboxBasic, { selected: selected, handleUpdate: handleUpdate, options: options });
        }
    };
    React.useEffect(() => {
        setSelected(!!defaultValue ? options.find(({ id }) => id === defaultValue) : options[0]);
        if (!!afterChange) {
            afterChange(options[0]);
        }
    }, [parentValue]);
    return (_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-neutral-900", children: label }), _jsx("input", { hidden: debug ? !debug : true, value: selected?.value, readOnly: true, autoComplete: 'off', name: id, id: id, ref: mRef }), _jsx("fieldset", { className: "mt-4", children: getRadio({ variant, defaultValue, options, handleUpdate, selected }) })] }));
};
function CheckIcon(props) {
    return (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", ...props, children: _jsx("path", { d: "M7 13l3 3 7-7", stroke: "#fff", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }) }));
}
