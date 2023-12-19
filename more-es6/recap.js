/* 
1. var(never use), let const
2. default parameter
3. template string (``)
4. arrow function
5. destructuring function and spread operator
6. object.keys, object.values, object.entries
7. for of used in array and string
8. for in loop used in object
*/


const a = 56;
const number = [56, 3, 7];
const person = {
    name: 'John',
}
const message = `Hi ${person.name} has a: ${a} access to ${number[2]}`;

const square = x => x * x;
const sum = (a, b) => a + b;

const {z, age, ...others} = {x: 2, y: 5, z: 3, name: 'jerin', age: 55};
const [first, ...remaining] = ['ram', 'sam', 'jodu', 'modhu']