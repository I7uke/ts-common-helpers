import * as path from 'path';
import * as webpack from 'webpack';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

//#region Константы
const DATE_BUILD = new Date();
// Режим разработки
const IS_DEVELOPMENT: boolean = process.env.NODE_ENV === 'development';
//#endregion

const config: webpack.Configuration = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: {
        'index': './src/index.ts',
        'convertToDate': './src/convertToDate.ts',
        'convertToNumber': './src/convertToNumber.ts',
        'dateFormatForView': './src/dateFormatForView.ts',
        'fixedLengthString': './src/fixedLengthString.ts',
        'getFileExtensionByName': './src/getFileExtensionByName.ts',
        'getIdFromUrl': './src/getIdFromUrl.ts',
        'getUrlParametersParser': './src/getUrlParametersParser.ts',
        'numberRounding': './src/numberRounding.ts',
        'validationNumber': './src/validationNumber.ts',
        'validationNumberArray': './src/validationNumberArray.ts',
        'validationString': './src/validationString.ts',
        'validationStringArray': './src/validationStringArray.ts',
    },
    devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',
    module: {
        rules: [
            {
                test: /\.(ts|js)$/,
                exclude: /(node_module|dist)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    },
                    {
                        loader: 'ts-loader',
                    },
                ],
            },

        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    output: {
        path: path.resolve('./dist'),
        filename: "[name].js",
        library: {
            type: 'umd',
        },
    }
};

console.log("\x1b[33m%s\x1b[0m", "____________________________________________________");
console.log(DATE_BUILD.toLocaleDateString() + " " + DATE_BUILD.toLocaleTimeString());
console.log("\x1b[33m%s\x1b[0m", "____________________________________________________");

export default config;
