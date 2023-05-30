import { jsx as _jsx } from "react/jsx-runtime";
import { DateTime } from '~/src/shared/components/DateTime';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
import { FakeLink } from '~/src/shared/helpers';
export default {
    component: DateTime,
    title: 'Components / DateTime',
    decorators: [withDesign]
};
export const Default = {
    render: (args) => _jsx(DateTime, { ...args, component: FakeLink, to: "/" }),
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OG2qkuEFEhNmf2wTA0wAGq/Design-System?node-id=346%3A2961'
        }
    }
};
export const Medium = {
    render: (args) => (_jsx(DateTime, { ...args, variant: "medium", component: FakeLink, to: "/" }))
};
