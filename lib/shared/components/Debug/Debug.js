import React from 'react';
export var Debug = function Debug(_ref) {
  var children = _ref.children,
    customCss = _ref.customCss;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "mt-[40px] p-[20px] bg-neutral-150 ".concat(customCss, " border rounded-[3px] border-solid border-neutral-200")
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-neutral-800 font-bold"
  }, "DEBUG"), /*#__PURE__*/React.createElement("div", {
    className: "bg-neutral-200  border border-neutral-300 rounded-[2px] px-[32px] py-[16px] text-neutral-600 flex flex-col space-y-[4px"
  }, children)));
};