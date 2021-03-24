const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    mode: 'production',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + 'dist'
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css',
            linkType: 'text/css'
        })

    ],
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          
        ], 
        rules: [
            {
              test: /\.css$/i,
              exclude: /node_modules/,
              use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
          ],
    }, 

}