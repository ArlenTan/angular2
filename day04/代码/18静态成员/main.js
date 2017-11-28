var Person = /** @class */ (function () {
    function Person() {
    }
    Person.getTotal = function () {
        return '70亿';
    };
    Person.maxAge = 250;
    return Person;
}());
// 静态成员通过类名调用
Person.maxAge; // 250
Person.getTotal(); // '70亿'
