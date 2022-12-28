//todo console.log('Hello World');

//------------------------------
//! Data types:
//? ----------
//! String: character string
//! Boolean: true / false
//! null: -
//! undefined: -
//! Number: 13265461
//! Object: data structure group
//------------------------------
//! Defining Variables:
//? ------------------
//! var 
//! let 
//! const 

//todo var myFirstVar = 'lala';

//! mutability

let firstVar = 'My first variable'

//todo console.log (firstVar);

firstVar = 'My first variable'
//todo console.log (firstVar);

//! Booleans:

let firstBoolean = true;
let secondBoolean = false;

//! Numbers:

let numberOne = 0
let numberTwo = 12
let numberThree = -258

//todo console.log(firstVar, firstBoolean, secondBoolean, numberOne, numberTwo, numberThree);

let undef 

//todo console.log(undef);

let nul = null

//todo console.log(nul);

//! Objects:

//! objectEmpty

const myFirstObject = {}

//! With structure of group 

const myObject = {
    oneNumber: 12,
    oneString: 'character string',
    oneCondition: true,
}

//todo console.log(myObject);

//! If print one part structure var console.log(name:groupObject.name:object);

//todo console.log(myObject.oneNumber);

//! Arrays

const arrEmpty = []
const arr = [1, 2, 'Hello', 'World', myObject]

//todo console.log(arrEmpty,arr);

//! Add list array push

arrEmpty.push(5)
arrEmpty.push(3)
arrEmpty.push(1)
arrEmpty.push('Hello')
arrEmpty.push(firstVar)

//todo console.log(arrEmpty);

const plus = 1 + 2
const less = 1 - 2
const multiply = 2 * 3
const divide = 9 / 3

//todo console.log(plus,less,multiply,divide);

const mod = 10 % 3 

//todo console.log(mod);

let num = 5

// num++
// num++
// num++
// num++

// num--
// num--
// num--
// num--

num += 5
num -= 5
num *= 5
num /= 2

//todo console.log(num);

//! Comparison operators -:

//! Strict equality:

const result1 = 5 === 6

//todo console.log(result1);
//todo false

//! Non-strict equality:

const result2 = 5 == '5'

//todo console.log(result2);
//todo true

const result3 = 5 < 6
const result4 = 5 < 5

//todo console.log(result3,result4);

const result5 = 5 > 6
const result6 = 5 > 4

//todo console.log(result5,result6);

const result7 = 5 <= 5
const result8 = 5 <= 6

//todo console.log(result7,result8);

const result9 = 5 >= 5
const result10 = 5 >= 6

//todo console.log(result9,result10);

const result11 = 5 !== 6
const result12 = 5 != '5'

//todo console.log(result11,result12);

//! Logical operators:

//! or||, and &&, not!

// false === 0
// true === 1

const resultOr = true || true

// OR = true || true = true
// OR = true || false = true
// OR = false || true = true
// OR = false || false = false

//todo console.log(resultOr);

const resultAnd = false && false

// AND = false && false = false
// AND = true && false = false
// AND = false && true = false 
// AND = true && true = true

//todo console.log(resultAnd);

const resultNot = !true

// NOT = !true = false
// NOT = !false = true

//todo console.log(resultNot);

//! Flow control:

//! IF () {};

if (true) {
    //todo console.log('One if');
}

if (false) {
    //todo console.log('asd');
}

const age = 6

if (age > 5 && age < 10) {
    //todo console.log('The boy can play')
} else {
    //todo console.log('The boy cant play')
}

//! WHILE() {};

let x = 0

while (x < 5) {
    //todo console.log(x);
    x++;
}

let y = true

while (y) {
    //todo console.log(y);
    y = false;
}

//! SWITCH () {};

switch (4) {
    case 1:
        //todo console.log('Case 1');
        break;
    case 2:
        //todo console.log('Case 2');
        break;
    case 3:
        //todo console.log('Case 3');
        break;
    default:
        //todo console.log('Anything');
        break;
}

//! FOR () {};

for (let i = 0; i < 10; i++) {
    //todo console.log(i);
}

//? const numbers = [1, 2, 3, 4, 5]

//todo console.log(numbers[2])

//todo for (let i = 0; i < numbers.length; i++) {
    //todo console.log(numbers[i]);
//todo }

//! Function () {};

//? function repeat(arg1) {
//?     for (let i = 0; i < arg1.length; i++) {
//?        console.log(arg1[i]);
//?     }
//? }

//? const numbers = [1, 2, 'Hello', 4, 5]
//? const names = ['Pedro', 'Juan', 'Jose', 'Nicolas', 'Franco']

//? repeat(numbers);
//? repeat(names);

//! function sum(a, b) {
//!     return a + b;
//! }

//! const resultSum = sum(1, 2) 
//! const resultSum1 = sum(5, 6) 
//! const resultSum2 = sum(resultSum, resultSum1) 

//todo console.log('Result: ', resultSum2);

//? -----------------------------------------------------------

function sum(a, b, cb) {
    const r = a + b
    cb(r)
}

function callback(result) {
    console.log('Result: ' , result);
}

// callback(6)

// sum(2, 3, callback)

//! Fat arrow function 

const myFatArrowFunction = (a, b) => a + b

// const r = myFatArrowFunction(1, 2)

const otherFAF = (a, b) => {
    return a + b
}
const r = otherFAF (1, 2)
// console.log(r);

sum(2, 3, function (r) {
    console.log('I´m function and result is: ', r)
})






















