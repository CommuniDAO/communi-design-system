import React from 'react';
import { Button } from "../shared";
import { Logo } from "../components/Logo";
// import communiLogo from '../assets/images/CommuniLogo.svg';

export var Home = function Home(_ref) {
  var Component = _ref.component,
    session = _ref.session;
  return /*#__PURE__*/React.createElement(React.Fragment, null, session ? /*#__PURE__*/React.createElement("div", {
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
    text: "Logout",
    type: "link",
    to: "/logout",
    component: Component
  }))))) : /*#__PURE__*/React.createElement("div", {
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
  }))))));
};