function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
import React from 'react';
import { Layout } from "../shared";
var options = [{
  name: 'Wallet Connect',
  icon: 'walletConnect'
}, {
  name: 'Albedo',
  icon: 'albedo'
}, {
  name: 'Rabet',
  icon: 'rabet'
}, {
  name: 'Freighter',
  icon: 'freighter'
}];
export var ConnectWallet = function ConnectWallet(_ref) {
  _objectDestructuringEmpty(_ref);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: "url('https://imagedelivery.net/uDbEDRBQqhBXrrfuCRrATQ/cb3fca94-6358-47a3-6150-a10d0d7e1100/public')",
      backgroundSize: 'cover',
      height: '100vh',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Layout, null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center h-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-neutral-100 rounded-md p-[20px] w-full "
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("div", null, "Wallet Connect"), /*#__PURE__*/React.createElement("div", null, "Scan the QR with your phone from a wallet app"), /*#__PURE__*/React.createElement("div", null)), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("div", null, "Extensions"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "By Continue you accept our term of conditioons and our privacy policy")))))));
};