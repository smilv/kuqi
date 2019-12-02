const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const env = require("./env");
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "../build"),
        publicPath: "/",
        filename: "static/js/[name].js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
        alias: {
            "@": path.resolve(__dirname, "../src")
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[name]__[local]___[hash:base64:5]"
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                include: [/node_modules/],
                use: [
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "static/img/[name].[hash:8].[ext]"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../index.html"),
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin(env)
    ],
    node: {
        dgram: "empty",
        fs: "empty",
        net: "empty",
        tls: "empty",
        child_process: "empty"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "../build"),
        publicPath: "/",
        historyApiFallback: true,
        inline: true,
        hot: true,
        port: 8080,
        open: true
    }
};
