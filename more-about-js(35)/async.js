console.log(1);
console.log(2);
setTimeout(() => {
    console.log('lazy logged');
}, 5000)
console.log(4);
console.log(5);
console.log(6);

function doSomething() {
    console.log(3);
}

// Single-Threaded
/* 
1. single threaded means only one statement is executed at a time.

2. JavaScript only has one call stack

3. JavaScript run code line by line

4. Must finish executing a piece of code before moving onto the next
*/