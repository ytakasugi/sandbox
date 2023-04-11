interface argType {
    name: string;
}

function getName<T extends argType>(arg: T): string {
    return arg.name;
}

console.log(getName({name: "Hina"}));