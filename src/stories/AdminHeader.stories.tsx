import { withDesign } from 'storybook-addon-designs';
import { Meta } from '@storybook/react';
import { AdminHeader } from '~/src/composables/AdminHeader'
import '~/styles/index.css';

export default {
  component: AdminHeader,
  title: 'Composables / AdminHeader',
  argTypes: {},
  decorators: [withDesign]
};

export const Default = (args: any) => <AdminHeader {...args} />;

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/'
  }
};
