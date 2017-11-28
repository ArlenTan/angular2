"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 通过测试,发现这里接收到一个参数, 为Test类
// 那么我们要思考, 人家为什么要把Test类传给这个函数?
// 是因为装饰器的作用就是装饰别人的,要装饰别人首先得拿到别人,才可以进行处理
function decoratorFn() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    arg[0].a = 10; // 拿到类之后,可以对类进行各种操作
    arg[0].a = 10; // 这里给被装饰的类添加了两个静态属性
}
// 装饰器就是使用@符号调用某个函数, 函数在执行的时候, 会自动接收到一些参数
var Test = /** @class */ (function () {
    function Test() {
    }
    Test = __decorate([
        decoratorFn
    ], Test);
    return Test;
}());
var Test2 = /** @class */ (function () {
    function Test2() {
    }
    Test2 = __decorate([
        decoratorFn
    ], Test2);
    return Test2;
}());
