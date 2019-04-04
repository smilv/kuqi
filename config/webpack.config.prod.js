const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");
const bundleConfig = require("../build/dll/bundle-config.json");
module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "static/js/[name].[chunkhash:8].js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[name]__[local]___[hash:base64:5]"
                        }
                    },
                    "sass-loader",
                    {
                        loader: "sass-resources-loader",
                        options: {
                            resources: path.resolve(__dirname, "../src/assets/css/common.scss")
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                loader: "url-loader",
                options: {
                    limit: 10000
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ["**/*", "!dll/**"] }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../index.html"),
            bundleName: `dll/${bundleConfig.vendor.js}`,
            inject: true
        }),
        new webpack.NamedModulesPlugin(),
        new MiniCssExtractPlugin({
            filename: "static/css/main.[contenthash:8].css"
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require("../build/dll/vendor-manifest.json")
        }),
        new BundleAnalyzerPlugin()
    ]
};
