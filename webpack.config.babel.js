import path from 'path';

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import InlineChunkManifestHtmlWebpackPlugin from 'inline-chunk-manifest-html-webpack-plugin';

const SERVER_PORT = process.env.SERVER_PORT || 3001;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';

export default {
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill',
    'webpack/hot/dev-server',
    `webpack-dev-server/client?http://${SERVER_HOSTNAME}:${SERVER_PORT}`,
    path.join(__dirname, 'src', 'index.js'),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'assets/[name].js',
    chunkFilename: 'assets/[name].js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_END || 'development'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'tba',
      template: path.join(__dirname, 'src', 'index.ejs'),
      // favicon: path.join(__dirname, 'src', 'favicon.ico'),
      minify: {
        collapseWhitespace: true,
      },
    }),
    new InlineChunkManifestHtmlWebpackPlugin({
      dropAsset: true,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json'],
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules'),
    ],
    alias: {
      components: path.join(__dirname, 'src/components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.(scss|sass|css)$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { minimize: true },
            },
            'postcss-loader',
            'sass-loader',
          ],
        }),
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.(eot|tff|woff|woff2)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader',
        include: path.join(__dirname, 'src'),
      },
    ],
  },
};