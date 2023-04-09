function calcFactory(def: number) {
    let result: number = def;

    const plus = (num: number) => {
        console.log("before:", result);
        result = result + num;
        console.log("after:", result);
    }

    const minus = (num: number) => {
        console.log("before:", result);
        result = result - num;
        console.log("after:", result);
    };
    
    const multiply = (num: number) => {
        console.log("before:", result);
        result = result * num;
        console.log("after:", result);
    };
    
    const divide = (num: number) => {
        console.log("before:", result);
        result = result / num;
        console.log("after:", result);
    };
    
    // クロージャ関数を返す
    return { plus, minus, multiply, divide };
}

const calc = calcFactory(10);

calc.plus(3);
calc.minus(5);
calc.multiply(8);
calc.divide(4);

