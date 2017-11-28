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

// 上面的需求, 有个特点, 就是每次创建的数组中可存储的数据类型是单一的, 为此我们搞了N多方法来处理
// 泛型可以解决上面代码的冗余, 一个泛型函数, 可以顶上面全部
createArrayNumber(1, 2, 3, 4, 5);       // 正常
createArrayString('a', 'b', 'c', 'd')   // 正常