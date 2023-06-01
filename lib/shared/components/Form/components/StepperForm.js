import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { Button, Input } from '../../index';
import { useForm } from '../context';
import clsx from 'clsx';
export const StepperForm = ({ fields, debug = false, button, }) => {
    const maxStep = fields.length - 1;
    const [step, setStep] = React.useState(0);
    const { fieldsState, updateForm, formState } = useForm();
    const [validation, setValidation] = React.useState(null);
    const [allowance, setAllowance] = React.useState(false);
    const nextStep = ({ key }) => {
        if (step <= maxStep) {
            setStep(step + 1);
            setAllowance(false);
        }
    };
    // This effect checks for Input validations updates on every onChange
    React.useEffect(() => {
        if (fieldsState.length > 0 && step !== fieldsState.length) {
            (async () => {
                // Validating all fields in the current step
                const validationState = fieldsState[step].map(async (field, key) => {
                    // If has no validation function return true
                    if (field.validation?.fn === undefined)
                        return true;
                    // If has no formState yet return false
                    if (formState === null)
                        return false;
                    // Get the value of the field from the formState
                    const { value } = formState.find(({ id }) => id === field.id);
                    console.log('value', value);
                    // Run the validation function
                    return await field.validation.fn(value);
                });
                // Wait for all validations to finish
                const result = await Promise.all(validationState);
                console.log('RESULT', result);
                // Allow to continue to next step if all validations are true
                setAllowance(result.every(e => e === true || e.valid === true));
            })();
        }
        // validate every time the formState changes
    }, [formState, allowance]);
    const goBack = () => {
        if (step >= 1) {
            setStep(step + -1);
            setAllowance(true);
        }
    };
    const barContainer = clsx(`grid gap-[4px] grid-cols-${maxStep + 2}`);
    return (_jsx(_Fragment, { children: step === fieldsState.length ?
            _jsxs(_Fragment, { children: [_jsx("div", { className: 'text-subheading-bold text-neutral-800 mb-[20px]', children: "Review details" }), _jsxs("div", { className: "space-y-[8px]", children: [fieldsState.map((fields, key) => _jsx("div", { children: fields.map(({ id, label }, key) => {
                                    // console.log('id', label)
                                    const { value } = formState.find(({ id: formId }) => formId === id);
                                    return _jsx("div", { children: _jsxs("div", { className: "text-neutral-800", children: [label, ": ", value] }) }, key);
                                }) }, key)), formState.map(({ id, value }, key) => _jsx("input", { hidden: true, id: id, name: id, defaultValue: value }, key))] }), _jsxs("div", { className: "pt-6 flex flex-col space-y-[20px]", children: [_jsxs("div", { className: "flex flex-row justify-start space-x-[8px]", children: [_jsx(Button, { text: button.text, type: "submit", rounded: "medium", variant: button.variant, customCss: button.customCss }), _jsx(Button, { onClick: () => goBack(), text: "back", variant: 'basic' })] }), _jsxs("div", { className: "flex flex-col space-y-[8px]", children: [_jsxs("div", { children: [_jsx("span", { className: "text-green-400 text-p2-bold", children: step }), _jsxs("span", { className: "text-green-200 text-p2-medium pl-[2px]", children: ["/", maxStep + 1] })] }), _jsx("div", { className: barContainer, children: _jsx("div", { className: `bg-green-400 rounded-[2px] h-[4px] col-span-${step + 1}` }) })] })] })] })
            :
                _jsxs("div", { className: "flex flex-col justify-between h-[420px]", children: [fieldsState.map((fields, key) => _jsx(_Fragment, { children: _jsx("div", { className: step !== key ? 'hidden' : 'flex flex-col space-y-[12px]', children: fields.map(({ type, id, label, placeholder, autoComplete, required, icon, uploadFile, options, hidden = false, afterChange, validation, maxLength, variant, populateOptions, belongs_to, disabled = false, defaultValue, title, description, multiple }) => {
                                    return _jsxs(_Fragment, { children: [title && _jsx("div", { className: "text-subheading-bold text-neutral-800", children: title }), description && _jsx("div", { className: "text-p3-medium text-neutral-400", children: description }), _jsx(Input, { type: type, id: id, disabled: disabled, label: label, options: options, afterChange: type === 'select' || type === 'radiobox' ? afterChange : setValidation, maxLength: maxLength, variant: variant, uploadFile: uploadFile, icon: icon, validation: validation, belongs_to: belongs_to, populateOptions: populateOptions, hidden: step !== key ? true : hidden, debug: debug, defaultValue: !!defaultValue ? defaultValue : '', autoComplete: autoComplete, placeholder: placeholder, required: required, multiple: multiple }, key)] });
                                }) }) })), _jsxs("div", { className: "pt-6 flex flex-col space-y-[20px]", children: [_jsxs("div", { className: "flex flex-row justify-start space-x-[8px]", children: [_jsx(Button, { onClick: () => nextStep({ data: fields }), text: "next", variant: "primary", disabled: !Boolean(allowance) }), step >= 1 && _jsx(Button, { onClick: () => goBack(), text: "back", variant: 'basic' })] }), _jsxs("div", { className: "flex flex-col space-y-[8px]", children: [_jsxs("div", { children: [_jsx("span", { className: "text-neutral-800 text-p2-bold", children: step + 1 }), _jsxs("span", { className: "text-neutral-400 text-p2-medium pl-[2px]", children: ["/", maxStep + 1] })] }), _jsxs("div", { className: barContainer, children: [_jsx("div", { className: `bg-primary-400 rounded-[2px] h-[4px] col-span-${step + 1}` }), _jsx("div", { className: `bg-neutral-400 rounded-[2px] h-[4px] col-span-${maxStep - step + 1}` })] })] })] })] }) }));
};
