/* const person = {
    name: 'John',
    hair: 'black',
    height: 5.7
}
console.log(person.hair);
*/
class Person{
    constructor(name, age) {
        const number = '32';
        this.name = name;
        this.age = age;
    }
    sleep() {
        console.log(`sleepig now ${this.name}, ${this.number}`);
    }
}

const kodom = new Person('kodom', 21);
console.log(kodom);
kodom.sleep();
const badam = new Person('badam', 24);
badam.sleep()