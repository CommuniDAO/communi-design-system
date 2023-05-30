import { jsx as _jsx } from "react/jsx-runtime";
import { Heading } from '~/src/shared/components/Heading';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
export default {
    component: Heading,
    title: 'Components / Heading',
    args: {
        section: { title: 'Heading' }
    },
    argTypes: {
        section: {
            title: {
                type: {
                    summary: 'string'
                }
            }
        }
    },
    decorators: [withDesign]
};
export const Default = (args) => _jsx(Heading, { ...args });
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
    }
};
