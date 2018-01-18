const webpack = require('webpack');
const ngtools = require('@ngtools/webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'app': './main.ts',
    },

    devtool: 'source-map',

    output: {
        path: path.resolve(__dirname, 'obj'),
        publicPath: '/obj/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    // resolve: {
    //     extensions: [
    //         '.js', '.ts'
    //     ]
    // },

    module: {
        rules: [
            {
                test: /\.ts$/,
                // use: [ 'awesome-typescript-loader?configFileName=config/tsconfig.json', 'angular2-template-loader' ]
                use: '@ngtools/webpack',
            },
            {
                test: /\.html$/,
                // use: 'html-loader'
                use: 'raw-loader',
                exclude: path.resolve(__dirname, 'index.html'),
            },
            {
                test: /\.css$/,
                // use: 'html-loader'
                use: 'raw-loader',
            },
            // {
            //     test: /\.(png|jpe?g|gif|svg|woff|woff2|otf|ttf|eot|ico)$/,
            //     use: 'file-loader?name=assets/[name].[hash].[ext]'
            // }
        ]
    },

    plugins: [
        // new webpack.WatchIgnorePlugin([
        //     path.resolve(dirname, "obj") // ignore generating folder so as to prevent from infinite loop while watching 
        // ]),
        new ngtools.AngularCompilerPlugin({
            basePath: './',
            tsConfigPath: './tsconfig.json',
            mainPath: './main.ts',
            skipCodeGeneration: false /*true - dev, false - prod*/,
            // hostReplacementPaths: {
            //     'environments/environment.ts': fast ? 'environments/environment.ts' : 'environments/environment.prod.ts'
            // }
        }),
    ]
};