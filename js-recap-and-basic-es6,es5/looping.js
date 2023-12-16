// for of use on array or string not in object
// for in use on object


const numbers = [1, 4, 8, 5, 3];
// for (let i = 0; i < numbers.length; i++) {}
// while
for (const num of numbers) {
  console.log(num);
}
const nobab = "siraj ud doula";
for (const char of nobab) {
  console.log(char);
}

const glass = {
    name: 'glass',
    color: 'black',
    price: 12,
    isClean: true
};
/* for (const key of glass) {
    console.log(key);
} */
for (const key in glass) {
    const value = glass[key]
    // console.log(key, value);
}