import React from 'react';
import { Button, Input } from "../../index";
import { useForm } from "../context";
export var DynamicForm = function DynamicForm(_ref) {
  var _ref$debug = _ref.debug,
    debug = _ref$debug === void 0 ? false : _ref$debug,
    button = _ref.button;
  var _useForm = useForm(),
    fieldsState = _useForm.fieldsState;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, fieldsState.map(function (fields, key) {
    return /*#__PURE__*/React.createElement("div", {
      key: key
    }, fields.map(function (_ref2, key) {
      var type = _ref2.type,
        id = _ref2.id,
        label = _ref2.label,
        placeholder = _ref2.placeholder,
        autoComplete = _ref2.autoComplete,
        required = _ref2.required,
        uploadFile = _ref2.uploadFile,
        icon = _ref2.icon,
        options = _ref2.options,
        _ref2$hidden = _ref2.hidden,
        hidden = _ref2$hidden === void 0 ? false : _ref2$hidden,
        afterChange = _ref2.afterChange,
        populateOptions = _ref2.populateOptions,
        belongs_to = _ref2.belongs_to,
        _ref2$disabled = _ref2.disabled,
        disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
        defaultValue = _ref2.defaultValue;
      return /*#__PURE__*/React.createElement(Input, {
        key: key,
        type: type,
        id: id,
        disabled: disabled,
        options: options,
        label: label,
        uploadFile: uploadFile,
        hidden: hidden,
        icon: icon,
        belongs_to: belongs_to,
        populateOptions: populateOptions,
        debug: debug,
        defaultValue: !!defaultValue ? defaultValue : '',
        autoComplete: autoComplete,
        placeholder: placeholder,
        required: required
      });
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: "pt-6"
  }, /*#__PURE__*/React.createElement(Button, {
    text: button.text,
    type: "submit",
    rounded: "medium",
    size: button.size,
    icon: button.icon,
    loading: button.loading,
    variant: button.variant,
    customCss: button.customCss
  })));
};