const glass = {
  // colon er ager gulo keys r = er pore values
  name: "glass",
  color: "white",
  price: 12,
  isClean: true,
};

console.log(glass);

// all property name
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isClean' ]
console.log(keys);

// all property values
const values = Object.values(glass);
// [ 'glass', 'white', 12, true ]
console.log(values);

// array of array, two dimentional array
const entries = Object.entries(glass);
// eita purata ekta array r array er moddhe protita upadan abr ek ekta array
// [
//   ["name", "glass"],
//   ["color", "white"],
//   ["price", 12],
//   ["isClean", true],
// ]
// console.log(entries);

delete glass.isClean;
// { name: 'glass', color: 'white', price: 12 }
console.log(glass);

const {isClean, ...shortGlass} = glass;
console.log(shortGlass);

// freeze
// object.freeze
Object.freeze(glass);
glass.source = 'BD'
glass.price = 5000;
delete glass.name;
console.log(glass);