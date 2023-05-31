import * as React from 'react';
import { DynamicForm, StepperForm } from "./components";
import { FormProvider } from "./context";
export var Form = function Form(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'default' : _ref$type,
    id = _ref.id,
    fields = _ref.fields,
    action = _ref.action,
    _ref$debug = _ref.debug,
    debug = _ref$debug === void 0 ? false : _ref$debug,
    button = _ref.button,
    Component = _ref.component;
  var formAssert = function formAssert(type, configuration) {
    var fields = configuration.fields,
      button = configuration.button,
      action = configuration.action;
    switch (type) {
      case 'stepper':
        return /*#__PURE__*/React.createElement(StepperForm, {
          fields: fields,
          button: button,
          action: action,
          debug: debug
        });
      case 'dynamic':
        return /*#__PURE__*/React.createElement(DynamicForm, {
          fields: fields,
          button: button,
          action: action,
          debug: debug
        });
      default:
        return /*#__PURE__*/React.createElement(DynamicForm, {
          fields: fields,
          button: button,
          action: action,
          debug: debug
        });
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormProvider, {
    fields: fields,
    action: !!action ? action : '',
    component: Component
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    hidden: true,
    name: "id",
    id: "id",
    readOnly: true,
    defaultValue: id
  }), formAssert(type, {
    fields: fields,
    action: action,
    button: button
  })));
};