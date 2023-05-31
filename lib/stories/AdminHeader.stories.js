function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { withDesign } from 'storybook-addon-designs';
import { AdminHeader } from "../composables/AdminHeader";
import "../../styles/index.css";
export default {
  component: AdminHeader,
  title: 'Composables / AdminHeader',
  argTypes: {},
  decorators: [withDesign]
};

//export const Default = (args: any) => <AdminHeader {...args} />;
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(AdminHeader, _extends({}, args, {
    menu: [{
      text: 'Item 1',
      icon: 'Users',
      to: '/path1'
    }, {
      text: 'Item 2',
      icon: 'Medal',
      to: '/path2'
    }, {
      text: 'Item 3',
      icon: 'Roles',
      to: '/path3'
    }]
  }));
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/'
  }
};