import { jsx as _jsx } from "react/jsx-runtime";
import { ColorPallet } from '../../elements';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
export default {
    component: ColorPallet,
    title: 'Elements / Color',
    args: {
        theme: 'midnight'
    },
    decorators: [withDesign]
};
const colors = [
    { name: 'Primary', style: 'bg-primary-100' },
    { name: 'PrimaryH', style: 'bg-primary-100-hover' },
    { name: 'Secondary', style: 'bg-secondary-400' },
    { name: 'SecondaryH', style: 'bg-secondary-400-hover' },
    { name: 'Body', style: 'bg-body' },
    { name: 'BodyM', style: 'bg-body-muted' },
    { name: 'Background', style: 'bg-neutral-100' },
    { name: 'BackgroundM', style: 'bg-neutral-100-muted' },
    { name: 'Blue', style: 'bg-blue-500' },
    { name: 'Red 500', style: 'bg-red-500' },
    { name: 'Red 600', style: 'bg-red-600' },
    { name: 'Green 700', style: 'bg-green-700' },
    { name: 'Green 600', style: 'bg-green-600' },
    { name: 'Green 500', style: 'bg-green-500' },
    { name: 'Green 400', style: 'bg-green-400' },
    { name: 'Green 300', style: 'bg-green-300' },
    { name: 'Green 200', style: 'bg-green-200' },
    { name: 'Yellow', style: 'bg-yellow' },
    { name: 'Yellow 300', style: 'bg-yellow-300' },
    { name: 'Indigo 500', style: 'bg-indigo-500' }
];
export const Pallet = (args) => {
    return _jsx(ColorPallet, { ...args, colors: colors });
};
Pallet.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
    }
};
