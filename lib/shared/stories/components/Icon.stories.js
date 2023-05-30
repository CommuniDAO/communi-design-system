import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Icon } from '~/src/shared/components/Icon/';
import { icons } from '../../../assets/icons';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
export default {
    component: Icon,
    title: 'Elements / Icon',
    args: {
        name: 'user',
        color: 'white'
    },
    decorators: [withDesign]
};
export const Default = {
    render: () => {
        return (_jsx(_Fragment, { children: Object.keys(icons).map((key) => {
                return _jsx(Icon, { name: key, color: "secondary" });
            }) }));
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=1031%3A75'
        }
    }
};
