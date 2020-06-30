/**
 * Created by Administrator on 2020/6/26.
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjswebpackPlugin = require('uglifyjs-webpack-plugin')


module.exports = {
    entry: './src/main.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                // style-loader负责将样式添加到DOM中
                // css-loader负责将CSS文件进行加载
                // 使用多个loader时，是从右向左读取
                use: [ 'style-loader','css-loader' ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100000
                        }
                    }
                ]
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    resolve:{
        // alias别名
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:`index.html`
        }),
        new UglifyjswebpackPlugin()
    ],
    devServer:{
        contentBase:'./dist',
        inline:true
    }
}