require('dotenv').config()
const path = require('path');

let stories = [];
if (process.env.NODE_ENV === 'development') {
  stories = [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.stories.dev.@(js|jsx|ts|tsx)',
    '../theme/**/*.stories.mdx',
    '../theme/**/*.stories.@(js|jsx|ts|tsx)',
    '../theme/**/*.stories.dev.@(js|jsx|ts|tsx)'
  ]
} else if (process.env.NODE_ENV === 'production'){
  stories = [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../theme/**/*.stories.mdx',
    '../theme/**/*.stories.@(js|jsx|ts|tsx)'
  ]
}

module.exports = {
  stories,
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-designs',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-measure',
    'storybook-dark-mode'
  ],
  core: {
    builder: 'webpack5'
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~/styles': path.resolve(__dirname, "../styles"),
      '~/src': path.resolve(__dirname, "../src"),
      '~/theme': path.resolve(__dirname, "../theme"),
    };

    return config;
  },
  "previewHead": (head) => (`
    ${head}
  `),
  "previewBody": (body) => (`
    ${body}
  `),
};