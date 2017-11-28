// 装饰器工厂, 专门用来装饰方法
function getDecorator() {
    return function(...arg: any[]) {
        
        let oldFn = arg[2].value;  // 缓存旧方法
        console.log(oldFn);

        // 装饰方法自动接收的第三个参数为描述对象,该对象有个value属性,可以获取被装饰的方法自身
        // 把旧的方法替换成新的方法, 新的方法会记录执行时间
        arg[2].value = function(count: number) {
            let startTime = Date.now();     // 记录方法执行的开始时间
            oldFn(count);
            console.log(Date.now() - startTime);   // 打印方法执行所需的时间
        };
    }
}

// 时间统计的装饰器
function time(target: any, name: string, msg: any) {
    // 保存旧方法
    let oldFn = msg.value;  

    // 替换成新方法
    msg.value = function() {
        let startTime = Date.now();
        oldFn();
        console.log(Date.now() - startTime);
    }
}

class Dog {

    @time
    static loop() {
        for(let i = 0; i < 3000; i++) {
            console.log('跑起来');
        }
    }
}

Dog.loop();  