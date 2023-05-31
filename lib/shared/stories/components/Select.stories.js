function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { Select } from "../../components/Select";
import { withDesign } from 'storybook-addon-designs';
import "../../../../styles/index.css";
function fn(value) {
  // console.log(value);
}
var options = [{
  name: 'Wade Cooper',
  id: '1'
}, {
  name: 'Arlene Mccoy',
  id: '2'
}, {
  name: 'Devon Webb',
  id: '3'
}, {
  name: 'Tom Cook',
  id: '4'
}, {
  name: 'Tanya Fox',
  id: '5'
}, {
  name: 'Hellen Schmidt',
  id: '6'
}];
export default {
  component: Select,
  title: 'Data Handle / Select',
  argsTypes: {
    initialState: {
      control: 'array'
    }
  },
  args: {
    options: options,
    defaultValue: 'Arlene Mccoy'
  },
  decorators: [withDesign]
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(Select, _extends({}, args, {
    register: fn,
    setValue: fn
  }));
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
  }
};