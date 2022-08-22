module.exports = {
    plugins: [
        [
            'postcss-preset-env',
            {
                // Options
            },
        ],
        require('cssnano')({
            preset: 'default',
        }),
    ],
};
