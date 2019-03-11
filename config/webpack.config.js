const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");
console.log(process.cwd());
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(process.cwd(), "build"),
        filename: "static/js/bundle.js"
    },
    plugins: [new CleanWebpackPlugin()]
};
