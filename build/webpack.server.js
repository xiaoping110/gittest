const base = require('./webpack.base');
const { merge } = require('webpack-merge');
const path = require('path');
const resolv = (dir) => {
    return path.resolve(__dirname, dir);
}
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = merge(base, {
    entry: {
        server: resolv('../src/server-entry.js')
    },
    target: 'node',
    output: {
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new VueSSRServerPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.ssr.html',
            template: resolv('../public/index.ssr.html'),
            excludeChunks: ['server'],
            minify: false
        })

    ]
})