// 有了模块的概念后,每个模块的变量只能在当前模块中使用,也就是说有了模块就不会再有全局变量了.
let a = 10;
let b = 20;
let c = a + b;
let d = a * b;
export { a, b, c, d };