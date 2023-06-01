import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
export const Container = ({ children, padding = 'none', border = 'none', height = 'small', overflow = false, customCss }) => {
    const style = clsx(padding === 'small' && 'px-2', height === '1/3' && 'h-v76', border === 'bottom' && 'border-b', overflow && 'overflow-y-scroll', 'border-solid border-primary border-collapse', `${customCss}`);
    return _jsx("div", { className: style, children: children });
};
