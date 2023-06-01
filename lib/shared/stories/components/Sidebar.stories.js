import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Sidebar, Button } from '~/src/shared/components';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
import * as React from 'react';
export default {
    component: Sidebar,
    title: 'Components / Sidebar',
    decorators: [withDesign]
};
export const Default = () => {
    const [open, setOpen] = React.useState(true);
    return _jsxs("div", { children: [_jsx("div", { className: "text-neutral-800", children: open ? 'OPEN' : 'CLOSED' }), _jsx(Button, { text: "toggle", onClick: () => setOpen(!open) }), _jsxs(Sidebar, { initialState: open, children: [_jsx("li", { children: "Home Page" }), _jsx("li", { children: "Example 1" }), _jsx("li", { children: "Example 2" }), _jsx("li", { children: "Example 3" })] })] });
};
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
    }
};
