import { jsx as _jsx } from "react/jsx-runtime";
import { Input } from '~/src/atoms/components/Input';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
function mockFunction(value) {
    // console.log(value);
}
export default {
    component: Input,
    title: 'Data Handle / Input',
    args: {
        type: 'radiobox',
        id: 'email',
        label: 'Email',
        variant: 'full',
        options: [{ value: '1', name: 'desc' }],
    },
    decorators: [withDesign]
};
export const Radiobox = (args) => (_jsx(Input, { ...args }));
Radiobox.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
    }
};
