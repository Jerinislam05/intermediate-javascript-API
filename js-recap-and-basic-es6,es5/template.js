const first = 'jaan';
const last = 'pakhi';
const name = first + ' ' + last;
console.log(name);

const a = 10;
const b = 20;

const result = 'the sum of ' + a + ' and ' + b + ' is ' + ( a + b);
console.log(result);

// backtick holo easy way to use multiline string er jonne kaje lage, string interpolation er jonne kaje lage
// ${} er moddhe amra jekono variable ke access korte pari amra operation chalaite pari and array r object er property k amra access kore felte pari

const math = `the sum of ${a} and ${b} is ${a + b}`;
console.log(math);
const email = `hi johncena 
chena naki ochena
mair dibo prochur`
console.log(email);