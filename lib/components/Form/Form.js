import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { DynamicForm, StepperForm } from './components';
import { FormProvider } from './context';
export const Form = ({ type = 'default', id, fields, action, debug = false, button, component: Component, }) => {
    const formAssert = (type, configuration) => {
        const { fields, button, action } = configuration;
        switch (type) {
            case 'stepper':
                return _jsx(StepperForm, { fields: fields, button: button, action: action, debug: debug });
            case 'dynamic':
                return _jsx(DynamicForm, { fields: fields, button: button, action: action, debug: debug });
            default:
                return _jsx(DynamicForm, { fields: fields, button: button, action: action, debug: debug });
        }
    };
    return (_jsx(_Fragment, { children: _jsxs(FormProvider, { fields: fields, action: !!action ? action : '', component: Component, children: [_jsx("input", { type: 'text', hidden: true, name: "id", id: "id", readOnly: true, defaultValue: id }), formAssert(type, {
                    fields,
                    action,
                    button
                })] }) }));
};
