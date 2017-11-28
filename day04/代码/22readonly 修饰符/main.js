var Tab = /** @class */ (function () {
    function Tab(selector, color) {
        this.selector = selector;
        this.color = color;
    }
    return Tab;
}());
var tab = new Tab('#tab', 'pink');
console.log(tab);
tab.selector = 'abc';
tab.color = 'blue';
