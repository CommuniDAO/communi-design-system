import { jsx as _jsx } from "react/jsx-runtime";
import { withDesign } from 'storybook-addon-designs';
import { AdminHeader } from '~/src/composables/AdminHeader';
import '~/styles/index.css';
export default {
    component: AdminHeader,
    title: 'Composables / AdminHeader',
    argTypes: {},
    decorators: [withDesign]
};
export const Default = (args) => _jsx(AdminHeader, { ...args });
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/'
    }
};
