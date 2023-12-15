const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;

// single parameter
const getAge = (person) => person.age;
const student = {name : 'jerin', age : 30}
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[2]; //single parameter e bracket na dileo chole
const third = getThird([5, 9, 88, 3, 12])
console.log(third);
const double = num => num * 2;

// no parameter
const getPi = () => Math.PI;
console.log(getPi());

// large arrow function
const doMath = ( x, y, z ) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const total = sum + mult;
    return total; //ekhetre return korte hobe jodi multiple line e arrow function likhi

}
console.log(doMath);