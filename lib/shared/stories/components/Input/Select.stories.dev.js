import { jsx as _jsx } from "react/jsx-runtime";
import { Input } from '~/src/shared/components/Input';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
function mockFunction(value) {
    // console.log(value);
}
export default {
    component: Input,
    title: 'Data Handle / Input',
    args: {
        type: 'select',
        options: [{ value: '1', name: 'desc' }],
        id: 'options',
        label: 'Select one option',
    },
    decorators: [withDesign]
};
export const Select = (args) => (_jsx(Input, { ...args }));
Select.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
    }
};
