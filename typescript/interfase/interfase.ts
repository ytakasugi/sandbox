interface Person {
    name: string;
    age: number;
}

function intro(person: Person): String {
    return `My name is ${person.name}. I am ${person.age}`
}

let p: Person = {
    name: "Alice",
    age: 15
}

console.log(intro(p))
