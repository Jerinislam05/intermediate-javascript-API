const actor = {
  name: "ananta",
  age: 40,
  phone: "01719283475",
  money: 2773883833883,
};
// if right side is an object, then left side of destructuring will be object as well
// use property name as a variable that contains the property value
const {phone, age} = actor;

// const phone = actor.phone; //shortcut
// const age = actor.age;
console.log(phone);
console.log(age);

// array destructuring 

const numbers = [19, 45];
const [first, second] = numbers;
const [x, y] = [12, 46];

// advanced
function doubleThem(a, b) {
    return [a*2, b*2];
}
const [prothom, ditiyo] = doubleThem(3, 5);
console.log(prothom, ditiyo);