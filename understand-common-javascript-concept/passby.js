// premitive types are pass by value(value hisebe jabe kintu vetore kichu change korle kichu change hobena)
let num1 = 6;
let num2 = 4;
function multiply(a, b) {
    a = 12;
    const result = a * b;
    return result;
}
console.log(num1);

const output = multiply(num1, num2);
console.log(output);

// object and array are pass by reference(vetore change korle baire o eta k paowa jay)
let student1 = {name: 'jalil', partner: 'borsha'};
let student2 = {name: 'raja', partner: 'rani'};

function makeMovie(couple1, couple2) {
    couple1.name = 'ononto';
    couple2.partner = 'mim';
}
console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);