import { jsx as _jsx } from "react/jsx-runtime";
export const Text = ({ content, fontSize, }) => {
    return _jsx("div", { className: "text-p3-medium text-neutral-800 p-[8px]", style: { fontSize: `${fontSize}px` }, children: content });
};
