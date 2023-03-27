import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { hexToRgb, calculateRatio, rgbToHsb, hsbToRgb, rgbToHex } from './utils';
import { Button } from '..';
export const ColorChecker = ({}) => {
    const [colorOne, setColorOne] = React.useState('ffffff');
    const [colorTwo, setColorTwo] = React.useState('ffffff');
    const [ratio, setRatio] = React.useState(null);
    React.useEffect(() => {
        const c1 = hexToRgb(colorOne);
        const c2 = hexToRgb(colorTwo);
        const r = calculateRatio(c1, c2).toFixed(2);
        setRatio(r);
        // if (parseInt(r) > 1) {
        //   console.log('greater')
        // } else {
        //   if (!c2) return;
        //   console.log('not greater')
        //   const { r, g , b } = c2
        //   const { h, s , b: brightness} = rgbToHsb(r, g, b)
        //   const newB = brightness * 0.33
        //   const newC = hsbToRgb(h,s,newB)
        //   console.log(newC)
        //   const newR = calculateRatio(c1, newC).toFixed(2)
        //   console.log('iRatio', newR, parseFloat(newR), parseFloat(newR) > 7)
        //   if (parseFloat(newR) > 7) {
        //     console.log('is Greater')
        //     // const newH = rgbToHex(newC)
        //     const newH = rgbToHex(newC?.r, newC?.g, newC?.b)
        //     console.log('newH', parseInt(newH).toString())
        //     setColorTwo(parseInt(newH).toString())
        //     setRatio(newR)
        //   }
        // }
    }, [colorOne, colorTwo]);
    const fixContrast = () => {
        const c1 = hexToRgb(colorOne);
        const c2 = hexToRgb(colorTwo);
        if (!c2)
            return;
        const { r, g, b } = c2;
        const { h, s, b: brightness } = rgbToHsb(r, g, b);
        const newB = brightness * 0.33;
        const newC = hsbToRgb(h, s, newB);
        const newR = calculateRatio(c1, newC).toFixed(2);
        if (parseFloat(newR) > 7) {
            const newH = rgbToHex(newC?.r, newC?.g, newC?.b);
            setColorTwo(parseInt(newH).toString());
            setRatio(newR);
        }
    };
    return (_jsxs("div", { className: "text-neutral-800", children: [_jsxs("div", { children: ["Ratio: ", ratio] }), _jsxs("div", { children: ["Color 1: ", colorOne] }), _jsxs("div", { children: ["Color 2: ", colorTwo] }), _jsx(Button, { text: "fix contrast", onClick: () => fixContrast() }), _jsx("div", { className: "w-[200px] h-[200px]", style: { backgroundColor: `#${colorOne}` }, children: _jsx("div", { style: { color: `#${colorTwo}` }, children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vero sequi similique ullam, accusamus architecto cumque delectus quae, quo odio, vel rerum repellat?" }) })] }));
};
