import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
export const Loader = () => {
    const isBrowser = typeof window !== "undefined";
    const lottieContainer = React.useRef(null);
    ;
    React.useEffect(() => {
        if (!!isBrowser) {
            const w = window;
            if (w.bodymovin) {
                w.bodymovin.loadAnimation({
                    container: lottieContainer.current,
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    path: 'https://assets10.lottiefiles.com/packages/lf20_phmllabo.json'
                });
            }
        }
    }, []);
    return (_jsx("div", { className: "flex justify-center mb-[20px]", children: _jsx("div", { ref: lottieContainer, className: "w-[200px] h-[200px]" }) }));
};
