import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '../shared/components/Button';
export const AdminHeader = ({ menu, component: Component, }) => {
    return (_jsxs("div", { className: "flex justify-between bg-neutral-400 border-neutral-500 border-[4px] rounded-[8px] h-[80px] px-[20px]", children: [_jsx("div", { className: "flex items-center justify-start", children: menu.map((item) => {
                    return (_jsx(Button, { text: item.text, variant: "basic", icon: item.icon, to: item.to, component: Component }));
                }) }), _jsx("div", { className: "flex items-center", children: _jsx(Button, { icon: "Clockwork", customCss: 'rounded-[100px]', size: "small", to: "/admin/settings" }) })] }));
};
