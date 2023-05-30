import { jsx as _jsx } from "react/jsx-runtime";
import { Modal } from '~/src/shared/components/Modal';
// import { Button } from '../components/Button';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
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
export const Default = {
    render: (args) => {
        return (_jsx("div", {}));
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
        }
    }
};
