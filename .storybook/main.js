module.exports = {
  stories: ['../packages/**/index.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-storysource'],
  webpackFinal: (config) => {

    // See issue: https://github.com/storybookjs/storybook/issues/3346#issuecomment-554270012

    const excludePaths = [/node_modules/, /dist/];

    // Use real file paths for symlinked dependencies do avoid including them multiple times
    config.resolve.symlinks = true;

    // HACK: extend existing JS rule to ensure all dependencies are correctly ignored
    // https://github.com/storybooks/storybook/issues/3346#issuecomment-459439438
    const jsRule = config.module.rules.find((rule) => rule.test.test('.jsx'));
    jsRule.exclude = excludePaths;

    // HACK: Instruct Babel to check module type before injecting Core JS polyfills
    // https://github.com/i-like-robots/broken-webpack-bundle-test-case
    const babelConfig = jsRule.use.find(({ loader }) => loader === 'babel-loader');
    babelConfig.options.sourceType = 'unambiguous';

    // HACK: Ensure we only bundle one instance of React
    config.resolve.alias.react = require.resolve('react');

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
