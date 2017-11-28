// 假设架构师设计好了程序所有所需的类, 以及类之间的调用关系, 
// 设计好之后, 架构师会把这些类的属性与方法使用接口的形式写出来

interface UserInterface {
    name: string;
    age: number;
    say(): void
}

// 类与接口建立关于, 靠implements建立, 只要建立了关系, 那么我们的类就必须严格实现接口中的每个属性与方法
class User implements UserInterface {
   constructor(public name: string, public age: number) {}
   say(): void {
       console.log(`哥哥姐姐们,我想你们了`);
   }
}
