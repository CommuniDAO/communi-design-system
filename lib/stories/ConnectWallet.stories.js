import { jsx as _jsx } from "react/jsx-runtime";
import { withDesign } from 'storybook-addon-designs';
import { ConnectWallet } from '~/src/templates/ConnectWallet';
import '~/styles/index.css';
export default {
    component: ConnectWallet,
    title: 'Templates / ConnectWallet',
    argTypes: {},
    decorators: [withDesign]
};
export const Default = (args) => _jsx(ConnectWallet, { ...args });
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/'
    }
};
