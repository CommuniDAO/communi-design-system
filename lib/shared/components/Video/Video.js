import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
export const Video = ({ srcObject, ...props }) => {
    const refVideo = React.useRef(null);
    React.useEffect(() => {
        if (!refVideo.current)
            return;
        refVideo.current.srcObject = srcObject;
    }, [srcObject]);
    return _jsx("video", { ref: refVideo, ...props, autoPlay: true, className: "w-full aspect-video bg-neutral-50 border border-neutral-150 rounded-[20px]" });
};
