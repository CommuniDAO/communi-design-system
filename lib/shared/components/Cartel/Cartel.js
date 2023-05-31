import React from 'react';
export var Cartel = function Cartel(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'basic' : _ref$variant,
    customCss = _ref.customCss,
    message = _ref.message,
    CTA = _ref.CTA;
  var _ref2 = message || {},
    title = _ref2.title,
    description = _ref2.description;
  switch (variant) {
    case 'basic':
      return /*#__PURE__*/React.createElement("div", {
        className: "flex flex-row justify-center p-[20px] bg-neutral-100 rounded-[8px]"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col space-y-[20px] w-[200px] text-center"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-neutral-800"
      }, title), /*#__PURE__*/React.createElement("div", {
        className: "text-neutral-600"
      }, description), /*#__PURE__*/React.createElement("div", {
        className: "h-[64px]"
      }, CTA)));
    case 'full':
      return /*#__PURE__*/React.createElement("div", {
        className: "border border-neutral-100 rounded-[20px] text-neutral-800 flex flex-row justify-between w-full"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-[300px] rounded-bl-[20px] rounded-tl-[20px] bg-cover bg-center",
        style: {
          backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0), #1C181E), url('https://imagedelivery.net/uDbEDRBQqhBXrrfuCRrATQ/f583905b-d36c-49e6-0f3b-edc3d40b3c00/public')"
        }
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col space-y-[20px] p-[40px] "
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-subheading-bold"
      }, title), /*#__PURE__*/React.createElement("div", {
        className: "text-p2-medium"
      }, description), /*#__PURE__*/React.createElement("div", {
        className: "h-[64px]"
      }, CTA))));
  }
};