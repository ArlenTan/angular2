"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 装饰器工厂, 专门用来装饰方法
function getDecorator() {
    return function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        var oldFn = arg[2].value; // 缓存旧方法
        console.log(oldFn);
        // 装饰方法自动接收的第三个参数为描述对象,该对象有个value属性,可以获取被装饰的方法自身
        // 把旧的方法替换成新的方法, 新的方法会记录执行时间
        arg[2].value = function (count) {
            var startTime = Date.now(); // 记录方法执行的开始时间
            oldFn(count);
            console.log(Date.now() - startTime); // 打印方法执行所需的时间
        };
    };
}
// 时间统计的装饰器
function time(target, name, msg) {
    // 保存旧方法
    var oldFn = msg.value;
    // 替换成新方法
    msg.value = function () {
        var startTime = Date.now();
        oldFn();
        console.log(Date.now() - startTime);
    };
}
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.loop = function () {
        for (var i = 0; i < 5000; i++) {
            console.log('跑起来');
        }
    };
    __decorate([
        time
    ], Dog, "loop", null);
    return Dog;
}());
Dog.loop();
