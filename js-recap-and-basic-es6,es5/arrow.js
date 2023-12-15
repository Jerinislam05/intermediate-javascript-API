// function declaration

// function add (a, b) {
//     const result = a + b;
//     return result;
// }
function add (a, b) {
    const result = a + b;

}
//  function expression
const add2 = function(a, b) {
    return a + b;
}
// arrow function (standard way, short way and cleaner way)
const add3 = (a, b) => a + b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const mult = (Number1, Number2) => Number1 * Number2;

const sum = add4(4, 5, 6, 7);
console.log(sum);
const multiply = mult(4, 5);
console.log(multiply);