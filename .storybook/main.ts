import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
    '@chromatic-com/storybook',
  ],
  framework: {
    buttonName: '@storybook/react-vite',
    options: {},
    name: '@storybook/react-vite'
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
