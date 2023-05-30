import { jsx as _jsx } from "react/jsx-runtime";
import { withDesign } from 'storybook-addon-designs';
import { ClaimKey } from '~/src/templates/ClaimKey';
import '~/styles/index.css';
export default {
    component: ClaimKey,
    title: 'Templates / ClaimKey',
    argTypes: {},
    decorators: [withDesign]
};
export const Default = (args) => _jsx(ClaimKey, { ...args });
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/'
    }
};
