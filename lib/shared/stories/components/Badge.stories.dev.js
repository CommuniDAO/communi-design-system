import { Badge } from "../../components/Badge";
import { withDesign } from 'storybook-addon-designs';
import "../../../../styles/index.css";
export default {
  component: Badge,
  title: 'Development / Badge',
  argTypes: {
    title: {
      type: {
        summary: 'string'
      },
      defaultValue: 'Badge'
    },
    size: {
      type: {
        summary: 'string'
      },
      defaultValue: 'small'
    },
    variant: {
      type: {
        summary: 'string'
      },
      defaultValue: 'indigo'
    }
  },
  decorators: [withDesign]
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(Badge, args);
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
  }
};