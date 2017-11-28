class Dog {

    // 必须先定义好实例属性,才能赋值
    name: string;
    age: number = 0;

    // 函数定义形参类型,用来约束调用者
    constructor(name: string, age: number) {
        this.name = '中国版本' + name;
        this.age = age;
    }
}