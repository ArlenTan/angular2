var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // 受保护权限只能在当前类或者子类使用
    function Person(name, color) {
        this.name = name;
        this.color = color;
    }
    return Person;
}());
var YPerson = /** @class */ (function (_super) {
    __extends(YPerson, _super);
    function YPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return YPerson;
}(Person));
var xiege = new Person('谢霆锋', '黄');
var xiegege = new YPerson('谢霆锋', '黄');
console.log(xiege.name); // protected权限的属性外面使用不了
console.log(xiegege.name); // protected权限的属性外面使用不了
