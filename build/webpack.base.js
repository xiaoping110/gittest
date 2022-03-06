const VueLoaderPlugin = require('vue-loader/lib/plugin')

const path = require('path');
const resolv = (dir) => {
    return path.resolve(__dirname, dir);
}
module.exports = {
    output: {
        //配置多入口
        filename: '[name].bundle.js',
        path: resolv('../dist')
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: '/\.js$/',
                use: {
                    options: {
                        preset: ['@babel/preset-env']
                    },
                    loader: 'babel-loader',
                },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.vue', 'json']
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    mode: 'development'
}