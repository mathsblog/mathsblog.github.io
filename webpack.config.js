const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

module.exports = {
    target: 'node',
    mode: 'development',
    entry: './src/index.js',
    output: {
        publicPath: '',
        filename: 'bundle.js',
        library: { name: 'bundle', type: 'umd' },
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css/,
                use: ['css-loader', 'postcss-loader'],
            },
            {
                test: /\.mdx$/,
                use: [
                    'babel-loader',
                    {
                        loader: '@mdx-js/loader',
                        /** @type {import('@mdx-js/loader').Options} */
                        options: {
                            jsx: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 200000,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new StaticSiteGeneratorPlugin(
            'bundle.js',
            ['/', '/404.html'].concat(
                fs
                    .readdirSync('./src/articles')
                    .filter((a) => a !== 'index.js')
                    .map((a) => '/articles/' + a)
            )
        ),
    ],
};
