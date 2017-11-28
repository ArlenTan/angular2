var gender;
(function (gender) {
    gender[gender["\u7537"] = 5] = "\u7537";
    gender[gender["\u5973"] = 8] = "\u5973";
})(gender || (gender = {}));
;
// 枚举数据可以通过下标的方式来取值
console.log(gender[5]); // 男
console.log(gender[8]); // 女
// 枚举数据有个特点, 可以通过值反向取到下标
console.log(gender['男']); // 5
console.log(gender['女']); // 8
