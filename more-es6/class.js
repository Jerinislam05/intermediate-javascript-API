const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mac', price: 165000},
]

// has some properties, method
class Product{
    country = 'Bangladesh';
    constructor(name) {
        this.name = name;
    }
}

const lenovo = new Product()
console.log(lenovo);
lenovo.speak('Product')

class teacher{
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
   lecture() {
    console.log('lecture');
   }
}

const tapan = new teacher('teaching math')
console.log(tapan);
const rashid = new teacher('teaching english')
console.log(rashid);