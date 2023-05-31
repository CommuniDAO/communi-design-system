import { withDesign } from 'storybook-addon-designs';
import { ConnectWallet } from "../templates/ConnectWallet";
import "../../styles/index.css";
export default {
  component: ConnectWallet,
  title: 'Templates / ConnectWallet',
  argTypes: {},
  decorators: [withDesign]
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(ConnectWallet, args);
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/'
  }
};