import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import clsx from 'clsx';
import { Avatar } from '../Avatar';
export const Person = ({ component: Component, imageUrl, fullname, details, variant = 'default', to, customCss }) => {
    const variantAssert = () => {
        switch (variant) {
            case 'landscape':
                return _jsxs("div", { className: "flex flex-col space-y-[8px] m-[8px] w-fit", children: [_jsx("div", { className: "mx-auto", children: _jsx(Avatar, { imageUrl: imageUrl, size: "tiny" }) }), _jsx("div", { children: _jsx("span", { className: "text-p3-bold text-neutral-800", children: fullname }) })] });
            case 'lab':
                return _jsxs("div", { className: "flex space-x-[16px] m-[8px] w-fit", children: [_jsx("div", { children: _jsx(Avatar, { imageUrl: imageUrl, size: "medium" }) }), _jsx("div", { className: "flex flex-col-reverse", children: _jsxs("div", { children: [_jsx("div", { className: "text-p2-bold text-neutral-800", children: fullname }), _jsx("div", { className: "text-caption-bold text-primary-500", children: details })] }) })] });
            case 'profile':
                return _jsxs("div", { className: "flex space-x-[16px] m-[8px] h-fit w-fit", children: [_jsx("div", { children: _jsx(Avatar, { imageUrl: imageUrl, size: "medium" }) }), _jsxs("div", { className: "grid content-center", children: [_jsx("div", { className: "text-p2-bold text-neutral-800", children: fullname }), _jsx("div", { className: "text-caption-bold text-primary-500", children: details })] })] });
            case 'card':
                return _jsxs("div", { className: "flex space-x-[8px] w-fit", children: [_jsx(Avatar, { imageUrl: imageUrl, size: "xtiny" }), _jsx("div", { children: _jsx("div", { className: "mt-[2px] text-p3-bold text-neutral-800 align-middle", children: fullname }) })] });
            default:
                return _jsxs("div", { className: "flex space-x-4 w-fit", children: [_jsx(Avatar, { imageUrl: imageUrl, size: "tiny" }), _jsx("div", { children: _jsx("div", { className: "mt-[5px] text-p3-bold text-neutral-800 align-middle", children: fullname }) })] });
        }
    };
    switch (typeof to) {
        case 'string':
            if (!!Component)
                return _jsx(Component, { to: `/${to}`, children: variantAssert() });
        default:
            return variantAssert();
    }
};
