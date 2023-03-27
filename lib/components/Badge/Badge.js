import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import clsx from 'clsx';
export const Badge = ({ title, variant = 'secondary', size = 'small' }) => {
    const style = clsx(size === 'small' && 'py-[4px] px-[8px] text-caption-bold', size === 'large' && 'py-[4px] px-[8px] text-caption-bold', variant === 'secondary' && 'bg-secondary-300 text-neutral-800', 'inline-flex items-center rounded-[4px] font-medium');
    return (_jsx(_Fragment, { children: _jsx("span", { className: style, children: title }) }));
};
