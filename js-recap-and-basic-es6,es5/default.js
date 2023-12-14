// default means ami jodi value ta provide na kori.
// default --> if value is not provided, take this as a default.
function add(num1, num2=0) {
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

// const sum = add(5, 2);
const sum = add(5); // kono man jodi provide na kora hoy tahole tar default name holo undefined mane eta amra define kori ni ba deini

// r 5 er sthe jokho undefine jog hoy tokhon seta NaN hoy
// r jodi ektar o man na dei tahole undefine r undefine mileo NaN hoy answer e


// sample of default
function fullName(first, last='') {
    const full = first + ' ' + last;
    return full;
}
// array er khetre
function friends(numbs = []) {

}
// person hisebe default
function person(human = {}) {

}
