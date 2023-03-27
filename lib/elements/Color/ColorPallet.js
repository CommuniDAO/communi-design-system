import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const ColorPallet = ({ colors, theme }) => {
    return (_jsx("div", { className: theme === 'light' ? 'theme-light' : 'theme-midnight', children: _jsx("div", { className: "flex flex-col", children: colors.map(({ name, style }) => {
                return (_jsxs("div", { className: "flex flex-1", children: [_jsx("div", { className: "w-24", children: name }), _jsx("div", { className: `${style} w-full h-8` })] }));
            }) }) }));
};
