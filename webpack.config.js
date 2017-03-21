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
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};
