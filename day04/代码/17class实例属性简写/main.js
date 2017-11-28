var Dog = /** @class */ (function () {
    function Dog(name, age) {
        this.name = name;
        this.age = age;
    }
    return Dog;
}());
var d = new Dog('中华田园犬', 20);
console.log(d.name);
