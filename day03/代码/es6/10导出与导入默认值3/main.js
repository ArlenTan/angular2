import fn from './a.js';   // 导入默认值,不用加{},不用加*,直接使用一个变量接收即可
import * as a from './a.js';

fn();
console.log(a);
