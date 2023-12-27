/* 
Truthy:
1. true
2. any number (+ve/-ve) will be truthy
3. any string will be truthy
4. '0', 'false' 
5. {}, []
-------------------------------------------------
Falsy:
1. false
2. 0 false
3. empty string will be falsy
4. undefined will be falsy
5. null will be falsy
*/



const x = false;
if (x) {
    console.log('truthy');
} else {
    console.log('falsey');
}

// optional
// check falsey
const y = '';
if (!y) {
    console.log('value is falsey');
}
const z = ' ';
if (!!z) {
    console.log('value is truthy');
}