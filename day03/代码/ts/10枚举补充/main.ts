enum gender {'男', '女'};

// 枚举数据可以通过下标的方式来取值
console.log(gender[0]);  // 男
console.log(gender[1]);  // 女

// 枚举数据有个特点, 可以通过值反向取到下标
console.log(gender['男']);  // 0
console.log(gender['女']);  // 1
