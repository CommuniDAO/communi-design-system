import { jsx as _jsx } from "react/jsx-runtime";
import { Steps } from '~/src/shared/components/Steps';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
export default {
    component: Steps,
    title: 'Components / Steps',
    decorators: [withDesign]
};
export const Default = {
    render: () => _jsx(Steps, {}),
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
        }
    }
};
