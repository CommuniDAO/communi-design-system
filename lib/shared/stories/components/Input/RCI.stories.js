import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { Input } from '~/src/shared/components/Input';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
function mockFunction(value) {
    // console.log(value);
}
const checkCodeApiMock = (code) => {
    return new Promise((r) => setTimeout(r, 350, code === '123456'));
};
export default {
    component: Input,
    title: 'Data Handle / Input',
    args: {
        type: 'rci',
        id: 'code',
        maxLength: 6
    },
    decorators: [withDesign]
};
export const RCI = {
    render: (args) => {
        const [state, setState] = React.useState('input');
        const checkCodeApiMock = (code) => {
            if (code === '123456') {
                setState('success');
            }
            else {
                setState('error');
            }
        };
        return (_jsx(Input, { ...args, validation: { state: state, fn: checkCodeApiMock } }));
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
        }
    }
};
