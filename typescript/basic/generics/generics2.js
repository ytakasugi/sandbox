var Klass = /** @class */ (function () {
    function Klass(item) {
        this.item = item;
    }
    Klass.prototype.getItem = function () {
        return this.item;
    };
    return Klass;
}());
var strObj = new Klass("Alice");
console.log(strObj.getItem());
