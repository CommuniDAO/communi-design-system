import { jsx as _jsx } from "react/jsx-runtime";
import { Header } from '~/src/shared/components/Header';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
export default {
    component: Header,
    title: 'Components / Header',
    args: {
        section: { title: 'Header' }
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
export const Default = (args) => _jsx(Header, { ...args });
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
    }
};
