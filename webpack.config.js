const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loader = require('sass-loader');
const autoprefixer = require('autoprefixer');


module.exports = {
    mode: 'development',
    entry: {
        main: './src/main.js',
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Restaurant',
            template: './src/index.html'
        })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        
    },
    devtool: 'inline-source-map',
    module: {
        rules:[
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer
                                ]
                            }
                        }
                    },
                    {
                        loader:'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    }
}