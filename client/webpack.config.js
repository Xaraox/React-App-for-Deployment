const path = require("path");

module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, "./src"),
        historyApiFallback: true
    },
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        filename: "bundle.js"
    },
    module:{
        rules: [{
            test: /\.js$/,
            use: "babel-loader"
        }]
    }
};