// 装饰器工厂内部返回一个函数, 内部的函数就是我们之前写的装饰器函数
function getZhuangshiqi(a: number) {

    // 这个装饰器函数可以自动接收到一些值, 因为我们这个案例装饰了类, 那么就应该得到一个类
    return function(target: any) {

        // 现在这个装饰器函数即可以使用用户传过来的参数, 也可以使用自动传过来的参数
        console.log(a);   
        console.log(target);   
    }
}

@getZhuangshiqi(123)  // 用户现在可以调用传参
class Person{}