class Person {
    private static color: string = '黄色';
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    say(): void {
        console.log(this.name);    // 私有的东西只能在类的里面使用, 出了这个类就不行
        console.log(Person.color); // 私有的东西只能在类的里面使用, 出了这个类就不行
    }
}

let fei = new Person('狒狒') 
console.log(fei.name);      // 只有public修饰的属性方法才能在类的外面使用
console.log(Person.color);  // 只有public修饰的属性方法才能在类的外面使用