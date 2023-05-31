import { Dropdown } from "../../components/Dropdown";
import { withDesign } from 'storybook-addon-designs';
import "../../../../styles/index.css";
var items = [{
  text: 'Edit',
  type: 'button'
}, {
  text: 'Duplicate',
  type: 'button'
}];
export default {
  component: Dropdown,
  title: 'Development / Dropdown',
  argsTypes: {
    items: {
      control: 'array'
    },
    button: {
      control: 'string'
    }
  },
  args: {
    items: items,
    button: {
      icon: 'user'
    }
  },
  decorators: [withDesign]
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(Dropdown, args);
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
  }
};