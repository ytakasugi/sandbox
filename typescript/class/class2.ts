class Menu {
    items: Array<string>;
    pages: number

    // コンストラクタ
    constructor(item_list: Array<string>, total_pages: number) {
        this.items = item_list;
        this.pages = total_pages;
    }

    // メソッド
    list(): void {
        console.log("Our menu fot today:");
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}

// 継承
class HappyMeal extends Menu {
    constructor(item_list: Array<string>, total_pages: number) {
      super(item_list, total_pages);
    }
}
  

let menu_for_children = new HappyMeal(["candy","drink","toy"], 1);

menu_for_children.list();