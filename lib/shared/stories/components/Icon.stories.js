import { Icon } from "../../components/Icon";
import { icons } from "../../../assets/icons";
import { withDesign } from 'storybook-addon-designs';
import "../../../../styles/index.css";
export default {
  component: Icon,
  title: 'Elements / Icon',
  decorators: [withDesign]
};
export var Default = function Default() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, Object.keys(icons).map(function (key) {
    return /*#__PURE__*/React.createElement(Icon, {
      name: key,
      color: "secondary",
      size: "xlarge"
    });
  }));
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=1031%3A75'
  }
};