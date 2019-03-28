"use strict";

const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        vendor: ["react", "react-dom"]
    },
    output: {
        path: path.resolve(__dirname, "../build/dll"),
        filename: "dll.[name].[chunkhash].js",
        library: "[name]_[chunkhash]"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            path: path.resolve(__dirname, "../build/dll/[name]-manifest.json"),
            name: "[name]_[chunkhash]",
            context: __dirname
        })
    ]
};
