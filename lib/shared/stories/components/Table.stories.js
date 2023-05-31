function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { Table } from "../../components/Table";
import { withDesign } from 'storybook-addon-designs';
import "../../../../styles/index.css";
export default {
  component: Table,
  title: 'Data Show / Table',
  args: {
    headers: ['ID', 'Title']
  },
  argTypes: {
    headers: {
      type: {
        summary: 'array'
      }
    }
  },
  decorators: [withDesign]
};
var header = ['id', 'titles'];
var data = [[{
  value: '20042',
  type: 'simple'
}, {
  value: 'Once upon a time in the web.',
  type: 'simple'
}], [{
  value: '20042',
  type: 'simple'
}, {
  value: 'Once upon a time in the web.',
  type: 'simple'
}], [{
  value: '20042',
  type: 'simple'
}, {
  value: 'Once upon a time in the web.',
  type: 'simple'
}], [{
  value: '20042',
  type: 'simple'
}, {
  value: 'Once upon a time in the web.',
  type: 'simple'
}], [{
  value: '20042',
  type: 'simple'
}, {
  value: 'Once upon a time in the web.',
  type: 'simple'
}], [{
  value: {
    text: 'Text',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  type: 'image'
}, {
  value: 'Once upon a time in the web.',
  type: 'simple'
}]];
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(Table, _extends({}, args, {
    header: header,
    data: data
  }));
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=971%3A68'
  }
};