import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Cell } from '../Cell';
export const Table = ({ header, data, component, background = 'default', customCss }) => {
    return (_jsx(_Fragment, { children: data.length !== 0 ? (_jsx("div", { className: `flex flex-col ${customCss}`, children: _jsx("div", { className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: _jsx("div", { className: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8", children: _jsx("div", { className: "shadow overflow-hidden border-b border-neutral-200 sm:rounded-lg", children: _jsxs("table", { className: "min-w-full divide-y divide-neutral-200", children: [_jsx("thead", { className: `${background === 'default' ? 'bg-neutral-100' : 'bg-neutral-150'}`, children: _jsx("tr", { children: header.map((item, key) => {
                                            return (_jsx("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider", children: item }, key));
                                        }) }) }), _jsx("tbody", { className: "bg-white divide-y divide-neutral-200", children: data.map((row, key) => {
                                        return (_jsx("tr", { children: row.map((column, key) => {
                                                return (_jsx("td", { className: `${background === 'default' ? 'bg-neutral-100' : 'bg-neutral-150'} text-neutral-800 whitespace-nowrap h-[64px]`, children: _jsx(Cell, { type: column.type, value: column.value, component: component }) }, key));
                                            }) }, key));
                                    }) })] }) }) }) }) })) : ('') }));
};
