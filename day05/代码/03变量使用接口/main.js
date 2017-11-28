"use strict";
var obj = { a: 123, b: /abc/ }; // 正常
var obj2 = { a: 123, b: new RegExp('abc') }; // 正常
var obj3 = { a: 123 }; // 报错
var obj4 = { a: 123, b: true }; // 报错
var obj5 = { a: 123, b: /b/, c: 123 }; // 报错 !!!!变量中使用接口,数据多了也不行
