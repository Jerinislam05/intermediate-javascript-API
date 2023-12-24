// task-1
/* you have an odd array(array with odd numbers). [1, 3, 5, 7, 9]. now convert this array into an even array (with an even numbers). [2, 4, 6, 8, 10]. do this using for loop and array.map() method. Hints: add one to any odd number and it will become an even number.
 */
let oddNumber = [1, 3, 5, 7, 9];
let evenNumber = [];
for (let i = 0; i < oddNumber.length; i++) {
    evenNumber.push(oddNumber[i] + 1);
}
console.log(oddNumber);
console.log(evenNumber);
// answer: [ 1, 3, 5, 7, 9 ] and [ 2, 4, 6, 8, 10 ]
// -------------------------------------
let evenNumberMap = oddNumber.map(number => number + 1);
console.log(evenNumberMap);
// answer: [2, 4, 6, 8, 10]


// task-2
/*  you are given an array say: [33, 50, 79, 78, 90, 101, 30]. now return/get all the elements which are divisible by 10 using array.filter() method.
now do the same task of question 2. but do this using array.find() method. then compare the output of both answers 
*/
let givenArray = [33, 50, 79, 78, 90, 101, 30];
let divisibleByFilter = givenArray.filter(number => number % 10 === 0);
console.log(divisibleByFilter);
// answer: [ 50, 90, 30 ]
// -----------------------------------------
let divisibleByFind = givenArray.find(number => number % 10 === 0);
console.log(divisibleByFind);
// answer: 50;

// task-3: filter()
/* 
you have an array of objects:
const instructor = [
    { name: 'nodi', age:28, position: 'senior' },
    { name: 'akil', age:26, position: 'junior' },
    { name: 'sobuj', age:30, position: 'senior' },
]
your task is to display the instructor names that has the position senior using filter()
*/
const instructor = [
    { name: 'nodi', age:28, position: 'senior' },
    { name: 'akil', age:26, position: 'junior' },
    { name: 'sobuj', age:30, position: 'senior' },
    { name: 'raj', age:32, position: 'junior' },
]
const seniorInstructor = instructor.filter(instructor => instructor.position === 'senior');
console.log(seniorInstructor);
/* 
answer: [
  { name: 'nodi', age: 28, position: 'senior' },
  { name: 'sobuj', age: 30, position: 'senior' }
]
*/


// task-4: reduce()
/* 
const people = [
    {name: 'meena', age: 20},
    {name: 'rina', age: 15},
    {name: 'tinja', age: 22},
]

follow above array of objects. so you have 3 objects as array element. can you find out the total sum from here?
      20 + 15 + 22 = 57. the output will be 57
do it with for loop. do the same task using array.reduce()
*/
const people = [
    {name: 'meena', age: 20},
    {name: 'rina', age: 15},
    {name: 'tinja', age: 22},
]
let totalAge = 0;
for (let i = 0; i < people.length; i++) {
    totalAge += people[i].age;
}
console.log(totalAge);
// answer: 57
const totalAgeReduced = people.reduce((acc, person) => acc + person.age, 0); //bujhini

console.log(totalAgeReduced);
// answer: 57