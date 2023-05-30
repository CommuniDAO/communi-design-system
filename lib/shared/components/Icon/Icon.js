import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import { icons } from '../../../assets/icons';
const Path = ({ name }) => {
    return _jsx("path", { d: icons[`${name}`], className: "w-full", fill: 'currentColor' });
};
export const Icon = ({ name, color, viewBox = '0 0 64 64', size = 'small', customCss, }) => {
    const iconStyle = clsx(size === 'tiny' && 'w-[18px] h-[18px]', size === 'small' && 'w-[22px] h-[22px]', size === 'medium' && 'w-[30px] h-[30px]', size === 'large' && 'w-[36px] h-[36px]', size === 'xlarge' && 'w-[48px] h-[48px] flex justify-center', `${customCss}`);
    return (_jsx("svg", { viewBox: viewBox, className: iconStyle, fill: "currentColor", children: _jsx(Path, { name: name }) }));
};
