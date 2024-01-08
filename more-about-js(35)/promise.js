/* 
Promise:
1. The promise object represents the eventual completion(or failure) of an asynchronous operation and its resulting value.

2. A promise is in one of two states: pending, resolved and rejected.

3. The promise object starts with new Promise which is pending, if the promise resolved then fulfilled immediately with .then method = async code.

4. If the promise is rejected then use .catch method = error handling
*/ 
const getData = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log(num);
  if (num < 5) {
    resolve(566665);
  } else {
    reject("no data available");
  }
  // resolve(722249);
  reject("no data available");
});
getData
  .then((data) => console.log(data + 20))
  .catch((err) => console.error("ERR:", err));
