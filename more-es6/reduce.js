const numbers = [ 7, 3, 6, 1, 9, 10];
const total = numbers.reduce((prev, curr) => prev + curr, 0);
console.log(total); 

const sum = numbers.reduce((p, c) => p + c, 0);
console.log(sum);