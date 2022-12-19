//console.log('Hola Mundo');

//! Esto es un comentario

//! Tipos de datos 
//* String ('' o "") / Boolean (True o False) 
//* Null (valor nulo) / Number (entero) - Float (0,0)
//* Undefined / Object (objeto).
//! Definición de variables
//* Var (miPrimeraVariable) / Let (miPrimeraVariable) / Const (miPrimeraVariable)

let miPrimeraVariable = 'Mi primera variable!'
//console.log(miPrimeraVariable);

//* Mutabilidad

miPrimeraVariable = 'Esto ha cambiado'
//console.log(miPrimeraVariable);

//* Boolean

let miBoolean = true
let miOtroBoolean = false

//* Numbers

let miNumero = 0
let miNumero2 = 12
let miNumero3 = -258

//console.log(miNumero,miNumero2,miNumero3,miBoolean,miPrimeraVariable);

//* Indefinido

let undef 
//console.log(undef);

//* Null

let nulo = null
//console.log(nulo);

//* Object Out 

//const miPrimerObjeto = {};

//* Object Agrupaciones de Datos

const miObjeto = {
    unNumero: 12,
    unString: 'Esta cadena de caracteres',
    unaCondicion: true
}

// console.log(miObjeto.unString);

//* Areglos (Array)

const arrVacio = []
const arr = [1, 2, 'Hola', 'Mundo', miObjeto]

//console.log(arrVacio, arr);

arrVacio.push(5)
arrVacio.push(3)
arrVacio.push(1)
arrVacio.push('Hola')
arrVacio.push(miPrimeraVariable)
//console.log(arrVacio);

//! Operadores Aritmeticos

const suma = 1 + 2
const restar = 1 - 2
const multiplicar = 2 * 3
const division = 9 / 3
//console.log(suma,restar,multiplicar,division);

const modulo = 10 % 3
//console.log(modulo);

let num = 5
//num++
//num++
//num++
//num++
//num++

//num--
//num--
//num--
//num--
//num--

num += 5
num -= 5
num *= 5
num /= 2

//console.log(num);

//! Operadores de comparación

//* Igualdad estricta
const resultado1 = 5 === 6
//* Igualdad no estricta, strings pueden ser iguales a numeros
//* Si el valor es el mismo.
const resultado2 = 5 === '5'

const resultado3 = 5 < 6
const resultado4 = 5 < 5
const resultado5 = 5 > 6
const resultado6 = 5 > 4
const resultado7 = 5 <= 5
const resultado8 = 5 <= 6
const resultado9 = 5 >= 5
const resultado10 = 5 >= 6


const resultado11 = 5 !== 6
const resultado12 = 5 != '5'

//console.log(resultado11, resultado12);

//! Operadores Logicos
//* Or ||, And &&, Not !.

const resultadoOr = true || false
//console.log(resultadoOr);

const resultadoAnd = true && false
//console.log(resultadoAnd);

const resultadoNot = !true 
//console.log(resultadoNot);

//! Control de Flujo

//* If y Else

const edad = 5

if (edad >= 5 && edad < 18) {
//    console.log('puede jugar')
} else {
//    console.log('no puede jugar')
}

//console.log('fin del programa')

//* While

let x = 0

while (x < 5) {
//    console.log(x);
    x++
}

//console.log('termino el loop');

//* Switch

let y = 3

switch (y) {
    case 1: 
        //console.log('caso 1');
        break;
    
    case 2: 
        //console.log('chanchito');
        break;

    case 3: 
        //console.log('feliz');
        break;
    
    default:
        //console.log('no hay nada');
        break;
}

//* For

for (let i = 0; i < 10; i++) {
    //console.log(i);
}

//* Arreglos

//onst numeros = [1, 2, '3 (Hola)', 4, 5]

//console.log(numeros[1]);

//for (let i = 0; i < numeros.length; i++) {
    //console.log(numeros[i]);
//}

//! Funciones

function iterar(arg1) {
    for (let i = 0; i < arg1.length; i++) {
        //console.log(arg1[i]);
    }
}

const numeros = [1, 2, '3 (Hola)', 4, 5]
const nombres = ['Pedro', 'Juan', 'Felipe', 'Chanchito', 'Feliz', 'Triste']

//iterar(numeros)
//iterar(nombres)

function sum(a, b) {
    return a + b;
}

const resultadoSuma1 = sum(1, 2)
const resultadoSuma2 = sum(5, 6)
const resultadoSuma3 = sum(resultadoSuma1, resultadoSuma2)
//console.log('resultado', resultadoSuma3);

//* Callbacks

function sumar(a, b, cb) {
    const r = a + b
    cb(r)
}
function callback (result) {
    console.log('Resultado: ', result);
}

//callback(6)

sumar(2, 3, callback)


