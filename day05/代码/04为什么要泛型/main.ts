class Caches {
    
    private data = {};

    set(key: string, val: any) {
        this.data[key] = val;
    }

    get(key: string): any {
        return this.data[key];
    }
}

// 创建缓存实例, 这个缓存只存储日期对象
let dateCache = new Caches();
dateCache.set('2018', new Date());
dateCache.set('2017', new Date());
dateCache.set('2017', new Function());  // 现在这样写ts不会报错,但这不是我们的初衷


// 使用泛型定义缓存类
class Cachess<T> {
    private data = {};
    
    set(key: string, val: T) {
        this.data[key] = val;
    }

    get(key: string): T {
        return this.data[key];
    }
}

let RegCache = new Cachess<RegExp>();
RegCache.set('abc', /abc/);
RegCache.set('cba', new RegExp('cba'));
RegCache.set('qqq', 'QQ糖');      // 使用了泛型之后,就会报错