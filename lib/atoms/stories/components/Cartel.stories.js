import { jsx as _jsx } from "react/jsx-runtime";
import { Cartel } from '~/src/atoms/components/Cartel';
import { Button } from '~/src/atoms/components/Button';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
export default {
    component: Cartel,
    title: 'Components / Cartel',
    argTypes: {
        message: {
            type: {
                summary: 'object'
            },
            defaultValue: {
                title: 'Profile',
                description: 'Start your crypto career faster than you can imagine, with this incredible tools'
            }
        },
        CTA: {
            defaultValue: _jsx(Button, { text: "Continue" })
        }
    },
    decorators: [withDesign]
};
export const Default = (args) => { return _jsx(Cartel, { ...args }); };
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/OG2qkuEFEhNmf2wTA0wAGq/Design-System?node-id=612%3A4832'
    }
};
