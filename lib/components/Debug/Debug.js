import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export const Debug = ({ children, customCss }) => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: `mt-[40px] p-[20px] bg-neutral-150 ${customCss} border rounded-[3px] border-solid border-neutral-200`, children: [_jsx("div", { className: "text-neutral-800 font-bold", children: "DEBUG" }), _jsx("div", { className: "bg-neutral-200  border border-neutral-300 rounded-[2px] px-[32px] py-[16px] text-neutral-600 flex flex-col space-y-[4px", children: children })] }) }));
};
