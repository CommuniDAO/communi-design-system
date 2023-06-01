import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { getFields } from '../utils';
export const FormContext = React.createContext({});
export const FormProvider = ({ children, fields, action, component: Form }) => {
    const formRef = React.createRef();
    const [formState, updateFormState] = React.useState(null);
    const fieldsState = getFields(fields);
    console.log('fieldsState', fieldsState);
    const updateForm = () => {
        updateFormState(getFormData());
    };
    const getFormData = () => ['input', 'textarea'].map((tagName) => {
        const htmlCollection = formRef?.current?.getElementsByTagName(tagName), formFields = Array.from(htmlCollection || []);
        if (formFields.length === 0)
            return;
        return formFields.map((field) => {
            return { id: field.id, value: field.value };
        });
    }).flat(1);
    React.useEffect(() => {
        updateFormState(getFormData());
    }, []);
    React.useEffect(() => {
        const newState = getFormData();
        if (JSON.stringify(newState) !== JSON.stringify(formState)) {
            updateFormState(newState);
        }
    }, [formState]);
    return (_jsx(FormContext.Provider, { value: { fieldsState, updateForm, formState }, children: Form
            ?
                _jsx(Form, { method: "post", action: action || '', ref: formRef, children: children })
            :
                _jsx("form", { method: "post", action: action || '', ref: formRef, children: children }) }));
};
export const useForm = () => {
    return React.useContext(FormContext);
};
