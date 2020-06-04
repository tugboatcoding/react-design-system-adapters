module.exports = {
  stories: ['../**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-storysource'],
  webpackFinal: (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          {
            test: /\.js/,
            include: /node_modules\/react-potion\/.*/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react'],
                  plugins: ['@babel/plugin-proposal-object-rest-spread'],
                },
              },
            ],
          },
          ...config.module.rules,
        ],
      },
    };
  },
};
