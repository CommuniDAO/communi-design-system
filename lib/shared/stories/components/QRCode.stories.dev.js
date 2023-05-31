import { QRCode } from "../../components/QRCode";
import { withDesign } from 'storybook-addon-designs';
import "../../../../styles/index.css";
export default {
  component: QRCode,
  title: 'Development / QRCode',
  decorators: [withDesign]
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(QRCode, args);
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=971%3A68'
  }
};