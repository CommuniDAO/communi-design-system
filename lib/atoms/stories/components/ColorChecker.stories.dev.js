import { jsx as _jsx } from "react/jsx-runtime";
import { ColorChecker } from '~/src/atoms/components/ColorChecker';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
export default {
    component: ColorChecker,
    title: 'Lab / ColorChecker',
    args: {},
    decorators: [withDesign]
};
export const Default = (args) => _jsx(ColorChecker, { ...args });
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=971%3A68'
    }
};
