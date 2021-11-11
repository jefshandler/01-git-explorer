const path = require('path')
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                // expressão regular (\.jsx pare a expressao \ confirme se o arquivo termine com  .jsx)
                test: /\.jsx$/,
                //exclui todos os aquivos da pasta modulo
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ],
    }
};