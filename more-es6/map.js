// map => loop through each element of the array and do the operation that you passed in the callback function and hold the result from each operation in an array and return the array

const numbers = [4, 5, 2, 8, 7, 9, 10];

 function doubleIt(num) {
    // console.log(num);
    return num * 2;
 }
const doubleIt2 = num => {
    // console.log(num);
    return num * 2;
}

const result = numbers.map(doubleIt)
console.log(result);
const output2 = numbers.map(n => n * 2);

const output = numbers.map(doubleIt2)
console.log(output);

/* const doubled = [];
for (const number of numbers) {
    const double = number * 2;
    doubled.push(double)
}
console.log(doubled); */