const autoprefixer = require('autoprefixer');

module.exports = (baseConfig, env, defaultConf) => {

  baseConfig.module.rules = [
    ...baseConfig.module.rules,
    {
      test: /\.css$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: require.resolve('postcss-loader'),
          options: {
            ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
            plugins: () => [
              require('postcss-flexbugs-fixes'), // eslint-disable-line
              autoprefixer({
                flexbox: 'no-2009',
              }),
            ],
          },
        },
      ],
    },
    {
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|svg|webp|ttf|woff|woff2)(\?.*)?$/,
      loader: require.resolve('file-loader'),
      query: {
        name: 'static/media/[name].[hash:8].[ext]',
      },
    },
    {
      test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
      loader: require.resolve('url-loader'),
      query: {
        limit: 10000,
        name: 'static/media/[name].[hash:8].[ext]',
      },
    }
  ];


  return baseConfig;
};
