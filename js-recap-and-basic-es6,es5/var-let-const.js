// var : no reason to use var
// let : allow it to reassign
// const : do not allow it to reassign


const money = 25;
// money = 50; //can't change it because of const
const rich = money + 25;
console.log(rich); // direct change kora somvob na but onno vabe change kora jay

//  70%-80% khetre amra variable ta const diye declare korbo but jodi man ta poroborti te change kora lage tahole let use korbo

// const diye declare korle notun kore man set kora jabena
// const diye declare korle full array k reassign kora jabena kintu chaile vetorer element change kora jabe

let count = 0;
count = count + 10;
console.log(count);
// array
const numbers = [32, 65, 12, 74, 29];
numbers[3] = 32;
numbers.push(3, 7, 54);
console.log(numbers);
// object
const student = {
    name: 'moyna pakhi',
    class: 12
}

// student = {name: 'jerin islam'} error khabe tobe
student.name = 'jerin islam'; //evabe error khabena
console.log(student);

// loop 
let sum = 0;
for (let i = 0; i < 10; i++) {
    // change hobe tai loop er khetre let hobe
    const num = i; //ei khtre error hobena karon notun block create hoy r old man bad diye notun man again dhore tai, mot kotha loop er moddhe everytime block take create kore
    sum = sum + num;
}
console.log(sum);