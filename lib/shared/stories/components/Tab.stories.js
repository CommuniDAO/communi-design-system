import { Tab } from "../../components/Tab";
import { withDesign } from 'storybook-addon-designs';
import "../../../../styles/index.css";
export default {
  component: Tab,
  title: 'Components / Tab',
  decorators: [withDesign]
};

// export const Default = () => <Tab />;

// Default.parameters = {
//   design: {
//     type: 'figma',
//     url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
//   }
// };