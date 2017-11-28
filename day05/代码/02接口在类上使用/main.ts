// 接口的首字母最好也大写
interface DogInterface {
  name: string;       // 正常
  age: number = 10;   // 报错   
  eat(): void;        // 正常
  run(): void {       // 报错
      console.log('动一动')
  }
}

// 类实现接口, 在实现过程中, 接口的东西一个都不能少, 但是多是允许的
class Dog implements DogInterface{

    // 这里多了一个gender实例成员, 没有问题
    constructor(public name: string, public age: number, public gender: string){}

    eat(): void {
        console.log('吃')
    }

    run(): void {
        console.log('动')
    }
}