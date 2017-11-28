let num: number = 123;

// 对象接口可以用来设定或限制对象里面每个属性的类型
interface a { a: number, b: boolean, c: string };

// 上面定义了一个接口, 我们在定义变量的时候, 可以设置变量为指定的接口类型, 
// 这样只给给这个变量赋值满足接口数据类型的对象
let obj: a = {
    a: 124,
    b: true,
    c: 'abc'
};

let obj2: a = {
    a: 124,
    b: true,
    c: 'abc'
}
