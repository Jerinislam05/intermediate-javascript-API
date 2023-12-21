class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sleep() {
        console.log(`sleepig now ${this.name}`);
    }
}

const kodom = new Person('kodom', 21);
console.log(kodom);
kodom.sleep();
const badam = new Person('badam', 24);
badam.sleep()