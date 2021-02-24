module.exports = {
  "stories": [
    "../stories-vue/**/*.stories.mdx",
    "../stories-vue/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
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
