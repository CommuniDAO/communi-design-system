import { jsx as _jsx } from "react/jsx-runtime";
import { Popover } from '~/src/shared/components/Popover';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
const items = [
    {
        name: 'Insights',
        description: 'Measure actions your users take',
        href: '##'
    },
    {
        name: 'Automations',
        description: 'Create your own targeted content',
        href: '##'
    },
    {
        name: 'Reports',
        description: 'Keep track of your growth',
        href: '##'
    }
];
export default {
    component: Popover,
    title: 'Flash / Popover',
    args: {
        button: {
            variant: 'basic',
            icon: 'info'
        },
        children: _jsx("div", { children: "More information about." })
    },
    decorators: [withDesign]
};
export const Default = {
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
        }
    }
};
