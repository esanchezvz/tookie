import path from 'path'
import { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-onboarding',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(config) {
    // customize the Vite config here
    return {
      ...config,
      define: {
        'process.env': {},
      },
      resolve: {
        alias: [
          {
            find: '@tookie/core',
            replacement: path.resolve(__dirname, '../../../packages/tookie-core/'),
          },
        ],
      },
    }
  },
}

export default config
