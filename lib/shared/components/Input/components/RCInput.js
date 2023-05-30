import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import { useIsFocused } from 'use-is-focused';
import { CodeInput, getSegmentCssWidth } from 'rci';
import { Icon } from '../../Icon';
import clsx from 'clsx';
// const checkCodeApiMock = (code: string, expected: string): Promise<boolean> => {
//   return new Promise<boolean>((r) => setTimeout(r, 350, code === expected))
// }
const redirectToAppMock = () => {
    alert('redirect to app');
    // window.location.assign(window.location.href)
};
export const RCInput = ({ config }) => {
    const { id, label, maxLength = 4, validation, } = config;
    const autoFocus = true;
    const [state, setState] = React.useState('input');
    const inputRef = React.useRef(null);
    const focused = useIsFocused(inputRef);
    const width = getSegmentCssWidth('10px');
    const TextStyle = clsx('text-neutral-900', focused && 'border-primary-400');
    const InputStyle = clsx("border border-neutral-400 rounded-[8px]", state === 'loading' && focused && 'border-primary-400', state === 'success' && 'border-green-400', state === 'error' && 'border-red-400');
    const iconStyle = clsx('pl-[20px] flex items-center text-neutral-400', state === 'success' && 'text-green-400', state === 'error' && 'text-red-400');
    React.useEffect(() => {
        if (validation.state !== 'input') {
            setState(validation.state);
            if (validation.state === 'error') {
                setTimeout(() => {
                    setState('input');
                }, 500);
            }
        }
    }, [validation.state]);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex", children: [_jsx(CodeInput, { id: id, autoFocus: autoFocus, className: TextStyle, length: maxLength, readOnly: state !== 'input', disabled: state === 'loading', inputRef: inputRef, padding: "8px", spacing: "16px", spellCheck: false, inputMode: 'numeric', pattern: '[0-9]*', autoComplete: 'one-time-code', onChange: ({ currentTarget: input }) => {
                        // only accept numbers
                        input.value = input.value.replace(/\D+/g, '');
                        // auto submit on input fill
                        if (input.value.length === maxLength) {
                            setState('loading');
                            validation?.fn(input.value);
                            // .then((success: any) => {
                            //   if (success) {
                            //     setState('success')
                            //     return setTimeout(redirectToAppMock, 500)
                            //   }
                            //   setState('error')
                            //   setTimeout(() => {
                            //     setState('input')
                            //     input.value = ''
                            //     input.dispatchEvent(new Event('input'))
                            //     input.focus()
                            //   }, 500)
                            // })
                        }
                    }, renderSegment: ({ state, index }) => (_jsx("div", { className: InputStyle, "data-state": state, style: { width, height: '100%' }, children: _jsx("div", {}) }, index)) }), _jsx("div", { className: iconStyle, children: state === 'loading' &&
                        _jsx("div", { className: "origin-center animate-spin", children: _jsx(Icon, { name: "spinner", size: "medium" }) }) })] }) }));
};
