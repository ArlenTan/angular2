// 如果参数不定, 使用..., ts会自动分析, 就不再严格要求参数个数
function sum2(...arg: number[]): number {

    // sum第一次是0, v是数组的每一项
    // 这样随着循环, sum加了数组中每个值
    return arg.reduce(function(sum, v) {
       return sum + v;
    }, 0);
}

sum2(1, 20, 30);
sum2(1, 20, 30, true);  // 报错
sum2(1, 20, 30, 'a');   // 报错