import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button } from '../shared';
import { Logo } from '../components/Logo';
export const Home = ({ component: Component, session }) => {
    return (_jsx(_Fragment, { children: session ? (_jsx("div", { className: "bg-secondary-900 h-screen", children: _jsx("div", { className: "flex items-center h-screen", children: _jsxs("div", { className: "w-[480px] mx-auto px-[30px] py-[15px] bg-neutral-100 rounded-[20px]", children: [_jsx("div", { className: "w-[360px] mx-auto" }), _jsx("div", { className: "flex flex-col", children: _jsx(Button, { text: "Logout", type: "link", to: "/logout", component: Component }) })] }) }) })) : (_jsx("div", { className: "bg-secondary-900 h-screen", children: _jsx("div", { className: "flex items-center h-screen", children: _jsxs("div", { className: "w-[480px] mx-auto px-[30px] py-[15px] bg-neutral-100 rounded-[20px]", children: [_jsx("div", { className: "w-[360px] mx-auto", children: _jsx(Logo, {}) }), _jsx("div", { className: "flex flex-col", children: _jsx(Button, { text: "Login with Discord", type: "link", to: "/verify", component: Component }) })] }) }) })) }));
};
