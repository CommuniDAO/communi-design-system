import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Input } from '../../index';
import { useForm } from '../context';
export const DynamicForm = ({ debug = false, button, }) => {
    const { fieldsState } = useForm();
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "space-y-4", children: fieldsState.map((fields, key) => _jsx("div", { children: fields.map(({ type, id, label, placeholder, autoComplete, required, uploadFile, icon, options, hidden = false, afterChange, populateOptions, belongs_to, disabled = false, defaultValue }, key) => _jsx(Input, { type: type, id: id, disabled: disabled, options: options, label: label, uploadFile: uploadFile, hidden: hidden, icon: icon, belongs_to: belongs_to, populateOptions: populateOptions, debug: debug, defaultValue: !!defaultValue ? defaultValue : '', autoComplete: autoComplete, placeholder: placeholder, required: required }, key)) }, key)) }), _jsx("div", { className: "pt-6", children: _jsx(Button, { text: button.text, type: "submit", rounded: "medium", size: button.size, icon: button.icon, loading: button.loading, variant: button.variant, customCss: button.customCss }) })] }));
};
