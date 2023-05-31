function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { DateTime } from "../../components/DateTime";
import { withDesign } from 'storybook-addon-designs';
import "../../../../styles/index.css";
import { FakeLink } from "../../helpers";
export default {
  component: DateTime,
  title: 'Components / DateTime',
  decorators: [withDesign]
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(DateTime, _extends({}, args, {
    component: FakeLink,
    to: "/"
  }));
};
export var Medium = function Medium(args) {
  return /*#__PURE__*/React.createElement(DateTime, _extends({}, args, {
    variant: "medium",
    component: FakeLink,
    to: "/"
  }));
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OG2qkuEFEhNmf2wTA0wAGq/Design-System?node-id=346%3A2961'
  }
};