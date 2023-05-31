import { ColorChecker } from "../../components/ColorChecker";
import { withDesign } from 'storybook-addon-designs';
import "../../../../styles/index.css";
export default {
  component: ColorChecker,
  title: 'Lab / ColorChecker',
  args: {},
  decorators: [withDesign]
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(ColorChecker, args);
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=971%3A68'
  }
};