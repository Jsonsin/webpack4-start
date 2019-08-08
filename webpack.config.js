const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: true
                    }
                }]
            },
            {
                test: '/\.css$/',
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: 'url-loader',
                include: path.resolve(__dirname + '/src/'),
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        // contentBase: path.join(__dirname, './dist'),
        host: 'localhost', //  可以设置0.0.0.0 ,这样设置你可以通过127.0.0.1或则localhost去访问
        open: true, //  项目启动时,会默认帮你打开浏览器
        port: 8088,
        // hot: true    //在单页面应用开发中,我们修改了代码后是整个页面都刷新,开启hot后,将只刷新对应的组件
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new VueLoaderPlugin()
    ]
}