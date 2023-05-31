import * as React from 'react';
export var TimeInput = function TimeInput(_ref) {
  var config = _ref.config;
  var id = config.id,
    label = config.label,
    type = config.type,
    autoComplete = config.autoComplete,
    hidden = config.hidden,
    placeholder = config.placeholder,
    defaultValue = config.defaultValue,
    required = config.required,
    mRef = config.mRef;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: !hidden ? "block text-sm font-medium text-neutral-800" : 'hidden'
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "mt-1"
  }, /*#__PURE__*/React.createElement("input", {
    type: !hidden ? type : 'hidden',
    name: id
    // name="hh%3Amm"
    ,
    id: id,
    ref: mRef
    // step="5"
    ,
    onChange: function onChange() {
      return console.log('Changing...');
    },
    readOnly: hidden,
    autoComplete: autoComplete,
    className: "shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-neutral-200 rounded-md text-neutral-800 bg-neutral-100",
    placeholder: placeholder,
    defaultValue: defaultValue,
    required: required
  }))));
};