/**
 * Created by Administrator on 2020/6/28.
 */
/**
 * Created by Administrator on 2020/6/26.
 */
const UglifyjswebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig,{
    plugins:[
        new UglifyjswebpackPlugin()
    ],
})