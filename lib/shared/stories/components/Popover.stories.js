import React from 'react';
import { Popover } from "../../components/Popover";
import { withDesign } from 'storybook-addon-designs';
import "../../../../styles/index.css";
var items = [{
  name: 'Insights',
  description: 'Measure actions your users take',
  href: '##'
}, {
  name: 'Automations',
  description: 'Create your own targeted content',
  href: '##'
}, {
  name: 'Reports',
  description: 'Keep track of your growth',
  href: '##'
}];
export default {
  component: Popover,
  title: 'Flash / Popover',
  args: {
    button: {
      variant: 'basic',
      icon: 'info'
    },
    children: /*#__PURE__*/React.createElement("div", null, "More information about.")
  },
  decorators: [withDesign]
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(Popover, args);
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
  }
};