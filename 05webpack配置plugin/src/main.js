/**
 * Created by Administrator on 2020/6/26.
 */
使用commonjs的规范
const {add,mul} = require('./JS/mathUtil.js')
console.log(add(20,30));
console.log(mul(20,30));

import {name,age,height} from  "./JS/info";

console.log(name);
console.log(age);
console.log(height);

// 依赖CSS文件
require('./css/normal.css')

// 依赖less文件
require('./CSS/special.less')

document.writeln('<h2>你好啊，要开心</h2>')

// 使用vue进行开发
import Vue from 'vue'
import App from './vue/App.vue'

// import App from './vue/app.js'

new Vue({
    el:'#app',
    template:`<App/> `,
    components:{
        App
    }
})

document.writeln('<button>按钮</button>')
