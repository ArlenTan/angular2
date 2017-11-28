class Caches<T> {
    private data = {};

    set(key: string, val: T): void {
        this.data[key] = val;
    }

    get(key: string): T {
        return this.data[key];
    }
}

// 泛型可以是普通数据类型
let numCache: Caches<number> = new Caches<number>();
numCache.set('abc', 100);

// 泛型可以是对象
let dateCache: Caches<Date> = new Caches<Date>();
dateCache.set('2017', new Date('2017-05-05'));
dateCache.set('2016', new Date('2016-01-01'));