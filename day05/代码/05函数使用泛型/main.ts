function createArray<Type>(...arg: Type[]): Type[] {
    return arg;
}

let arr1: Array<number> = createArray<number>(10, 20, 30);    // 正确
let arr2: string[] = createArray<string>('a', 'b', 'c')            // 正确
let arr3: any[] = createArray<string>('a', 'b', 10)               // 报错