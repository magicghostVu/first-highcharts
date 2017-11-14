/**
 * Created by magic_000 on 14/11/2017.
 */
module.exports = {
    entry: './source/app.js',
    output: {
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: "source-map"

};