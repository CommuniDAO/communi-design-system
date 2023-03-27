import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
const steps = [
    { name: 'Step 1', href: '#', status: 'complete' },
    { name: 'Step 2', href: '#', status: 'current' },
    { name: 'Step 3', href: '#', status: 'upcoming' },
    { name: 'Step 4', href: '#', status: 'upcoming' }
];
export const Steps = () => {
    return (_jsxs("nav", { className: "flex items-center justify-center", "aria-label": "Progress", children: [_jsxs("p", { className: "text-sm font-medium", children: ["Step ", steps.findIndex((step) => step.status === 'current') + 1, " of", ' ', steps.length] }), _jsx("ol", { className: "ml-8 flex items-center space-x-5", children: steps.map((step) => (_jsx("li", { children: step.status === 'complete' ? (_jsx("a", { href: step.href, className: "block w-2.5 h-2.5 bg-indigo-600 rounded-full hover:bg-indigo-900" })) : step.status === 'current' ? (_jsxs("a", { href: step.href, className: "relative flex items-center justify-center", "aria-current": "step", children: [_jsx("span", { className: "absolute w-5 h-5 p-px flex", "aria-hidden": "true", children: _jsx("span", { className: "w-full h-full rounded-full bg-indigo-200" }) }), _jsx("span", { className: "relative block w-2.5 h-2.5 bg-indigo-600 rounded-full", "aria-hidden": "true" })] })) : (_jsx("a", { href: step.href, className: "block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400" })) }, step.name))) })] }));
};
