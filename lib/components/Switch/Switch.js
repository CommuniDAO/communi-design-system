import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { Switch as SwitchComponent } from '@headlessui/react';
export const Switch = ({ onChange }) => {
    const [enabled, setEnabled] = React.useState(false);
    const toggleAction = () => {
        setEnabled(!enabled);
        onChange();
    };
    return (_jsx(SwitchComponent, { checked: enabled, onChange: toggleAction, className: `${enabled ? 'bg-blue-600' : 'bg-gray-200'} relative inline-flex items-center h-6 rounded-full w-11`, children: _jsx("span", { className: `${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full` }) }));
};
