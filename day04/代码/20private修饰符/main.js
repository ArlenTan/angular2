var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.color = '黄色';
    return Person;
}());
var fei = new Person('狒狒');
console.log(fei.name); // 只有public修饰的属性方法才能在类的外面使用
console.log(Person.color); // 只有public修饰的属性方法才能在类的外面使用
