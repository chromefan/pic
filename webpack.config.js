var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const extractVendorCss = new ExtractTextPlugin('vendors.[hash].css'); //第三方组件
const extractAppCss = new ExtractTextPlugin('app.[hash].css');  //全局css

module.exports = {
    entry: {
        app: './resources/assets/js/app.js',
        vendor: ['element-ui', 'vue-router']
    },
    output: {
        path: path.resolve(__dirname, 'public/build'),
        publicPath: '/build',
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractAppCss.extract([
                    'css-loader',
                    'sass-loader'
                ])
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: extractAppCss.extract({
                                use: 'css-loader!sass-loader',
                                fallback: 'vue-style-loader'
                             })
                    }
                }
            },
            {
                test: /\.css$/,
                use: extractVendorCss.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|plugins)/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: '/img/[name].[hash:7].[ext]',
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: '/fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            // 'vue$': 'vue/dist/vue.js',
            '@': path.resolve(__dirname, 'resources/assets/js'),
            '_': 'lodash'
        }
    },
    plugins: [
        extractVendorCss,
        extractAppCss,

        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'resources/views/index.blade.php'),
            template: 'resources/assets/index.tpl.html'
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            _: "lodash",
            lodash: "lodash",
            Vue: ['vue/dist/vue.esm.js', 'default']
        }),

        new CopyWebpackPlugin([
          { from: 'resources/assets/js/dep/handsontable', to: '../handsontable' },
        ]),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: "commons.[hash].js",
        }),
    ]
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';

    module.exports.plugins = module.exports.plugins.concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),

        new CleanWebpackPlugin(['build'], {
            root: path.resolve(__dirname, 'public'),
            exclude: []
        }),

        new webpack.optimize.UglifyJsPlugin()
    ]);

    console.log('生成环境压缩代码, 时间稍长');
}
