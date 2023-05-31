import { TextList } from "../../components/TextList";
import { withDesign } from 'storybook-addon-designs';
import "../../../../styles/index.css";
export default {
  component: TextList,
  title: 'Compositions / TextList',
  argTypes: {
    items: {
      type: {
        summary: 'array'
      },
      defaultValue: [['a Title', 'a Description'], ['another Title', 'another Description'], ['other Title', 'other Description']]
    }
  },
  decorators: [withDesign]
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(TextList, args);
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OG2qkuEFEhNmf2wTA0wAGq/Design-System?node-id=754%3A6702'
  }
};