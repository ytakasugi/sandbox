interface KeyValue<T, U> {
    key: T;
    value: U;
}

let obj: KeyValue<string, number> = { key: "Hina", value: 17}
console.log(obj);