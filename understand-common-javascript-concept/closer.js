// jokhon kono function theke onno ekti function k return kora hoy tokhon return kora function ta holo main function er scope choto function er variable ashtese boro function theke r sei choto function jokhon return kora hoy tokhon se bairer sob function ke access korte pare r jodi amra outer function tar copy banai tahole prottekta nijosso kore ekta alada copy of variable thakbe

// ekta function er moddhe theke jokhon r ekta function k return kora k return kora hoy tokhon tara nijeder moddhe alada closer toiri kore


// A closure is the combination of a function bundled together(enclosed) with references to its aorrounding state(the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.
function kitchen() {
    let roast = 0;
    return function() {
        roast++;
        return roast;
    }
}
const firstServer = kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());

function stopWatch() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}
const counting = stopWatch();
console.log(counting());


// anothe way to understand
function outerFunction(outerVariable) {
    console.log('Outer variable',outerVariable);
    // Inner function defined inside the outer function
    function innerFunction(innerVariable) {
        console.log('Inner variable',innerVariable);
      console.log(outerVariable + innerVariable);
    }
  
    // Returning the inner function (closure)
    return innerFunction;
  }
  
  // Creating closures
  const closure1 = outerFunction(3);
  const closure2 = outerFunction(10);
  
  // Executing closures
  closure1(2); // Outputs 5 (3 + 2)
  closure2(5); // Outputs 15 (10 + 5)