import React from 'react';
import { Modal } from "../../components/Modal";
// import { Button } from '../components/Button';
import { withDesign } from 'storybook-addon-designs';
import "../../../../styles/index.css";

// const [isOpen, setOpen] = React.useState(true);

// const closeModal = () => {
//   setOpen(false);
// };

export default {
  component: Modal,
  title: 'Flash / Modal',
  decorators: [withDesign],
  argsTypes: {
    initialState: {
      control: 'boolean'
    }
  },
  args: {
    // initialState: isOpen,
    // children: <></>,
    // closeModal: closeModal()
  }
};

// title: {
//   control: 'string'
// },
// text: {
//   control: 'string'
// }
// title: 'Payment Successful',
// text:
//   'Your payment has been successfully submitted. We ve sent your an email with all of the details of your order.',
// button: {
//   text: 'Got it, thanks!',
//   variant: 'primary'
// }

export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement("div", null);
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
  }
};