class Person {
    public static color: string = '黄色';
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}

let fei = new Person('狒狒') 
console.log(fei.name);      // 只有public修饰的属性方法才能在类的外面使用
console.log(Person.color);  // 只有public修饰的属性方法才能在类的外面使用