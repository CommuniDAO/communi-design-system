import React from 'react';
import clsx from 'clsx';
import { Menu } from '@headlessui/react';
import { Popover } from '@headlessui/react';
import { Icon } from "../Icon";
export var Button = function Button(_ref) {
  var text = _ref.text,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
    Component = _ref.component,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'button' : _ref$type,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? 'button' : _ref$as,
    rounded = _ref.rounded,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? undefined : _ref$icon,
    onClick = _ref.onClick,
    startUpload = _ref.startUpload,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    to = _ref.to,
    _ref$customCss = _ref.customCss,
    customCss = _ref$customCss === void 0 ? '' : _ref$customCss,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$active = _ref.active,
    active = _ref$active === void 0 ? false : _ref$active;
  var buttonStyle = clsx("transition ease-in-out delay-75 duration-300 inline-flex justify-center cursor-pointer flex items-center justify-center font-bold", variant === 'primary' && "".concat(active ? 'bg-primary-800' : 'bg-primary-700', " text-neutral-100 border border-primary-700\n    outline-none hover:outline-none hover:bg-primary-800 hover:text-primary-100 hover:border-[1px] hover:border-primary-200\n    hover:ring-[2px] hover:ring-primary-700 hover:ring-offset-neutral-50\n    focus:outline-none focus:bg-primary-800 focus:text-primary-100 focus:border-[1px] focus:border-primary-200\n    focus:ring-[2px] focus:ring-primary-700 focus:ring-offset-neutral-50"), variant === 'secondary' && "bg-secondary-700 text-neutral-100 border border-secondary-700\n    hover:outline-none hover:bg-secondary-800 hover:text-secondary-100 hover:border-[1px] hover:border-secondary-200\n    hover:ring-[2px] hover:ring-secondary-700 hover:ring-offset-neutral-50\n    focus:outline-none focus:bg-secondary-800 focus:text-secondary-100 focus:border-[1px] focus:border-secondary-200\n    focus:ring-[2px] focus:ring-secondary-700 focus:ring-offset-neutral-50", variant === 'basic' && "text-neutral-1100 hover:outline-none focus:outline-none hover:text-primary-700 focus:text-primary-800", variant === 'warning' && "bg-red-700 text-neutral-100 border border-red-700\n    hover:outline-none hover:bg-red-800 hover:text-red-100 hover:border-[1px] hover:border-red-200  \n    hover:ring-[2px] hover:ring-red-700 hover:ring-offset-neutral-50\n    focus:outline-none focus:bg-red-800 focus:text-red-100 focus:border-[1px] focus:border-red-200\n    focus:ring-[2px] focus:ring-red-700 focus:ring-offset-neutral-50", variant === 'positive' && "bg-green-700 text-neutral-100 border border-green-700\n    hover:outline-none hover:bg-green-600 hover:text-green-200 hover:border-[1px] hover:border-green-200  \n    hover:ring-[2px] hover:ring-green-700 hover:ring-offset-neutral-50\n    focus:outline-none focus:bg-green-600 focus:text-green-200 focus:border-[1px] focus:border-green-200\n    focus:ring-[2px] focus:ring-green-700 focus:ring-offset-neutral-50", variant === 'outline' && "border bg-neutral-50 border-neutral-700 text-neutral-1100\n    hover:outline-none hover:bg-neutral-800 hover:text-neutral-100 hover:border-[1px] hover:border-neutral-200\n    hover:ring-[2px] hover:ring-neutral-700 hover:ring-offset-neutral-50\n    focus:outline-none focus:bg-neutral-800 focus:text-neutral-100 focus:border-[1px] focus:border-neutral-200\n    focus:ring-[2px] focus:ring-neutral-700 focus:ring-offset-neutral-50", variant === 'dropdown' && "border bg-neutral-50 border-neutral-700 text-neutral-800\n    hover:outline-none hover:bg-neutral-800 hover:text-neutral-100 hover:border-[1px] hover:border-neutral-200\n    hover:ring-[2px] hover:ring-neutral-700 hover:ring-offset-neutral-50\n    focus:outline-none focus:bg-neutral-800 focus:text-neutral-100 focus:border-[1px] focus:border-neutral-200\n    focus:ring-[2px] focus:ring-neutral-700 focus:ring-offset-neutral-50", text && size === 'tiny' && 'px-[8px] py-[6px] text-button-tiny font-medium tracking-wide rounded-[4px] focus:ring-offset-[1px]  hover:ring-offset-[1px]', text && size === 'small' && 'px-[10px] py-[8px] text-button-small font-medium tracking-wide rounded-[6px] focus:ring-offset-[1px]  hover:ring-offset-[1px]', text && size === 'medium' && 'px-[16px] py-[12px] text-button-medium font-bold tracking-wide rounded-[10px] focus:ring-offset-[2px]  hover:ring-offset-[2px]', text && size === 'large' && 'px-[30px] py-[13px]  text-button-large font-bold rounded-[12px] focus:ring-offset-[3px]  hover:ring-offset-[3px]', text && size === 'xlarge' && 'px-[30px] py-[8.001px]  text-[24px] font-bold rounded-[12px] focus:ring-offset-[4px]  hover:ring-offset-[4px]', !!icon && !!text && size === 'tiny' && 'py-[4px]', !!icon && !!text && size === 'small' && 'py-[5.5px]', !!icon && !!text && size === 'medium' && 'py-[7px]', !!icon && !!text && size === 'large' && 'py-[7.5px]', !!icon && !!text && size === 'xlarge' && 'py-[7.5px]', type === 'action' && size === 'tiny' && 'h-[26px]', type === 'action' && size === 'small' && 'h-[33px]', type === 'action' && size === 'medium' && 'h-[44px]', type === 'action' && size === 'large' && 'h-[51px]', type === 'action' && size === 'xlarge' && 'h-[51px]', !!icon && !text && size === 'tiny' && 'px-[4px] py-[4px] rounded-[4px]', !!icon && !text && size === 'small' && 'px-[5.5px] py-[5.5px] rounded-[6px]', !!icon && !text && size === 'medium' && 'px-[7px] py-[7px] rounded-[10px]', !!icon && !text && size === 'large' && 'px-[7.5px] py-[7.5px] rounded-[12px]', !!icon && !text && size === 'xlarge' && 'px-[8px] py-[8px] rounded-[12px]', rounded === 'small' && "rounded-[4px]", rounded === 'medium' && "rounded-md", rounded === 'full' && "rounded-full", disabled && 'cursor-not-allowed bg-neutral-100 hover:bg-neutral-150', "".concat(customCss));
  var dropdownStyle = clsx("".concat(active ? 'bg-neutral-150 text-neutral-800' : 'text-neutral-600'), disabled && 'cursor-not-allowed bg-neutral-100 hover:bg-neutral-100', "group flex items-center py-[8px] px-[16px]  text-sm\n    hover:outline-none hover:bg-neutral-100 hover:text-primary-400\n    hover:ring-[1px] hover:ring-primary-200 hover:ring-offset-neutral-50\n    focus:outline-none focus:bg-neutral-100 focus:text-primary-400\n    focus:ring-[1px] focus:ring-primary-200 focus:ring-offset-neutral-50\n    w-full ".concat(customCss));
  var spanStyle = clsx('contents align-middle', text && size === 'tiny' && 'h-[14px]', text && size === 'small' && 'h-[17px]', text && size === 'medium' && 'h-[20px]', text && size === 'large' && 'h-[25px]', text && size === 'xlarge' && 'h-[30px]', !!icon && !!text && size === 'tiny' && 'pt-[1px]');
  var iconStyle = clsx(!!icon && !!text && size === 'tiny' && 'pr-[3px] hover:fill-black', !!icon && !!text && size === 'small' && 'pr-[4.5px] fill-white', !!icon && !!text && size === 'medium' && 'pr-[6px] hover:fill-black', !!icon && !!text && size === 'large' && 'pr-[6.5px] hover:fill-black', !!icon && !!text && size === 'xlarge' && 'pr-[7px] hover:fill-black', !!icon && !text && size === 'tiny' && '', !!icon && !text && size === 'small' && '', !!icon && !text && size === 'medium' && '', !!icon && !text && size === 'large' && '', !!icon && !text && size === 'xlarge' && '');
  var handleClick = function handleClick() {
    // runSound()
    if (onClick) onClick();
  };
  var runSound = function runSound() {
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
  };
  if (type === 'menu') return /*#__PURE__*/React.createElement(Menu.Button, {
    className: buttonStyle,
    disabled: disabled
  }, !!icon && !loading ? /*#__PURE__*/React.createElement("div", {
    className: iconStyle
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size
  })) : loading && /*#__PURE__*/React.createElement("div", {
    className: "pr-[8px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "origin-center animate-spin"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "spinner",
    size: size,
    viewBox: "0 0 16 16"
  }))), text && /*#__PURE__*/React.createElement("span", {
    className: spanStyle
  }, text));
  if (type === 'popover') return /*#__PURE__*/React.createElement(Popover.Button, {
    className: buttonStyle,
    disabled: disabled
  }, !!icon && !loading ? /*#__PURE__*/React.createElement("div", {
    className: iconStyle
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size
  })) : loading && /*#__PURE__*/React.createElement("div", {
    className: "pr-[8px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "origin-center animate-spin"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "spinner",
    size: size,
    viewBox: "0 0 16 16"
  }))), text && /*#__PURE__*/React.createElement("span", {
    className: spanStyle
  }, text));
  if (type === 'submit') return /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: buttonStyle
  }, !!icon && !loading ? /*#__PURE__*/React.createElement("div", {
    className: iconStyle
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size
  })) : loading && /*#__PURE__*/React.createElement("div", {
    className: "pr-[8px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "origin-center animate-spin"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "spinner",
    size: size,
    viewBox: "0 0 16 16"
  }))), text && /*#__PURE__*/React.createElement("span", {
    className: spanStyle
  }, text));
  if (type === 'action') return /*#__PURE__*/React.createElement("form", {
    className: "inline"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    formAction: to,
    formMethod: "post",
    className: variant === 'dropdown' ? dropdownStyle : buttonStyle,
    disabled: disabled
  }, !!icon && !loading ? /*#__PURE__*/React.createElement("div", {
    className: iconStyle
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size
  })) : loading && /*#__PURE__*/React.createElement("div", {
    className: "pr-[8px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "origin-center animate-spin"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "spinner",
    size: size,
    viewBox: "0 0 16 16"
  }))), text && /*#__PURE__*/React.createElement("span", {
    className: spanStyle
  }, text)));
  if (type === 'link' && !!Component) return /*#__PURE__*/React.createElement(Component, {
    to: !disabled ? to : '#',
    className: variant === 'dropdown' ? dropdownStyle : buttonStyle,
    disabled: disabled
  }, !!icon && !loading ? /*#__PURE__*/React.createElement("div", {
    className: iconStyle
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size
  })) : loading && /*#__PURE__*/React.createElement("div", {
    className: "pr-[8px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "origin-center animate-spin"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "spinner",
    size: size,
    viewBox: "0 0 16 16"
  }))), text && /*#__PURE__*/React.createElement("span", {
    className: spanStyle
  }, text));
  if (type === 'upload' && !!startUpload) return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "pt-4"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "file-upload",
    className: buttonStyle
  }, !!icon && !loading ? /*#__PURE__*/React.createElement("div", {
    className: iconStyle
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size
  })) : loading && /*#__PURE__*/React.createElement("div", {
    className: "pr-[8px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "origin-center animate-spin"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "spinner",
    size: size,
    viewBox: "0 0 16 16"
  }))), text && /*#__PURE__*/React.createElement("span", {
    className: spanStyle
  }, text), /*#__PURE__*/React.createElement("input", {
    id: "file-upload",
    name: "file-upload",
    type: "file",
    disabled: disabled,
    className: "sr-only",
    onChange: function onChange(e) {
      return startUpload(e);
    }
  }))));
  if (as === 'div') return /*#__PURE__*/React.createElement("div", {
    className: variant === 'dropdown' ? dropdownStyle : buttonStyle
  }, !!icon && !loading ? /*#__PURE__*/React.createElement("div", {
    className: iconStyle
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size
  })) : loading && /*#__PURE__*/React.createElement("div", {
    className: "pr-[8px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "origin-center animate-spin"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "spinner",
    size: size,
    viewBox: "0 0 16 16"
  }))), text && /*#__PURE__*/React.createElement("span", {
    className: spanStyle
  }, text));
  return /*#__PURE__*/React.createElement("button", {
    type: "button"
    // onMouseOver={() => runSound()}
    ,
    className: variant === 'dropdown' ? dropdownStyle : buttonStyle,
    onClick: function onClick() {
      return handleClick();
    },
    disabled: disabled
  }, !!icon && !loading ? /*#__PURE__*/React.createElement("div", {
    className: iconStyle
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size
  })) : loading && /*#__PURE__*/React.createElement("div", {
    className: "pr-[8px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "origin-center animate-spin"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "spinner",
    size: !icon ? 'tiny' : size,
    viewBox: "0 0 16 16"
  }))), text && /*#__PURE__*/React.createElement("span", {
    className: spanStyle
  }, text));
};