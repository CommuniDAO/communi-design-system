import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { Button } from '../..';
export const UploadFileInput = ({ uploadFile, config }) => {
    const { id, label, autoComplete, hidden, icon, debug, placeholder, afterChange, validation, defaultValue, maxLength, required, mRef } = config;
    const [data, setData] = React.useState(undefined);
    const handleChange = (data) => {
        setData(data);
    };
    // Refactor all this methods, remember this is only for visual purpose
    // const [file, setFile] = React.useState<FileData | null>(null);
    // const { run: upload } = uploadFile();
    // const handleUpload = async () => {
    //   await upload()
    //     .then(({ data }: any) => {
    //       console.log(data);
    //     })
    //     .catch((error: any) => {
    //       console.log(error);
    //     });
    // };
    // React.useEffect(() => {
    //   if (!!file) {
    //     console.log(file);
    //   }
    //   // console.log('running');
    //   // handleUpload();
    // }, [file]);
    const onChange = async (e) => {
        const data = await uploadFile(e);
        console.log('uploaded data', data);
        setData(data);
        // console.log('DATAAAA', data)
        // console.log('ONCHANGE')
        // const formData = new FormData();
        // console.log(formData);
        // const file = formData.append('file', e.target.files[0]);
        // console.log(formData);
        // console.log(file);
        // // setFile({ file: formData });
    };
    return (_jsxs(_Fragment, { children: [_jsx("label", { className: "block text-sm font-medium text-neutral-800", children: label }), _jsx("input", { type: "text", value: data?.value ? data?.value : undefined, hidden: debug ? !debug : true, readOnly: true, autoComplete: 'off', name: id, id: id, ref: mRef }), _jsx("div", { className: "mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md", children: _jsxs("div", { className: "space-y-1 text-center", children: [_jsx("svg", { className: "mx-auto h-12 w-12 text-gray-400", stroke: "currentColor", fill: "none", viewBox: "0 0 48 48", "aria-hidden": "true", children: _jsx("path", { d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }) }), _jsx("div", { className: "flex text-sm text-gray-600", children: _jsx(Button, { type: "upload", text: "Upload a file", startUpload: onChange, disabled: !!data && true }) })] }) })] }));
};
