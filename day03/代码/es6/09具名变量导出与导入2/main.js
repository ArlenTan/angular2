import { c } from './a.js';   // 可以按需导入
import * as a from './a.js';   // 如果要导入全部, 可以使用*号

console.log(c);
console.log(a.a);
console.log(a.b);
console.log(a.c);
console.log(a.d);
