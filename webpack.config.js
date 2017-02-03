var path = require('path');

var src = path.resolve(__dirname, 'src');
var build = path.resolve(__dirname, 'build');

var webpack = require('webpack'); //for builtin plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('dirname ', __dirname);

//todo: figure out how to dllplugin
//https://github.com/webpack/webpack/tree/master/examples/dll
//https://robertknight.github.io/posts/webpack-dll-plugins/

module.exports = {
    entry: {
        app: [path.resolve(src, "app.js"), "angular"]
    },
    output: {
        path: build,
        //publicpath: /static,
        filename: "[name].[hash].js",
        //sourceMapFileName: "[file].[hash].map"

    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    'file-loader?name=partials/[name].[hash].[ext]',
                    'extract-loader',
                    'html-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My Webpack Site',
            template: path.resolve(src, 'index.hbs'),
            output: '[name].[hash].[ext]'
        })
    ]
};
