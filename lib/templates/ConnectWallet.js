import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Layout } from '../atoms';
const options = [
    {
        name: 'Wallet Connect',
        icon: 'walletConnect',
    },
    {
        name: 'Albedo',
        icon: 'albedo',
    },
    {
        name: 'Rabet',
        icon: 'rabet',
    },
    {
        name: 'Freighter',
        icon: 'freighter',
    },
];
export const ConnectWallet = ({}) => {
    return (_jsx("div", { style: {
            backgroundImage: "url('https://imagedelivery.net/uDbEDRBQqhBXrrfuCRrATQ/cb3fca94-6358-47a3-6150-a10d0d7e1100/public')",
            backgroundSize: 'cover',
            height: '100vh',
            width: '100%'
        }, children: _jsx(Layout, { children: _jsx("div", { className: "flex items-center h-screen", children: _jsx("div", { className: "bg-neutral-100 rounded-md p-[20px] w-full ", children: _jsxs("div", { className: "flex flex-col", children: [_jsxs("div", { className: "flex flex-row w-full", children: [_jsxs("div", { className: "flex-1", children: [_jsx("div", { children: "Wallet Connect" }), _jsx("div", { children: "Scan the QR with your phone from a wallet app" }), _jsx("div", {})] }), _jsx("div", { className: "flex-1", children: _jsx("div", { children: "Extensions" }) })] }), _jsx("div", { children: _jsx("div", { children: "By Continue you accept our term of conditioons and our privacy policy" }) })] }) }) }) }) }));
};
