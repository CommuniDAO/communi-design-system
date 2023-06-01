import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button } from '~/src/shared/components/Button';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
import { FakeLink } from '~/src/shared/helpers';
export default {
    component: Button,
    title: 'Components / Button',
    args: {
        variant: 'primary',
        text: 'Button',
        size: 'medium',
        icon: 'Clockwork',
        loading: false
    },
    argTypes: {
        variant: {
            type: {
                summary: 'string'
            },
            options: ['primary', 'secondary', 'alert', 'warning', 'positive', 'icon'],
            control: {
                type: 'radio'
            }
        },
        size: {
            type: {
                summary: 'string'
            },
            options: ['small', 'medium', 'large'],
            control: {
                type: 'radio'
            }
        },
        text: {
            type: {
                summary: 'string'
            }
        },
    },
    decorators: [withDesign]
};
export const Default = (args) => (_jsx(Button, { ...args }));
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/94RZpTzUGCb20phpH5PFaC/Untitled?node-id=137%3A24870'
    }
};
const buttonCollection = [
    { variant: 'primary', size: 'tiny' },
    { variant: 'primary', size: 'small' },
    { variant: 'primary', size: 'medium' },
    { variant: 'primary', size: 'large' },
    { variant: 'primary', size: 'xlarge' },
    { variant: 'secondary', size: 'tiny' },
    { variant: 'secondary', size: 'small' },
    { variant: 'secondary', size: 'medium' },
    { variant: 'secondary', size: 'large' },
    { variant: 'secondary', size: 'xlarge' },
    { variant: 'warning', size: 'tiny' },
    { variant: 'warning', size: 'small' },
    { variant: 'warning', size: 'medium' },
    { variant: 'warning', size: 'large' },
    { variant: 'warning', size: 'xlarge' },
    { variant: 'positive', size: 'tiny' },
    { variant: 'positive', size: 'small' },
    { variant: 'positive', size: 'medium' },
    { variant: 'positive', size: 'large' },
    { variant: 'positive', size: 'xlarge' },
    { variant: 'basic', size: 'tiny' },
    { variant: 'basic', size: 'small' },
    { variant: 'basic', size: 'medium' },
    { variant: 'basic', size: 'large' },
    { variant: 'basic', size: 'xlarge' },
    { variant: 'outline', size: 'tiny' },
    { variant: 'outline', size: 'small' },
    { variant: 'outline', size: 'medium' },
    { variant: 'outline', size: 'large' },
    { variant: 'outline', size: 'xlarge' },
    { variant: 'dropdown', size: 'tiny' },
    { variant: 'dropdown', size: 'small' },
    { variant: 'dropdown', size: 'medium' },
    { variant: 'dropdown', size: 'large' },
    { variant: 'dropdown', size: 'xlarge' },
];
const iconCollection = [
    { variant: 'primary', size: 'tiny', icon: 'Clockwork' },
    { variant: 'primary', size: 'small', icon: 'Clockwork' },
    { variant: 'primary', size: 'medium', icon: 'Clockwork' },
    { variant: 'primary', size: 'large', icon: 'Clockwork' },
    { variant: 'primary', size: 'xlarge', icon: 'Clockwork' },
    { variant: 'secondary', size: 'tiny', icon: 'Clockwork' },
    { variant: 'secondary', size: 'small', icon: 'Clockwork' },
    { variant: 'secondary', size: 'medium', icon: 'Clockwork' },
    { variant: 'secondary', size: 'large', icon: 'Clockwork' },
    { variant: 'secondary', size: 'xlarge', icon: 'Clockwork' },
    { variant: 'warning', size: 'tiny', icon: 'Clockwork' },
    { variant: 'warning', size: 'small', icon: 'Clockwork' },
    { variant: 'warning', size: 'medium', icon: 'Clockwork' },
    { variant: 'warning', size: 'large', icon: 'Clockwork' },
    { variant: 'warning', size: 'xlarge', icon: 'Clockwork' },
    { variant: 'positive', size: 'tiny', icon: 'Clockwork' },
    { variant: 'positive', size: 'small', icon: 'Clockwork' },
    { variant: 'positive', size: 'medium', icon: 'Clockwork' },
    { variant: 'positive', size: 'large', icon: 'Clockwork' },
    { variant: 'positive', size: 'xlarge', icon: 'Clockwork' },
    { variant: 'basic', size: 'tiny', icon: 'Clockwork' },
    { variant: 'basic', size: 'small', icon: 'Clockwork' },
    { variant: 'basic', size: 'medium', icon: 'Clockwork' },
    { variant: 'basic', size: 'large', icon: 'Clockwork' },
    { variant: 'basic', size: 'xlarge', icon: 'Clockwork' },
    { variant: 'outline', size: 'tiny', icon: 'Clockwork' },
    { variant: 'outline', size: 'small', icon: 'Clockwork' },
    { variant: 'outline', size: 'medium', icon: 'Clockwork' },
    { variant: 'outline', size: 'large', icon: 'Clockwork' },
    { variant: 'outline', size: 'xlarge', icon: 'Clockwork' },
    { variant: 'dropdown', size: 'tiny', icon: 'Clockwork' },
    { variant: 'dropdown', size: 'small', icon: 'Clockwork' },
    { variant: 'dropdown', size: 'medium', icon: 'Clockwork' },
    { variant: 'dropdown', size: 'large', icon: 'Clockwork' },
    { variant: 'dropdown', size: 'xlarge', icon: 'Clockwork' },
];
const iconButtonCollection = [
    { variant: 'primary', size: 'tiny', icon: 'Clockwork' },
    { variant: 'primary', size: 'small', icon: 'Clockwork' },
    { variant: 'primary', size: 'medium', icon: 'Clockwork' },
    { variant: 'primary', size: 'large', icon: 'Clockwork' },
    { variant: 'primary', size: 'xlarge', icon: 'Clockwork' },
    { variant: 'secondary', size: 'tiny', icon: 'Clockwork' },
    { variant: 'secondary', size: 'small', icon: 'Clockwork' },
    { variant: 'secondary', size: 'medium', icon: 'Clockwork' },
    { variant: 'secondary', size: 'large', icon: 'Clockwork' },
    { variant: 'secondary', size: 'xlarge', icon: 'Clockwork' },
    { variant: 'warning', size: 'tiny', icon: 'Clockwork' },
    { variant: 'warning', size: 'small', icon: 'Clockwork' },
    { variant: 'warning', size: 'medium', icon: 'Clockwork' },
    { variant: 'warning', size: 'large', icon: 'Clockwork' },
    { variant: 'warning', size: 'xlarge', icon: 'Clockwork' },
    { variant: 'positive', size: 'tiny', icon: 'Clockwork' },
    { variant: 'positive', size: 'small', icon: 'Clockwork' },
    { variant: 'positive', size: 'medium', icon: 'Clockwork' },
    { variant: 'positive', size: 'large', icon: 'Clockwork' },
    { variant: 'positive', size: 'xlarge', icon: 'Clockwork' },
    { variant: 'basic', size: 'tiny', icon: 'Clockwork' },
    { variant: 'basic', size: 'small', icon: 'Clockwork' },
    { variant: 'basic', size: 'medium', icon: 'Clockwork' },
    { variant: 'basic', size: 'large', icon: 'Clockwork' },
    { variant: 'basic', size: 'xlarge', icon: 'Clockwork' },
    { variant: 'outline', size: 'tiny', icon: 'Clockwork' },
    { variant: 'outline', size: 'small', icon: 'Clockwork' },
    { variant: 'outline', size: 'medium', icon: 'Clockwork' },
    { variant: 'outline', size: 'large', icon: 'Clockwork' },
    { variant: 'outline', size: 'xlarge', icon: 'Clockwork' },
    { variant: 'dropdown', size: 'tiny', icon: 'Clockwork' },
    { variant: 'dropdown', size: 'small', icon: 'Clockwork' },
    { variant: 'dropdown', size: 'medium', icon: 'Clockwork' },
    { variant: 'dropdown', size: 'large', icon: 'Clockwork' },
    { variant: 'dropdown', size: 'xlarge', icon: 'Clockwork' },
];
export const Collection = (args) => (_jsxs(_Fragment, { children: [_jsx("div", { className: "text-neutral-800 text-h2-bold", children: "Buttons" }), _jsxs("div", { className: "flex flex-col space-y-[20px]", children: [_jsx("div", { className: "text-neutral-800 text-h3-bold", children: "Action" }), _jsx("div", { className: 'grid grid-cols-5 grid-flow-row gap-[20px]', children: buttonCollection.map(({ variant, size }) => {
                        const type = 'button';
                        return (_jsx("div", { children: _jsx(Button, { variant: variant, size: size, type: type, text: variant !== 'icon' && variant }) }));
                    }) }), _jsx("div", { className: 'grid grid-cols-5 grid-flow-row gap-[20px]', children: buttonCollection.map(({ variant, size }) => {
                        const type = 'button';
                        return (_jsx("div", { children: _jsx(Button, { variant: variant, size: size, type: type, loading: true, text: variant !== 'icon' && variant }) }));
                    }) }), _jsx("div", { className: 'grid grid-cols-5 grid-flow-row gap-[20px]', children: iconCollection.map(({ variant, size, icon }) => {
                        const type = 'button';
                        return _jsx("div", { children: _jsx(Button, { variant: variant, size: size, type: type, icon: icon }) });
                    }) }), _jsx("div", { className: 'grid grid-cols-5 grid-flow-row gap-[20px]', children: iconButtonCollection.map(({ variant, size, icon }) => {
                        const type = 'button';
                        return (_jsx("div", { children: _jsx(Button, { variant: variant, size: size, type: type, icon: icon, text: variant }) }));
                    }) }), _jsx("div", { className: "text-neutral-800 text-h3-bold", children: "Links" }), _jsx("div", { className: 'grid grid-cols-5 grid-flow-row gap-[20px]', children: buttonCollection.map(({ variant, size }) => {
                        const type = 'link';
                        return (_jsx("div", { children: _jsx(Button, { variant: variant, size: size, type: type, text: variant !== 'icon' && variant, component: FakeLink }) }));
                    }) }), _jsx("div", { className: 'grid grid-cols-5 grid-flow-row gap-[20px]', children: iconCollection.map(({ variant, size, icon }) => {
                        const type = 'link';
                        return _jsx("div", { children: _jsx(Button, { variant: variant, size: size, type: type, icon: icon, component: FakeLink }) });
                    }) }), _jsx("div", { className: 'grid grid-cols-5 grid-flow-row gap-[20px]', children: iconButtonCollection.map(({ variant, size, icon }) => {
                        const type = 'link';
                        return (_jsx("div", { children: _jsx(Button, { variant: variant, size: size, type: type, icon: icon, text: variant, component: FakeLink }) }));
                    }) })] })] }));
Collection.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/OG2qkuEFEhNmf2wTA0wAGq/Design-System?node-id=462%3A3547'
    }
};
