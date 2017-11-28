"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 装饰器工厂内部返回一个函数, 内部的函数就是我们之前写的装饰器函数
function getZhuangshiqi(a) {
    // 这个装饰器函数可以自动接收到一些值, 因为我们这个案例装饰了类, 那么就应该得到一个类
    return function (target) {
        // 现在这个装饰器函数即可以使用用户传过来的参数, 也可以使用自动传过来的参数
        console.log(a);
        console.log(target);
    };
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person = __decorate([
        getZhuangshiqi(123)
    ], Person);
    return Person;
}());
