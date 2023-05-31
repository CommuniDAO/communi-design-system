import { Heading } from "../../components/Heading";
import { withDesign } from 'storybook-addon-designs';
import "../../../../styles/index.css";
export default {
  component: Heading,
  title: 'Components / Heading',
  args: {
    variant: 'h1'
  },
  argTypes: {
    section: {
      title: {
        type: {
          summary: 'string'
        }
      }
    }
  },
  decorators: [withDesign]
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(Heading, args);
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
  }
};