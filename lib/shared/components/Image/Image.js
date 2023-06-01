import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
export const Image = ({ imageUrl, customCss, width, height, fullHeight = false }) => {
    const style = clsx('bg-cover bg-center w-full h-full object-center object-cover', `${customCss}`);
    return (_jsx("div", { className: `w-[200px] ${fullHeight ? 'h-full' : 'h-[200px]'}`, children: _jsx("img", { style: { height: `${height}px`, width: `${width}px` }, className: style, src: imageUrl, alt: "" }) }));
};
