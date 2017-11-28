var gender;
(function (gender) {
    gender[gender["\u7537"] = 0] = "\u7537";
    gender[gender["\u5973"] = 1] = "\u5973";
})(gender || (gender = {}));
;
// 枚举数据可以通过下标的方式来取值
console.log(gender[0]); // 男
console.log(gender[1]); // 女
// 枚举数据有个特点, 可以通过值反向取到下标
console.log(gender['男']); // 0
console.log(gender['女']); // 1
