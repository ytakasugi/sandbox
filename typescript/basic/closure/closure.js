function calcFactory(def) {
    var result = def;
    var plus = function (num) {
        console.log("before:", result);
        result = result + num;
        console.log("after:", result);
    };
    var minus = function (num) {
        console.log("before:", result);
        result = result - num;
        console.log("after:", result);
    };
    var multiply = function (num) {
        console.log("before:", result);
        result = result * num;
        console.log("after:", result);
    };
    var divide = function (num) {
        console.log("before:", result);
        result = result / num;
        console.log("after:", result);
    };
    // クロージャ関数を返す
    return { plus: plus, minus: minus, multiply: multiply, divide: divide };
}
var calc = calcFactory(10);
calc.plus(3);
calc.minus(5);
calc.multiply(8);
calc.divide(4);
