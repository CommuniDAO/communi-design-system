import { jsx as _jsx } from "react/jsx-runtime";
import { Cell } from '../Cell';
export const List = ({ data, component, background = 'default' }) => {
    return (_jsx("div", { className: `text-paragraph-medium-medium text-neutral-800 shadow sm:rounded-[20px] ${background === 'default' ? 'bg-neutral-100' : 'bg-neutral-150'} overflow-hidden`, children: _jsx("ul", { role: "list", className: "divide-y divide-neutral-50", children: data.map((row, key) => (_jsx("li", { className: "", children: _jsx("div", { className: "flex items-center justify-between last:pr-[16px]", children: row.map((item, key) => {
                        return (_jsx("div", { className: "", children: _jsx(Cell, { value: item.value, type: item.type, component: component }) }, key));
                    }) }) }, key))) }) }));
};
