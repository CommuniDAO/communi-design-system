import { jsx as _jsx } from "react/jsx-runtime";
import { Image } from '~/src/atoms/components/Image';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
export default {
    component: Image,
    title: 'Components / Image',
    argTypes: {
        imageUrl: {
            type: {
                summary: 'string'
            },
            defaultValue: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
        }
    },
    decorators: [withDesign]
};
export const Default = (args) => _jsx(Image, { ...args });
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=971%3A68'
    }
};
