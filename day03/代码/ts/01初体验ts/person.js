class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log(`我是${this.name}`);
    }
    static getTotal() {
        return this.total;
    }
}
// 静态成员前面添加static修饰符就可以了, 静态方法内的this指向类自身
Person.total = '70亿';
let meimei = new Person('美美', 16);
meimei.say();
