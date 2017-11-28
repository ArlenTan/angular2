// 装饰器函数
function qiangqiangqiang(target: any) {
   console.log(target);
   target.a = 100;
}

// 可接收用户参数的装饰器函数, 这种内部必须返回一个函数, 用来接收类,进行装饰增强
function qiangqiangqiang2(type: any) {
    console.log(type);

    // 里面这个函数的作用就是之前无参的装饰器函数
    return function(target: any) {
        if(type === '高') {
            target.gao = '高乐高';
        }else if(type === '低') {
            target.di = '低了个低';
        }
    }
}

// 装饰器语法是在要装饰的类/属性/方法前面使用@符号调用函数
// 装饰器会自动调用函数, 把类传递过去
@qiangqiangqiang
@qiangqiangqiang2('高')
class Person{}

@qiangqiangqiang
@qiangqiangqiang2('低')
class Dog{}