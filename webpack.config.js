const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/example.js',
    output: {
        path: __dirname,
        filename: 'example.js'
    },
    devtool: '#inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};
