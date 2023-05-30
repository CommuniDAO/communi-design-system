import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
export const Avatar = ({ imageUrl, size = 'medium', customCss }) => {
    const outside = clsx(size === 'xtiny' && 'ring-1', size === 'tiny' && 'ring-1', size === 'xs' && 'ring-1', size === 'small' && 'ring-1', size === 'medium' && 'ring-2', size === 'large' && 'ring-4', "relative w-fit rounded-full ring-neutral-100 shadow-xl shadow-inner");
    const style = clsx(!imageUrl && 'bg-red-400', size === 'xtiny' && 'h-[24px] w-[24px]', size === 'tiny' && 'h-[32px] w-[32px]', size === 'xs' && 'h-[40px] w-[40px]', size === 'small' && 'h-[60px] w-[60px]', size === 'medium' && 'h-[100px] w-[100px]', size === 'large' && 'h-[200px] w-[200px] sm:h-[100px] sm:w-[100px]', 'bg-cover bg-center rounded-full', `${customCss}`);
    return (_jsx("div", { className: outside, children: _jsx("div", { className: style, style: { backgroundImage: `url(${imageUrl})` } }) }));
};
