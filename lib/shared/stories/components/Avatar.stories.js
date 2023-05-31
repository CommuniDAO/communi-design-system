import { Avatar } from "../../components";
import { withDesign } from 'storybook-addon-designs';
import "../../../../styles/index.css";
export default {
  component: Avatar,
  title: 'Components / Avatar',
  argTypes: {
    imageUrl: {
      name: 'imageUrl',
      defaultValue: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
    }
  },
  decorators: [withDesign]
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(Avatar, args);
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=971%3A68'
  }
};