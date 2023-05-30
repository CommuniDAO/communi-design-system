import { jsx as _jsx } from "react/jsx-runtime";
import { Select } from '~/src/shared/components/Select';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
function fn(value) {
    // console.log(value);
}
const options = [
    { name: 'Wade Cooper', id: '1' },
    { name: 'Arlene Mccoy', id: '2' },
    { name: 'Devon Webb', id: '3' },
    { name: 'Tom Cook', id: '4' },
    { name: 'Tanya Fox', id: '5' },
    { name: 'Hellen Schmidt', id: '6' }
];
export default {
    component: Select,
    title: 'Data Handle / Select',
    argsTypes: {
        initialState: {
            control: 'array'
        }
    },
    args: {
        options: options,
        defaultValue: 'Arlene Mccoy'
    },
    decorators: [withDesign]
};
export const Default = {
    render: (args) => _jsx(Select, { ...args, register: fn, setValue: fn }),
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
        }
    }
};
