function decoratorFn(...arg: any[]) {
    console.log('我执行了, 并且我自动收到了下面的东西!');
    console.log(arg);
}

// 写法1: 在类的前一行使用装饰器
@decoratorFn
class Test {}

// 写法2: 在类前面的使用装饰器
@decoratorFn class Test2 {}