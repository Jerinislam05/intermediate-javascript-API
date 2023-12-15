const max = Math.max(16, 3, 23, 43, 1, 91, 50, 100);
const numbers = [3, 7, 2, 47, 84, 83, 19, 91, 50, 100];
const arrayMax = Math.max(...numbers)
console.log(...numbers); // just number paite ... age dite hobe that means kono ekta array theke sudhu number gulo niye eshe kono kaj korte chaile ... dite hobe
console.log(arrayMax);

// use spread operator to copy
const friends = [45, 3, 57, 32];
const bondhu = friends;
const dosto = [...friends]; //spread operator diye copy korle r reference take dhore rakhena
console.log(dosto);
friends.push(23);
console.log(dosto);
console.log(friends);

// advanced
const sonkha = [...friends, 9999] //add extra elements while copying
console.log(sonkha);