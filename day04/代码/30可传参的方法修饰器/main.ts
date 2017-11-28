
// 可传参的装饰器函数, 是一个嵌套函数, 外面用来接收用户穿过来的参数, 
// 里面的函数用来接收装饰器执行时js引擎传递进来的参数
function log(config) {
    return function (target: any, name: string): void {
        
        let old = target[name];
        target[name] = function() {
            if(config === 'top' || config === 'all'){
                console.log('封装');
            }
            old();
            if(config === 'bottom' || config === 'all'){
                console.log('封装');
            }
        }
    }
}


class Person {

    @log('top')
    say(): void {
        console.log('我是原来的say方法')
    }

    @log('all')
    run(): void {
        console.log('我是原来的run方法')
    }
}