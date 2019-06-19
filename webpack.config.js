var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');



module.exports = {
    entry: ['./src/index.js'],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader'
                }
            },
            {
                test:/\.(scss|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/,
                loader: 'url-loader?limit=100000&name=fonts/[name].[ext]'
            }
        ]
    },
    resolve: {
        alias:{
            Assets: path.resolve(__dirname, 'src/js/assets/'),
            Helpers: path.resolve(__dirname, 'src/js/helpers/')
            
        },
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        port: process.env.PORT || 3000
    },
    plugins: [
        new ExtractTextPlugin({filename:'style.css'})
    ]
  };