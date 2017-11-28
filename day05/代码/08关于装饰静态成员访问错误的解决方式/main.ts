// 通过测试,发现这里接收到一个参数, 为Test类
// 那么我们要思考, 人家为什么要把Test类传给这个函数?
// 是因为装饰器的作用就是装饰别人的,要装饰别人首先得拿到别人,才可以进行处理
function decoratorFn(...arg: any[]) {
    arg[0].a = 10;   // 拿到类之后,可以对类进行各种操作
    arg[0].b = 10;   // 这里给被装饰的类添加了两个静态属性
}   

class TestP {
    static a: number;
    static b: number;
}

// 装饰器就是使用@符号调用某个函数, 函数在执行的时候, 会自动接收到一些参数
@decoratorFn
class Test {
    static a: number;
    static b: number;
}

@decoratorFn
class Test2 extends TestP{}

// 上面的装饰器给Test与Test2两个类分别添加了a与b属性
console.log(Test.a);  // 正常, 因为主动声明了静态属性a 
console.log(Test.b);

console.log(Test2.a);  // 正常, 因为继承了TestP类, TestP类里声明了静态属性a
console.log(Test2.b);