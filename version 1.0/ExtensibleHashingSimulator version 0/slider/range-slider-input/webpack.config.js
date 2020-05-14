const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const outputDirectory = path.resolve(__dirname, 'dist');

module.exports = {
    entry: ['./src/js/jQuery.inputSliderRange.js', './src/style/jQuery.inputSliderRange.scss'],
    mode: 'production',
    output: {
        filename: 'jQuery.inputSliderRange.min.js',
        path: outputDirectory
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin([outputDirectory]),
        new UglifyJsPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].min.css'
        }),
        new OptimizeCssAssetsPlugin({})
    ]
};