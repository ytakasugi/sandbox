function intro(person) {
    return "My name is ".concat(person.name, ". I am ").concat(person.age);
}
var p = {
    name: "Alice",
    age: 15
};
console.log(intro(p));
