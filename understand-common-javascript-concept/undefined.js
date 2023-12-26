 /* 
 8 ways to get undefined
 1. variable that is not initialized will give undefined
 2. function with no return
 3. parameter that is not passed will be undefined
 4. if return has nothing on the right side will return undefined
 5. property that does not exist on an object will give undefined
 6. accessing array elements outside of the index range
 7. deleting an element inside an array
 8. set a value directly undefined
 */

// 1
let first;
console.log(first);

// 2
function second(a, b) {
    const total = a + b;
}
const result = second();
console.log(result);

// 3
function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d);
}
third(3, 5);

// 4
function noNegative(a, b) {
    if(a<0||b<0) {
        return a + b;
    }
    return;
}
const total = noNegative(2, 8);
console.log(total);

// 5
const fifth = {id: 2, name: 'panchom', age: 50}
console.log(fifth.age, fifth.salary);

// 6
const sixth = [4, 87, 56, 89, 47];
// you should not do it. instead use splice
delete sixth[1];
console.log(sixth[1], sixth[5], sixth[6]);
console.log(sixth);

// 8
const eight = undefined;

const ninth = null;

const data = {result: [], updated: null}
console.log(typeof null); //type of object
console.log(typeof undefined);