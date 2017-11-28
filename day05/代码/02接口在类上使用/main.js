"use strict";
{
    console.log('动一动');
}
// 类实现接口, 在实现过程中, 接口的东西一个都不能少, 但是多是允许的
var Dog = /** @class */ (function () {
    // 这里多了一个gender实例成员, 没有问题
    function Dog(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Dog.prototype.eat = function () {
        console.log('吃');
    };
    Dog.prototype.run = function () {
        console.log('动');
    };
    return Dog;
}());
