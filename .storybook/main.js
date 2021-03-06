module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../app/components/**/*.stories.mdx",
    "../app/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    '@storybook/addon-a11y',
    'storybook-addon-outline',
    'storybook-mobile'
  ],
  webpackFinal: async config => {
    // //Use loaders to handle scss
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'sass-resources-loader',
          options: {
            resources: ['./components/globals.scss'],
          },
        },
      ],
    })

    return config;
  },
}