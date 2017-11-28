// 如果你要定义一组固定不变的对象, 那么请声明为枚举类型
// 如果使用传统的const方式定义枚举, 只是限制了变量的引用不可变,但对象的属性仍然是可变的
const gender = ['男', '女'];
gender.push('中性');
gender.push('人妖');
gender.push('公');
gender.push('母');

// 如果你要定义一组固定不变的对象, 那么请声明为枚举类型
enum gender2 { '男', '女' };