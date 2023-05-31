import { jsx as _jsx } from "react/jsx-runtime";
// import { Text } from '../../elements';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
export default {
    title: 'Elements / Text',
    args: {
        theme: 'midnight'
    },
    decorators: [withDesign]
};
const textVariants = [
    'text-display-bold',
    'text-display-semi-bold',
    'text-display-extra-bold',
    'text-h1-bold',
    'text-h1-semi-bold',
    'text-h1-extra-bold',
    'text-h2-bold',
    'text-h2-semi-bold',
    'text-h2-extra-bold',
    'text-h3-bold',
    'text-h3-semi-bold',
    'text-h3-extra-bold', ,
    'text-h4-bold',
    'text-h4-semi-bold',
    'text-h4-extra-bold',
    'text-subheading-semi-bold',
    'text-subheading-extra-bold',
    'text-subheading-medium',
    'text-subheading-bold',
    'text-subheading-underlined',
    'text-subheading-light',
    'text-p1-medium',
    'text-p1-bold',
    'text-p1-underlined',
    'text-p1-light',
    'text-p2-medium',
    'text-p2-bold',
    'text-p2-underlined',
    'text-p2-light',
    'text-p3-medium',
    'text-p3-bold',
    'text-p3-underlined',
    'text-p3-light',
    'text-caption-medium',
    'text-caption-bold',
    'text-caption-underlined',
    'text-caption-light',
    'text-caption-bold-underlined',
    'text-footer-medium',
    'text-footer-bold',
    'text-footer-underlined',
    'text-footer-light',
    'text-footer-bold-underlined'
];
export const Text = (args) => {
    return _jsx("div", { className: 'text-neutral-800', children: textVariants.map((variant, index) => {
            return _jsx("div", { className: `${variant}`, children: "The quick brown fox jumps over the lazy dog." }, index);
        }) });
};
Text.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
    }
};
