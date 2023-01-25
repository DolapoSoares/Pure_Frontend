const path = require('path');

const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const { merge } = require("webpack-merge");
const config = require("./webpack.config")

module.exports = merge(config, {
    mode: 'production ',
    devtool: 'inline-source-map',

    output: {
        path: path.join(__dirname, 'public')
    },

    plugins:[
        new CleanWebpackPlugin()
    ]
 })