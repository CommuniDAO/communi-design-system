import { jsx as _jsx } from "react/jsx-runtime";
import { Dropdown } from '~/src/atoms/components/Dropdown';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
const items = [
    { text: 'Edit', type: 'button' },
    { text: 'Duplicate', type: 'button' }
];
export default {
    component: Dropdown,
    title: 'Development / Dropdown',
    argsTypes: {
        items: {
            control: 'array'
        },
        button: {
            control: 'string'
        }
    },
    args: { items, button: { icon: 'user' } },
    decorators: [withDesign]
};
export const Default = (args) => _jsx(Dropdown, { ...args });
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
    }
};
