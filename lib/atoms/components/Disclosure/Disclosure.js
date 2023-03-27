import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import clsx from 'clsx';
import { Disclosure as DisclosureComponent } from '@headlessui/react';
import { Icon } from '..';
export const Disclosure = ({ items }) => {
    const style = clsx('flex flex-col space-y-[20px] w-full');
    return (_jsx("div", { className: style, children: items.map(({ title, text }, key) => {
            return (_jsx(DisclosureComponent, { children: ({ open }) => (_jsx(_Fragment, { children: _jsxs(DisclosureComponent.Button, { className: "w-full py-[15px] px-[30px] text-h4-normal-semi-bold text-neutral-800 border rounded-[4px] border-neutral-150", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("div", { children: title }), _jsx("div", { className: `${!!open && 'rotate-180'}`, children: _jsx(Icon, { name: "shootingArrowRight", size: "xlarge" }) })] }), _jsx("div", { children: _jsx(DisclosureComponent.Panel, { className: "pt-4 pb-2 text-left text-paragraph-large-medium text-neutral-500", children: text }) })] }) })) }, key));
        }) }));
};
