import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
export const Layout = ({ children, variant = 'small', customCss = '' }) => {
    const style = clsx(variant === 'small' && 'sm:max-w-screen-sm', variant === 'large' && 'sm:max-w-screen-lg', variant === 'full' && 'sm:max-w-screen-2xl', `max-w-screen-sm w-full mx-auto ${customCss}`);
    return (_jsx("div", { className: style, children: children }));
};
