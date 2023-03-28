import { jsx as _jsx } from "react/jsx-runtime";
import { GroupItems } from '~/src/atoms/components/GroupItems';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
export default {
    component: GroupItems,
    title: 'Composes / GroupItems',
    argTypes: {
        items: {
            type: {
                summary: 'array'
            },
            defaultValue: [[
                    'cogwheel',
                    'a Description'
                ], [
                    'cogwheel',
                    'another Description'
                ], [
                    'cogwheel',
                    'other Description'
                ]]
        },
    },
    decorators: [withDesign]
};
export const Default = (args) => { return _jsx(GroupItems, { ...args }); };
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/OG2qkuEFEhNmf2wTA0wAGq/Design-System?node-id=754%3A6702'
    }
};
