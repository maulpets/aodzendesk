const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
// const template = require("./file.handlebars");

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
      },
      { test: /\.handlebars$/, loader: "handlebars-loader" }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
         // Required
         inject: false,
         template: 'src/index.ejs',
         filename: 'index.html',
       }),
       new MiniCssExtractPlugin({
         // filename: "[name].css",
         // chunkFilename: "[id].css"
       }),
        // new FaviconsWebpackPlugin('./src/images/logos/AOD_Circles.svg'),
        new HtmlWebpackInlineSVGPlugin({
             runPreEmit: true,
         })
  ]
};
