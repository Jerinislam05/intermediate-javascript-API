const numbers = [12, 10, 8, 15, 7];

const doubled = numbers.map(num => num * 2);
console.log(doubled);

const fiveBonus = numbers.map(num => num + 5);
console.log(fiveBonus);

const halves = numbers.map(num => num / 2);
console.log(halves);

const friends = ['tom', 'John', 'oliver', 'mikel'];
const length = friends.map(fr => fr.length)
console.log(length);
const firstLetter = friends.map(fr => fr[0]);
console.log(firstLetter);