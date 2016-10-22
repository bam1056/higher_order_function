'use strict'
// generic function that logs its argument
const doSomething = (arg) => {
  console.log(arg);
}
// generic function that logs the double of the argument
const double = (num) => {
  console.log(`This is the function argument ${num}, doubled: `, num * 2);
}

// function takes a value and a function reference, returns a function
// that calls the referenced function 'n' times
const iteratorHOF = (n, func) => {
  return function(val){
    for (let i = 0; i < n; i++) func(val);
  };
};

// define several different functions that utilize iteratorHOF in composition
const exampleFunc = iteratorHOF(1, doSomething);
const exampleFunc2 = iteratorHOF(2, doSomething);
const exampleFunc5 = iteratorHOF(5, doSomething);

exampleFunc(3)
exampleFunc2('Hello')
exampleFunc5('PowerChord is a great place to work!')

const exampleFuncDouble = iteratorHOF(1, double)
const exampleFuncDouble2 = iteratorHOF(2, double)
const exampleFuncDouble5 = iteratorHOF(5, double)

exampleFuncDouble(3)
exampleFuncDouble2(5)
exampleFuncDouble5(10)
