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

let sundayMenu = new Menu(["pancakes","waffles","orange juice"], 1);

sundayMenu.list();
