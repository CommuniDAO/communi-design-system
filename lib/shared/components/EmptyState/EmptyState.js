import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const EmptyState = ({ size = 'medium', variant = 'basic', customCss, message, CTA }) => {
    const { title, description } = message || {};
    switch (variant) {
        case 'basic':
            return (_jsx("div", { className: "flex flex-row justify-center p-[20px] bg-neutral-100 rounded-[8px]", children: _jsxs("div", { className: "flex flex-col space-y-[20px] w-[200px] text-center", children: [_jsx("div", { className: "text-neutral-800", children: title }), _jsx("div", { className: "text-neutral-600", children: description }), _jsx("div", { children: CTA })] }) }));
        case 'full':
            return (_jsxs("div", { className: "border border-neutral-100 rounded-[20px] text-neutral-800 flex flex-row justify-between max-w-[720px]", children: [_jsx("div", { className: "w-[300px] rounded-bl-[20px] rounded-tl-[20px] bg-cover bg-center", style: { backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0), #1C181E), url('https://imagedelivery.net/uDbEDRBQqhBXrrfuCRrATQ/f583905b-d36c-49e6-0f3b-edc3d40b3c00/public')` } }), _jsx("div", { children: _jsxs("div", { className: "flex flex-col space-y-[20px] p-[40px] ", children: [_jsx("div", { className: "text-subheading-bold", children: title }), _jsx("div", { className: "text-paragraph-medium-medium", children: description }), _jsx("div", { children: CTA })] }) })] }));
    }
};
