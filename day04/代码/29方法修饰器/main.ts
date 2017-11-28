// 方法装饰器函数会接收到3个参数
// 第一个为方法所在的原型, 第二个为方法名称
function log(target: any, name: string, msg: any): void {
    let old = target[name];
    target[name] = function() {
        console.log('封装');
        old();
        console.log('封装');
    }
}

class Person {

    @log
    say(): void {
        console.log('我是原来的say方法')
    }
}