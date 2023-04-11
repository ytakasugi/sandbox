class Klass<T> {
    item: T

    constructor(item: T) {
        this.item = item;
    }

    getItem(): T {
        return this.item;
    }
}

let strObj = new Klass<string>("Alice");
console.log(strObj.getItem());

