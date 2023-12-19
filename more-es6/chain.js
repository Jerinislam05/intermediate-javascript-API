// data access
const data = [{id: 1, name: 'John', age: 45}]; //kheyal kore hobe, eta object but direct na, array er moddhe object tai console.log(data.age) dile undefined ashtese so first e amade only data ta ke ber kori ki aache tar moddhe

// console.log(data); // ebar array er moddher element paite amader index nite hobe.
console.log(data[0].age);

const products = {
    count: 5000,
    data: [
        {id: 1, name: 'samsung', price: 65000},
        {id: 2, name: 'iphone', price: 165000},
    ]
}
// second product price
console.log(products.data[0].price);
console.log(products.data[1].price);


const user = {
    id: 5001,
    name: 'shariful raj',
    address: {
        street: {
                first: '54/1 uttor side',
                second: 'porir bari',
                trird: 'no dorai'
            },
            city: 'dhaka'
        }
}

const user2 = {
    id: 5002,
    name: 'pori bibir majar',
    address: {
        city: 'Chittagong',
        country: 'Bangladesh'
    }
}
console.log(user.address.street?.second);
console.log(user2.address.street?.second); //question mark dile error hoyna jodi kichu nao thake