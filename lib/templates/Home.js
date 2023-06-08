import React from 'react';
import { Button } from "../shared";
import { Logo } from "../components/Logo";
// import communiLogo from '../assets/images/CommuniLogo.svg';

var DiscordLogin = function DiscordLogin(_ref) {
  var Component = _ref.component;
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-secondary-900 h-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center h-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[480px] mx-auto px-[30px] py-[15px] bg-neutral-100 rounded-[20px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[360px] mx-auto"
  }, /*#__PURE__*/React.createElement(Logo, null)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement(Button, {
    text: "Login with Discord",
    type: "link",
    to: "/verify",
    component: Component
  })))));
};
var WalletLogin = function WalletLogin(_ref2) {
  var openWallet = _ref2.openWallet;
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-secondary-900 h-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center h-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[480px] mx-auto px-[30px] py-[15px] bg-neutral-100 rounded-[20px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[360px] mx-auto"
  }, /*#__PURE__*/React.createElement(Logo, null)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement(Button, {
    text: "Wallet Login",
    type: "button",
    onClick: function onClick() {
      return openWallet();
    }
  })))));
};
var DefaultView = function DefaultView(_ref3) {
  var Component = _ref3.component,
    openWallet = _ref3.openWallet,
    signTransaction = _ref3.signTransaction;
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-secondary-900 h-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center h-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[480px] mx-auto px-[30px] py-[15px] bg-neutral-100 rounded-[20px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[360px] mx-auto"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement(Button, {
    text: "Send XDR",
    type: "button",
    onClick: function onClick() {
      return signTransaction("xdr", false);
    }
  }), /*#__PURE__*/React.createElement(Button, {
    text: "Wallet Login",
    type: "button",
    onClick: function onClick() {
      return openWallet();
    }
  }), /*#__PURE__*/React.createElement(Button, {
    text: "Logout",
    type: "link",
    to: "/logout",
    component: Component
  })))));
};
export var Home = function Home(_ref4) {
  var Component = _ref4.component,
    view = _ref4.view,
    openWallet = _ref4.openWallet,
    signTransaction = _ref4.signTransaction;
  switch (view) {
    case 'loginDiscordView':
      return /*#__PURE__*/React.createElement(DiscordLogin, {
        component: Component
      });
    case 'loginWalletView':
      return /*#__PURE__*/React.createElement(WalletLogin, {
        openWallet: openWallet
      });
    case 'defaultView':
      return /*#__PURE__*/React.createElement(DefaultView, {
        component: Component,
        signTransaction: signTransaction,
        openWallet: openWallet
      });
    default:
      return /*#__PURE__*/React.createElement(React.Fragment, null);
  }
};