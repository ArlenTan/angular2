let cacheData = {};

// 该方法传一个参数获取值, 两个参数设置值
function cache(key: string, val?: any ): any {
    if(val) {
        cacheData[key] = val;
    }else {
        return cacheData[key];
    }
}

cache('a', 10);
cache('b', 'abc');
cache('c', {a:1, b:2});
cache('b')