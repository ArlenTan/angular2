// 如果一个模块只向外暴漏一个值, 那么用默认值就好了
let a = 10
let b = 20;
export default function() {
   return a + b;
};