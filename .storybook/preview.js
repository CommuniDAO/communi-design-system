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
    dark: { ...themes.dark, appBg: '#000104', brandImage: 'https://imagedelivery.net/uDbEDRBQqhBXrrfuCRrATQ/4238215e-569a-472a-89df-f2eb2fc4ae00/public' },
    light: { ...themes.normal, appBg: '#E7EDFA', brandImage: 'https://imagedelivery.net/uDbEDRBQqhBXrrfuCRrATQ/4238215e-569a-472a-89df-f2eb2fc4ae00/public' },
    classTarget: 'html',
    stylePreview: true
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#E7EDFA'
      },
      {
        name: 'dark',
        value: '#1C181E'
      }
    ]
  }
};
