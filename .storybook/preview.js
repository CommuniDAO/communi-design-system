import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    showPanel: false
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  darkMode: {
    current: 'light',
    darkClass: 'midnight',
    dark: { ...themes.dark, appBg: '#000104', brandImage: 'https://imagedelivery.net/uDbEDRBQqhBXrrfuCRrATQ/3d995683-15fd-4ca3-9e0c-aadbe99e7a00/public' },
    light: { ...themes.normal, appBg: '#F5F4F7', brandImage: 'https://imagedelivery.net/uDbEDRBQqhBXrrfuCRrATQ/3d995683-15fd-4ca3-9e0c-aadbe99e7a00/public' },
    classTarget: 'html',
    stylePreview: true
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: '#F5F4F7'
      },
      {
        name: 'dark',
        value: '#1C181E'
      }
    ]
  }
};
