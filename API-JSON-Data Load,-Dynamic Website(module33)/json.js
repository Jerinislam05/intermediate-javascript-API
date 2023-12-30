// object k string e convert korte json.stringify use korte hoy

const user = {id:1, name: 'John', job: 'actor'};
// JavaScript Object Notation (JSON)
const stringify = JSON.stringify(user)
// console.log(user);
// console.log(stringify);

/* 
{ id: 1, name: 'John', job: 'actor' } js
{"id":1,"name":"John","job":"actor"} json
*/

const shop = {
    owner: 'alia',
    address: {
        street: 'vuter goli',
        city: 'ranbir',
        country: 'india'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);
const shopJson = JSON.stringify(shop); //string korte
console.log(shopJson);
const shopObj = JSON.parse(shopJson); //punoray object e rup dite
console.log(shopObj);