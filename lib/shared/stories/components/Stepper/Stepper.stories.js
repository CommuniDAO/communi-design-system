import { jsx as _jsx } from "react/jsx-runtime";
import { Stepper, RadioGroup } from '~/src/shared/components';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
const options = [
    {
        name: 'Startup',
        ram: '12GB',
        cpus: '6 CPUs',
        disk: '160 GB SSD disk'
    },
    {
        name: 'Business',
        ram: '16GB',
        cpus: '8 CPUs',
        disk: '512 GB SSD disk'
    },
    {
        name: 'Enterprise',
        ram: '32GB',
        cpus: '12 CPUs',
        disk: '1024 GB SSD disk'
    }
];
const steps = [{ component: RadioGroup, options: options }];
export default {
    component: Stepper,
    title: 'Lab / Stepper',
    decorators: [withDesign]
};
export const Radio = {
    render: () => _jsx(Stepper, { steps: steps, type: "radio" }),
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
        }
    }
};
