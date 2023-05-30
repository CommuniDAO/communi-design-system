import { jsx as _jsx } from "react/jsx-runtime";
import { Notification } from '~/src/shared/components/Notification';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
export default {
    component: Notification,
    title: 'Flash / Notification',
    decorators: [withDesign]
};
export const Default = (args) => (_jsx(Notification, { ...args, initialState: true, content: { title: 'Email has sent successfully!', status: 200 } }));
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
    }
};
