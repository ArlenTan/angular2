interface Person {
    name: string;
    age: number;
    gender: string = '男';              // 报错, 接口里的属性不能赋值
    say(): void;
    study(): void;
    run(): void{ console.log('跑') }  // 报错, 接口里的方法不能实现
}