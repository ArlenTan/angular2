// 专门装饰属性的装饰器
// 装饰!!实例!!属性接收到的第一个参数为!!原型!!, 第二个参数为要装饰的属性名称
// 装饰!!静态!!属性接收到的第一个参数为!!类!!, 第二个参数为要装饰的属性名称
function propZhuangshiqi(...arg: any[]): void {
    let classOrPrototype = arg[0];  // 类或原型
    let propName = arg[1];          // 属性名称
    
    // 根据属性名称添加对应的set方法
    classOrPrototype['set' + propName] = function(val: any): void {
        this[propName] = val;
    }

    // 根据属性名称添加对应的get方法
    classOrPrototype['get' + propName] = function(): any {
        return this[propName];
    }
}

class Person {
    @propZhuangshiqi
    name: string = '匿名';

    @propZhuangshiqi
    static age: number = 0;
}

console.log(Person.prototype.name); // name使用了装饰器后, Person原型便多了一个name属性
console.log(Person.age); // 静态属性age使用了装饰器后, age的值便被修改了, 修改为了'装饰器修改后的值'