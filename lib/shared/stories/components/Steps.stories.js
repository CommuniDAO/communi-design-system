import { Steps } from "../../components/Steps";
import { withDesign } from 'storybook-addon-designs';
import "../../../../styles/index.css";
export default {
  component: Steps,
  title: 'Components / Steps',
  decorators: [withDesign]
};
export var Default = function Default() {
  return /*#__PURE__*/React.createElement(Steps, null);
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
  }
};