import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { useForm } from '../Form/context';
import { UploadFileInput, TextInput, TextAreaInput, SelectInput, DefaultInput, CheckBoxInput, RadioboxInput, NumberInput, PickerInput, RCInput } from './components';
import { DatePicker, TimePicker } from '..';
export const Input = ({ type = 'text', id = 'text', variant, autoComplete = 'off', label, placeholder, disabled, populateOptions, maxLength, uploadFile, defaultValue, belongs_to, validation, icon, afterChange, options, hidden, debug = false, required, multiple }) => {
    const { fieldsState, formState } = useForm();
    const [value, setValue] = React.useState(defaultValue);
    const [dependencies, setDependencies] = React.useState([]);
    React.useEffect(() => {
        const field = fieldsState.map((fields) => fields.find((e) => e.id === id)).filter((e) => !!e)[0];
        field.value && setValue(field.value);
    }, []);
    React.useEffect(() => {
        if (belongs_to && populateOptions && formState) {
            (async () => {
                const parentValue = formState.map((field) => {
                    return field.id === belongs_to ? field.value : undefined;
                }).filter((item) => typeof item === 'string')[0];
                const options = await populateOptions({ value: parentValue, name: '' });
                setDependencies(options);
            })();
        }
    }, [formState]);
    if (!options && !dependencies && type === 'select')
        return _jsx(_Fragment, { children: "You are missing the options for Select" });
    if (!options && !dependencies && type === 'radiobox')
        return _jsx(_Fragment, { children: "You are missing the options for Radiobox" });
    const config = {
        id,
        debug,
        autoComplete,
        variant,
        validation,
        afterChange,
        defaultValue: value,
        maxLength,
        populateOptions,
        label,
        disabled,
        icon,
        placeholder,
        hidden,
        uploadFile,
        options: options ? options : dependencies,
        required,
        belongs_to,
        multiple
    };
    switch (type) {
        case 'text':
            return _jsx(TextInput, { config: { ...config, type } });
        case 'textarea':
            return _jsx(TextAreaInput, { config: { ...config, type } });
        case 'select':
            return _jsx(SelectInput, { config: { ...config, type } });
        case 'time':
            return _jsx(PickerInput, { config: { ...config, type }, component: TimePicker });
        case 'number':
            return _jsx(NumberInput, { config: { ...config, type } });
        case 'upload':
            return _jsx(UploadFileInput, { uploadFile: uploadFile, config: { ...config, type } });
        case 'datepicker':
            return _jsx(PickerInput, { config: { ...config, type }, component: DatePicker });
        case 'checkbox':
            return _jsx(CheckBoxInput, { config: { ...config, type } });
        case 'radiobox':
            return _jsx(RadioboxInput, { config: { ...config, type } });
        case 'rci':
            return _jsx(RCInput, { config: { ...config, type } });
        default:
            return _jsx(DefaultInput, { config: { ...config, type } });
    }
};
