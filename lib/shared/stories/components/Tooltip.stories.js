import { jsx as _jsx } from "react/jsx-runtime";
import { Tooltip } from '~/src/shared/components/Tooltip';
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
    component: Tooltip,
    title: 'Development / Tooltip',
    argsTypes: {
        title: {
            control: 'string'
        },
        items: {
            control: 'array'
        }
    },
    args: { items, title: 'Soluciones' },
    decorators: [withDesign]
};
export const Default = (args) => _jsx(Tooltip, { ...args });
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
    }
};
