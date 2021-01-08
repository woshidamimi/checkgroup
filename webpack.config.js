const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const now = Date.now();

module.exports = {
    entry: ['./src/main.js'],
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'dist.[hash].js'  ,
    },
    resolve: {
        extensions: ['.vue', ' ']
    },
  
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            template: './index.html',
            inject: true
        })
    ],
    watchOptions: {
        poll: 1000,
        aggregateTimeout:500,
        ignored:/node_modules/
    }
}