import { jsx as _jsx } from "react/jsx-runtime";
import { QRCode } from '~/src/atoms/components/QRCode';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
export default {
    component: QRCode,
    title: 'Development / QRCode',
    decorators: [withDesign]
};
export const Default = (args) => _jsx(QRCode, { ...args });
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=971%3A68'
    }
};