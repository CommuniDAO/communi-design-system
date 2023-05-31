function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';
import { getFields } from "../utils";
export var FormContext = /*#__PURE__*/React.createContext({});
export var FormProvider = function FormProvider(_ref) {
  var children = _ref.children,
    fields = _ref.fields,
    action = _ref.action,
    Form = _ref.component;
  var formRef = /*#__PURE__*/React.createRef();
  var _React$useState = React.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    formState = _React$useState2[0],
    updateFormState = _React$useState2[1];
  var fieldsState = getFields(fields);
  console.log('fieldsState', fieldsState);
  var updateForm = function updateForm() {
    updateFormState(getFormData());
  };
  var getFormData = function getFormData() {
    return ['input', 'textarea'].map(function (tagName) {
      var _formRef$current;
      var htmlCollection = formRef === null || formRef === void 0 ? void 0 : (_formRef$current = formRef.current) === null || _formRef$current === void 0 ? void 0 : _formRef$current.getElementsByTagName(tagName),
        formFields = Array.from(htmlCollection || []);
      if (formFields.length === 0) return;
      return formFields.map(function (field) {
        return {
          id: field.id,
          value: field.value
        };
      });
    }).flat(1);
  };
  React.useEffect(function () {
    updateFormState(getFormData());
  }, []);
  React.useEffect(function () {
    var newState = getFormData();
    if (JSON.stringify(newState) !== JSON.stringify(formState)) {
      updateFormState(newState);
    }
  }, [formState]);
  return /*#__PURE__*/React.createElement(FormContext.Provider, {
    value: {
      fieldsState: fieldsState,
      updateForm: updateForm,
      formState: formState
    }
  }, Form ? /*#__PURE__*/React.createElement(Form, {
    method: "post",
    action: action || '',
    ref: formRef
  }, children) : /*#__PURE__*/React.createElement("form", {
    method: "post",
    action: action || '',
    ref: formRef
  }, children));
};
export var useForm = function useForm() {
  return React.useContext(FormContext);
};