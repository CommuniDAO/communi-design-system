import { jsx as _jsx } from "react/jsx-runtime";
import { Disclosure } from '~/src/atoms/components/Disclosure';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
const items = [
    { title: 'About us', text: 'We are ...' },
    { title: 'How we work', text: 'Learn more ...' }
];
export default {
    component: Disclosure,
    title: 'Components / Disclosure',
    decorators: [withDesign],
    argsTypes: {
        items: {
            control: 'array'
        }
    },
    args: { items }
};
export const Default = (args) => _jsx(Disclosure, { ...args });
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
    }
};
