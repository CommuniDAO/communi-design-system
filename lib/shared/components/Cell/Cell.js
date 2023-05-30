import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, Dropdown, Person } from '..';
// type DropdownItemsI = {
//   title: string;
//   type: 'button' | 'link';
//   action?: () => void;
//   to?: string;
// }[];
export const Cell = ({ type, value, component: Component }) => {
    const handleClick = () => {
        // runSound()
        if (type === 'button')
            value?.onClick(value?.content);
    };
    const cellAssert = (type, value) => {
        switch (type) {
            case 'simple':
                return (_jsx("div", { className: "text-paragraph-small-medium px-6 py-4", children: value }));
            case 'person':
                return (_jsx("div", { className: "px-[16px]", children: _jsx(Person, { imageUrl: value.avatar_url, fullname: value.first_name }) }));
            case 'description':
                return (_jsxs("div", { className: "px-6 py-4", children: [_jsx("div", { className: "text-sm text-neutral-800", children: value.title }), _jsx("div", { className: "text-sm text-neutral-500", children: value.description })] }));
            case 'extended':
                return (_jsxs("div", { className: "flex items-center px-6 py-4", children: [_jsx("div", { className: "flex-shrink-0 h-10 w-10", children: _jsx("img", { className: "h-10 w-10 rounded-full", src: value.imageUrl, alt: "" }) }), _jsxs("div", { className: "ml-4", children: [_jsx("div", { className: "text-sm font-medium text-neutral-800", children: value.title }), _jsx("div", { className: "text-sm text-neutral-500", children: value.description })] })] }));
            case 'button':
                return _jsx(_Fragment, { children: _jsx(Button, { size: "tiny", text: value.text, onClick: () => handleClick(), ...value }) });
            case 'internal_link':
                if (!!Component)
                    return _jsx(Component, { to: value.to, children: value.text });
            case 'link':
                return _jsx("a", { href: value.to, children: value.text });
            case 'badge':
                return _jsx(_Fragment, {});
            case 'icon':
                return _jsx(_Fragment, {});
            case 'dropdown':
                return (_jsx("div", { className: "", children: _jsx(Dropdown, { button: { icon: 'dots', size: 'small', variant: 'basic' }, items: value, component: Component }) }));
            case 'image':
                return (_jsx("div", { className: "flex h-[64px] px-6 py-4", style: {
                        backgroundImage: `linear-gradient(to left, rgba(44, 51, 53, 1), rgba(44, 51, 53, 0.5), rgba(44, 51, 53, 0.5), rgba(44, 51, 53, 0.2)), url('${value.imageUrl}')`,
                        backgroundSize: 'cover'
                    }, children: value.text }));
            default:
                return _jsx(_Fragment, {});
        }
    };
    return cellAssert(type, value);
};
