import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
export const Search = ({ imageUrl }) => {
    const style = clsx('w-16 h-16 bg-cover bg-center rounded-full');
    return (_jsx("div", { className: style, style: { backgroundImage: `url(${imageUrl})` } }));
};
