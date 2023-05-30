import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from '../Button';
export const Uploader = ({ text, submit, to, variant, size, icon, customCss }) => {
    const startUpload = async (event) => {
        if (!!event) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', new Blob([await file.arrayBuffer()], { type: 'image/png' }), 'file.png');
            submit(formData, {
                method: 'post',
                action: to,
                encType: 'multipart/form-data',
            });
        }
    };
    return _jsx(Button, { type: "upload", text: text, startUpload: startUpload, variant: variant, size: size, icon: icon, customCss: customCss });
};
