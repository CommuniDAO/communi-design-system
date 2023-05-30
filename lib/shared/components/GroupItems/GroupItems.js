import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from '../Icon';
export const GroupItems = ({ items }) => {
    return _jsx("div", { className: "grid grid-cols-2 gap-4 content-start p-[8px]", children: items?.map((item, key) => {
            return _jsxs("div", { className: "flex space-x-[4px] text-neutral-800", children: [_jsx("div", { children: _jsx(Icon, { name: item[0] }) }), _jsx("div", { className: "text-p3-bold text-neutral-900", children: item[1] })] }, key);
        }) });
};
