import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { Tab as TabComponent } from '@headlessui/react';
import clsx from 'clsx';
import { Icon } from '..';
export const Tab = ({ options, orientation = 'horizontal' }) => {
    const [navigation] = React.useState(options);
    const listStyle = clsx(orientation === 'horizontal' &&
        'py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3 space-y-2', orientation === 'vertical' && 'flex p-1 space-x-1 bg-blue-900/20 rounded-xl');
    const panelStyle = clsx(orientation === 'horizontal' && 'flex flex-1');
    const gridStyle = {
        right: clsx(orientation === 'horizontal' && 'space-y-6 sm:px-6 lg:px-0 lg:col-span-9'),
        left: clsx(orientation === 'horizontal' && 'lg:grid lg:grid-cols-12 lg:gap-x-5 ')
    };
    const highlightPanel = clsx(false &&
        `bg-white rounded-xl p-3 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60`);
    return (_jsx(_Fragment, { children: _jsx("div", { className: gridStyle.left, children: _jsxs(TabComponent.Group, { children: [_jsx(TabComponent.List, { as: "aside", className: listStyle, children: options.map(({ name, icon }) => (_jsxs(TabComponent, { as: "nav", className: ({ selected }) => clsx('text-primary border border-primary hover:text-primary-hover hover:bg-secondary-400-hover cursor-pointer group rounded-md px-3 py-2 flex items-center text-sm font-medium', selected ? 'bg-secondary-400 text-background' : 'text-blue-100'), children: [icon && (_jsx(Icon, { name: icon.name, size: "medium", customCss: "mr-2" })), name && _jsx("span", { className: "py-0.5 px-1", children: name })] }, name))) }), _jsx("div", { className: gridStyle.right, children: _jsx("div", { className: panelStyle, children: _jsx(TabComponent.Panels, { className: "w-full", children: Object.values(navigation).map((item, idx) => (_jsx(TabComponent.Panel, { className: highlightPanel, children: _jsx(item.view, {}) }, idx))) }) }) })] }) }) }));
};
