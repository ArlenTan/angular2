class Person {
    static maxAge: number = 250;
    static getTotal() {
        return '70亿';
    }
}

// 静态成员通过类名调用
Person.maxAge;            // 250
Person.getTotal();        // '70亿'
