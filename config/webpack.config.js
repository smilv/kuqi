const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "static/js/bundle.js"
    },
    module: {
        rules: [{ test: /\.(js|jsx)$/, loader: "babel-loader", exclude: /node_modules/ }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "../build"),
        publicPath: "/",
        historyApiFallback: true,
        inline: true,
        hot: true,
        port: 80
    }
};
