var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 可传参的装饰器函数, 是一个嵌套函数, 外面用来接收用户穿过来的参数, 
// 里面的函数用来接收装饰器执行时js引擎传递进来的参数
function log(config) {
    return function (target, name) {
        var old = target[name];
        target[name] = function () {
            if (config === 'top' || config === 'all') {
                console.log('封装');
            }
            old();
            if (config === 'bottom' || config === 'all') {
                console.log('封装');
            }
        };
    };
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.say = function () {
        console.log('我是原来的say方法');
    };
    Person.prototype.run = function () {
        console.log('我是原来的run方法');
    };
    __decorate([
        log('top')
    ], Person.prototype, "say");
    __decorate([
        log('all')
    ], Person.prototype, "run");
    return Person;
}());
