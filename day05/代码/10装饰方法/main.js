"use strict";
// 专门装饰函数的
// 自动收到的参数1, 实例方法为原型, 静态方法为类
// 自动收到的参数2, 为方法的名称
// 自动收到的参数3, 为方法的描述对象
function readonly() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    arg[2].writable = false;
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.run = function () {
        console.log('跑');
    };
    return Person;
}());
// 上面的装饰器把run方法设置为只读的, 那么我们就改改试试, 看看有没有生效
// 打开浏览器发现报错了, 说明我们的装饰器生效了
Person.prototype.run = function () {
    console.log('修改后的跑方法');
};
