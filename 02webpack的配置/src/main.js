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

