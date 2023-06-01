import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
const Step = ({ component: Component, options }) => {
    return _jsx(Component, { options: options });
};
export const Stepper = ({ type = 'radio', steps }) => {
    const [current, setStep] = React.useState(0);
    return (_jsxs("div", { children: [_jsx(Step, { component: steps[current].component, options: steps[current].options }), steps.indexOf(steps[current]) >= 0 && (_jsx("button", { onClick: () => setStep(current + 1), children: "Next" }))] }));
};
