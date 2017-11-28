"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 专门装饰属性的装饰器
// 装饰!!实例!!属性接收到的第一个参数为!!原型!!, 第二个参数为要装饰的属性名称
// 装饰!!静态!!属性接收到的第一个参数为!!类!!, 第二个参数为要装饰的属性名称
function propZhuangshiqi() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    var classOrPrototype = arg[0]; // 类或原型
    var propName = arg[1]; // 属性名称
    // 根据属性名称添加对应的set方法
    classOrPrototype['set' + propName] = function (val) {
        this[propName] = val;
    };
    // 根据属性名称添加对应的get方法
    classOrPrototype['get' + propName] = function () {
        return this[propName];
    };
}
var Person = /** @class */ (function () {
    function Person() {
        this.name = '匿名';
    }
    Person.age = 0;
    __decorate([
        propZhuangshiqi
    ], Person.prototype, "name", void 0);
    __decorate([
        propZhuangshiqi
    ], Person, "age", void 0);
    return Person;
}());
console.log(Person.prototype.name); // name使用了装饰器后, Person原型便多了一个name属性
console.log(Person.age); // 静态属性age使用了装饰器后, age的值便被修改了, 修改为了'装饰器修改后的值'
