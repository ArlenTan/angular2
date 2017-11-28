"use strict";
var Caches = /** @class */ (function () {
    function Caches() {
        this.data = {};
    }
    Caches.prototype.set = function (key, val) {
        this.data[key] = val;
    };
    Caches.prototype.get = function (key) {
        return this.data[key];
    };
    return Caches;
}());
// 创建缓存实例, 这个缓存只存储日期对象
var dateCache = new Caches();
dateCache.set('2018', new Date());
dateCache.set('2017', new Date());
dateCache.set('2017', new Function()); // 现在这样写ts不会报错,但这不是我们的初衷
// 使用泛型定义缓存类
var Cachess = /** @class */ (function () {
    function Cachess() {
        this.data = {};
    }
    Cachess.prototype.set = function (key, val) {
        this.data[key] = val;
    };
    Cachess.prototype.get = function (key) {
        return this.data[key];
    };
    return Cachess;
}());
var RegCache = new Cachess();
RegCache.set('abc', /abc/);
RegCache.set('cba', new RegExp('cba'));
RegCache.set('qqq', 'QQ糖'); // 使用了泛型之后,就会报错
