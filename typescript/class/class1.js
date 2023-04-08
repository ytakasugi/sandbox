var Menu = /** @class */ (function () {
    // コンストラクタ
    function Menu(item_list, total_pages) {
        this.items = item_list;
        this.pages = total_pages;
    }
    // メソッド
    Menu.prototype.list = function () {
        console.log("Our menu fot today:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return Menu;
}());
var sundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);
sundayMenu.list();
