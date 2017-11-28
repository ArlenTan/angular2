class Person { 
   // 受保护权限只能在当前类或者子类使用
   constructor(protected name: string, protected color: string) {}
   say() {
       console.log(this.color);   // 在当前类使用没毛病
   }
}

class YPerson extends Person {
    say() {
        console.log(this.name);  // 在子类使用也没毛病
    }
}

let xiege = new Person('谢霆锋', '黄');
let xiegege = new YPerson('谢霆锋', '黄');

console.log(xiege.name)    // protected权限的属性外面使用不了
console.log(xiegege.name)  // protected权限的属性外面使用不了