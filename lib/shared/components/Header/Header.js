import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '../Button';
export const Header = ({ type = 'SECTION', section, page }) => {
    return (_jsxs("div", { className: "sm:flex sm:items-center sm:justify-between h-v8 text-neutral-800", children: [_jsx("div", { className: "text-4xl font-bold leading-6 text-primary", children: section?.title }), _jsx("div", { className: "mt-3 flex sm:mt-0 sm:ml-4", children: section?.navOptions &&
                    section.navOptions.map(({ title, action, icon }, key) => {
                        return (_jsx(Button, { text: title, icon: icon, size: "small", onClick: action }, key));
                    }) })] }));
};
