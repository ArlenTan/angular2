interface data {
    a: number;
    b: RegExp;
}

let obj: data = { a: 123, b: /abc/ };  // 正常
let obj2: data = { a: 123, b: new RegExp('abc') };  // 正常
let obj3: data = { a: 123 };                  // 报错
let obj4: data = { a: 123, b: true };         // 报错
let obj5: data = { a: 123, b: /b/, c: 123 };  // 报错 !!!!变量中使用接口,数据多了也不行
