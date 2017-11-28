class Person {
   
    // ts中实例的属性必须先定义, 后面才能赋值
    public name: string;
    private readonly age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    say(): void {
        console.log(`我是${this.name}`);
    }

    // 静态成员前面添加static修饰符就可以了, 静态方法内的this指向类自身
    static total: string = '70亿';
    static getTotal(): string {
        return this.total;
    }
}

let meimei: Person = new Person('美美', 16);
meimei.say();