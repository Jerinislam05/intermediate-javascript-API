/* 
strongly type language:
* int a = 5;
* string b = 'alice halim karim';
* boolean c = true;
* object student = {name: 'John', age: 21}
* int[] numbers = [12, 45, 78]
* string[] friends = ['abul', 'kabul'];
*/

//javascript is a dynamic type language 

// primitive type
const a = 5;
const b = 'rahim vat khay';
const ages = [32, 76, 33]
const d = true;


// non-primitive
const student = {id: 21, class: 10}
// console.log(typeof a, typeof b, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y); //jokhon kono man set hoy then notun man change korle ager man ta ekta memory space er moddhe rakhe

let p = {job: 'web developer'}
let q = p;
console.log(p, q);
q.job = 'frontend' // non-primitive reference dhore rakhe
console.log(p, q);