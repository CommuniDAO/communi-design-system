var _excluded = ["srcObject"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
export var Video = function Video(_ref) {
  var srcObject = _ref.srcObject,
    props = _objectWithoutProperties(_ref, _excluded);
  var refVideo = React.useRef(null);
  React.useEffect(function () {
    if (!refVideo.current) return;
    refVideo.current.srcObject = srcObject;
  }, [srcObject]);
  return /*#__PURE__*/React.createElement("video", _extends({
    ref: refVideo
  }, props, {
    autoPlay: true,
    className: "w-full aspect-video bg-neutral-50 border border-neutral-150 rounded-[20px]"
  }));
};