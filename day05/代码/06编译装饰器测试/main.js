"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decoratorFn() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    console.log('我执行了, 并且我自动收到了下面的东西!');
    console.log(arg);
}
// 写法1: 在类的前一行使用装饰器
var Test = /** @class */ (function () {
    function Test() {
    }
    Test = __decorate([
        decoratorFn
    ], Test);
    return Test;
}());
// 写法2: 在类前面的使用装饰器
var Test2 = /** @class */ (function () {
    function Test2() {
    }
    Test2 = __decorate([
        decoratorFn
    ], Test2);
    return Test2;
}());
