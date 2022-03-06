const base = require('./webpack.base');
const { merge } = require('webpack-merge');
const path = require('path');
const resolv = (dir) => {
    return path.resolve(__dirname, dir);
};
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = merge(base, {
    entry: {
        client: resolv('../src/client-entry.js')
    },
    plugins: [
        new VueSSRClientPlugin()
    ]
})