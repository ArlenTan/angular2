class Tab {
    public readonly selector: string;   // readonly只读修饰符允许赋值一次, 一旦赋值不可修改
    private readonly color: string;     // readonly只读修饰符可以与访问权限修饰符一起使用
    constructor(selector: string, color: string) {
        this.selector = selector;
        this.color = color;
    }
}

let tab = new Tab('#tab', 'pink');
console.log(tab);
tab.selector = 'abc';   // 报错, 不能赋值
tab.color = 'blue';     // 报两个错, 不能赋值, 不能在外面使用