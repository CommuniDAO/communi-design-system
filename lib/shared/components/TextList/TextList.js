import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const TextList = ({ items }) => {
    return _jsx("div", { className: "grid grid-cols-3 gap-4 content-start", children: items?.map((item, key) => {
            return _jsxs("div", { children: [_jsx("div", { className: "text-[14px] text-neutral-800 font-bold", children: item[0] }), _jsx("div", { className: "text-[16.2px] text-neutral-900", children: item[1] })] }, key);
        }) });
};
