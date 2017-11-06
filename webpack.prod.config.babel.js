import path from 'path'

import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
// import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import InlineChunkManifestHtmlWebpackPlugin from 'inline-chunk-manifest-html-webpack-plugin'
import WebpackChunkHash from 'webpack-chunk-hash'
import BabiliPlugin from 'babel-minify-webpack-plugin'

export default {
  entry: {
    app: [
      'babel-polyfill',
      path.join(__dirname, 'src', 'index.js'),
    ],
    vendor: [
      'apollo-client',
      'babel-polyfill',
      'graphql-tag',
      'react',
      'react-apollo',
      'react-router-dom',
      'react-redux',
      'react-dom',
      'react-router-redux',
      'redux',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'assets/[name].[chunkhash].js',
    chunkFilename: 'assets/[name].[chunkhash].js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
    }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ExtractTextPlugin({
      filename: 'assets/[name].[contenthash].css',
      allChunks: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new BabiliPlugin({}),
    new HtmlWebpackPlugin({
      title: 'tba',
      template: path.join(__dirname, 'src', 'index.ejs'),
      // favicon: path.join(__dirname, 'src', 'favicon.ico'),
      meta: [
        {
          name: 'description',
          content: 'React boilerplate',
        },
      ],
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
}
