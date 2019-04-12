const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const AssetsPlugin = require("assets-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        vendor: ["react", "react-dom", "react-router-dom", "axios"]
    },
    output: {
        path: path.resolve(__dirname, "../build/dll"),
        publicPath: "/",
        filename: "dll.[name].[chunkhash:8].js",
        library: "[name]_[chunkhash:8]"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            path: path.resolve(__dirname, "../build/dll/[name]-manifest.json"),
            name: "[name]_[chunkhash:8]",
            context: __dirname
        }),
        new AssetsPlugin({
            filename: "bundle-config.json",
            path: path.resolve(__dirname, "../build/dll")
        })
    ]
};
