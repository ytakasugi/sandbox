var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// 継承
var HappyMeal = /** @class */ (function (_super) {
    __extends(HappyMeal, _super);
    // Properties は省略可能だがconstructorは定義する必要あり。
    function HappyMeal(item_list, total_pages) {
        return _super.call(this, item_list, total_pages) || this;
    }
    return HappyMeal;
}(Menu));
var menu_for_children = new HappyMeal(["candy", "drink", "toy"], 1);
menu_for_children.list();
