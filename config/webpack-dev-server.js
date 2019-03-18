"use strict";
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config");
const webpack = require("webpack");
const path = require("path");
const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
    contentBase: path.resolve(__dirname, "../build"),
    historyApiFallback: true,
    port: 80,
    publicPath: "/"
});

server.listen(80, "localhost", function(err) {
    if (err) throw err;
});
