// 传入任意多数字, 给你包装成一个数组返回
function createArrayNumber(...arg: number[]): number[] {
    return arg;
}

function createArrayString(...arg: string[]): string[] {
    return arg;
}

function createArrayObject(...arg: Object[]): Object[] {
    return arg;
}

createArrayNumber(1, 2, 3, 4, 5);       // 正常
createArrayString('a', 'b', 'c', 'd')   // 正常

// 上面的需求, 有个特点, 就是每次创建的数组中可存储的数据类型是单一的, 为此我们搞了N多方法来处理
// 泛型可以解决上面代码的冗余, 一个泛型函数, 可以顶上面全部
function createArray<Type>(...arg: Type[]): Type[] {
    return arg;
}

createArray<string>('a', 'b', 'c');  // 接下来,你要创建string类型的数组,就用<string>指定
createArray<number>(1, 2, 3);        // 需要number类型的数组,就是<bumber>指定
createArray<Date>(new Date(), new Date());    // 泛型这里也可以传对象类型
