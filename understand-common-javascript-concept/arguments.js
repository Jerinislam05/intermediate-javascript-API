function sum(a, b, c) {
    const args = [...arguments];
    // console.log(args);
    const result = a + b + c;
    return result;
}
// console.log(arguments);

const total = sum(38, 23, 89, 99, 71, 33, 23,);
// console.log(total);
console.log(sum.length); //function e koyta parameter declare kora seta ber korte .length dite hoy