const metatags = require('./src/pages/meta-tags.json');
const headerLinks = require('./src/pages/header-links.json');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
require('html-webpack-template');
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

const pageConfig = require('./landing-page-config.json');

module.exports = {
  entry: ['./src/maulpets.js'],
  output: {
  	path: "//?/W:" + "/" + pageConfig.dir,
  	// publicPath: "http://aodtest.infotronics.com/dist/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { //SASS - START loader to process cool sass to lame-o css3
       test: /\.scss$/,
       use: [   MiniCssExtractPlugin.loader,
               {
               loader: "css-loader" // translates CSS into CommonJS
               },
               {
               loader: "sass-loader", //compiles css form sasss
               options: {
                   includePaths: ["./src/styles"] }
               }
           ]
       }, //SASS - END loader,
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
         // outputRoot: 'http://aodtest.infotronics.com/',
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
         // inlineManifestWebpackName: 'webpackManifest',
         scripts: [
              // {
              //   src: '',
              //   integrity: 'sha256-slogkvB1K3VOkzAI8QITxV3VzpOnkeNVsKvtkYLMjfk',
              //   crossorigin: "anonymous"
              // }
          ],
         title: pageConfig.title
       }),
      new MiniCssExtractPlugin({
        // filename: "[name].css",
        // chunkFilename: "[id].css"
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
