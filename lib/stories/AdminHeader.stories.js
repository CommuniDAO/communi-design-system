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
//export const Default = (args: any) => <AdminHeader {...args} />;
export const Default = (args) => (_jsx(AdminHeader, { ...args, menu: [
        { text: 'Item 1', icon: 'Users', to: '/path1' },
        { text: 'Item 2', icon: 'Medal', to: '/path2' },
        { text: 'Item 3', icon: 'Roles', to: '/path3' },
    ] }));
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/'
    }
};
