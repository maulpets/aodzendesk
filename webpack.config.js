const metatags = require('./src/pages/meta-tags.json');
const headerLinks = require('./src/pages/header-links.json');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');
require('html-webpack-template');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

const pageConfig = require('./landing-page-config.json');

// cmd "/c taskkill /im node.exe /F"

module.exports = {
  entry: ['./src/maulpets.js'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader"   },
          { loader: "sass-loader",
            options: { includePaths: ["./src/styles"] }
          }
        ]
      },
      {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: './images'
              }
            }
          ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
         // Required
         inject: false,
         template: 'src/index.ejs',
         filename: 'index.html',
         googleAnalytics: {
           trackingId: 'UA-84943447-5',
           pageViewOnLoad: true
         },
         meta: metatags,
         mobile: true,
         lang: 'en-US',
         links: headerLinks,
         pageID: 'landing-page',
         preLoader: true,
         navigationBar: false,
         footer: true,
         title: pageConfig.title
       }),
       new webpack.ProvidePlugin({
          anime: 'animejs'
        }),
        new FaviconsWebpackPlugin('./src/images/logos/AOD_Circles.svg'),
        new HtmlWebpackInlineSVGPlugin({
             runPreEmit: true,
         })
  ]
};
