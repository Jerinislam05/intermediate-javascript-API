// jokhoni kono ekta function k parameter hisebe pathano hoy and vetore etake call kora hole etake callback function bole.. mot kotha function k pthaile call back function hobe

function greeting(greetingHandler, name) {
    greetingHandler(name);
}

// const name = 'Halim mama';
// const number = [1, 2, 3, 4];
// const laptop = {price: 45000, name: 'lenovo', memory: '8gb'};

function greetingHandler(name) {
    console.log('Good Morning', name);
}

function greetEvening(name) {
    console.log('Good Evening', name);
}

greeting(greetingHandler, 'tom hanks')
greeting(greetingHandler, 'tom brady')
greeting(greetingHandler, 'tom cruse')
greeting(greetEvening, 'Tom sulaiman')
greeting(greetEvening, 'Tom jerry')