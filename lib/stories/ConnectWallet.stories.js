import { withDesign } from 'storybook-addon-designs';
import { ConnectWallet } from '~/src/templates/ConnectWallet';
import '~/styles/index.css';
export default {
    component: ConnectWallet,
    title: 'Templates / ConnectWallet',
    argTypes: {},
    decorators: [withDesign]
};
export const Default = {
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/'
        }
    }
};
