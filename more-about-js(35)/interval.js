console.log(1);
console.log(2);
let num = 10;
/* setInterval(() =>{
    console.log(num++);
},1000) */

const intervalId = setInterval(()=>{
    num++;
    console.log(++num);
    if(num === 10) {
        clearInterval(intervalId);
    }
}, 1000)
console.log(4);
console.log(5);
console.log(6);