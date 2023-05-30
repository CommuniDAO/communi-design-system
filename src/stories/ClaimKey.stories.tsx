import { withDesign } from 'storybook-addon-designs';
import { Meta } from '@storybook/react';
import { ClaimKey } from '~/src/templates/ClaimKey';
import '~/styles/index.css';

export default {
  component: ClaimKey,
  title: 'Templates / ClaimKey',
  argTypes: {},
  decorators: [withDesign]
};

export const Default = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/'
    }
  }
};
