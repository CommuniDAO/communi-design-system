import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { DefaultGroup, VerticalGroup } from './components';
export const RadioGroup = ({ options, variant = 'horizontal', setValue }) => {
    const [selected, setSelected] = useState(options[0]);
    const handleSelection = (value) => {
        setValue && setValue(value);
        setSelected(value);
    };
    return (_jsx(_Fragment, { children: _jsxs(_Fragment, { children: [variant === 'horizontal' && _jsx(DefaultGroup, { handleSelection: handleSelection, options: options, selected: selected }), variant === 'vertical' && _jsx(VerticalGroup, { handleSelection: handleSelection, options: options, selected: selected })] }) }));
};
