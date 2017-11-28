class Person {
    constructor(public name: string) {}
}

class Dog {

}

// p存储的是Person类型的实例
let p: Person = new Person('小红')
// d存储的是Dog类型的实例
let d: Dog = new Dog();

//严谨一点的话, 大写代表对象, 小写代表基本数据类型
let s: Number = new Number();
let ss: number = 123;
