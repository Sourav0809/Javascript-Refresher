/* -------------------------------------------------------------------------- */
/*                              JAVASCRIPT BASICS                             */
/* -------------------------------------------------------------------------- */

/*
1.DATA TYPES PRESENT IN JS :-

PRIMITIVE DATATYPE : -
Primitive data type mean built in data type they are not pointing any memory location.
They are immutable mean's we can't modify but we can asign a new value to it.
EXAMPLE : STRING , NUMBER , BOOLEAN , BIG INT ,UNDEFINED , NULL , SYMBOL
EXAPMLE HERE : - WE CAN'T MODIFY BUT CAN CHANGE THE VARIABLE COMPLETELY

*/
// let sample = "immutable";
// console.log(sample);
// sample[0] = "V"; //changing the first letter to V
// console.log(sample);
// sample = "mutable";
// console.log(sample);

/*

REFERENCE DATA TYPES :-
Refrence data type are those data types instead of holding the actual data  they are holding some
memory location in the computer memory where they are located.
EXAMPLE :- OBJECTS , ARRAYS

*/

/*

2. EXECUTION CONTEXT IN JS :-
If we write some piece of code each line of code go through the execution phase ,
in execution context there are 2 phase first one is memory allocation where each and every
variable allocated in the memory location and assign a special placeholder unndefined and the second
one is code execution part where each and every variable assigned the actual value through it.

*/

/*

3. HOISTING IN JS :-

The hoisting is the deafult behaviour to move all the declaration to the top of the current scope,
Because of hoisting we can acess variables before declaration without getting any kind of error.

Let and const also hoisted but they are hoisted in another memory location so if we want to acess those
variables before declaration they are in temopral dead zone so we get reference error.

scope : Scope is like where the variables can extent their visibility. we can't access a varible outside of its scope.
there are three scope in js first one is global scope and second one is like function scope and also blocked scope

Block Scope : The blocked scope is like when we declare a varibale in a pair of curly braces so this is the block where we can acess the variable.

Function Scope : The function scope is like when we declare a varibale inside of a function so this is the function scope we can't access the
variable outside of the function.

Global Scope : The global scope is means if we do not decalre any variable inside a function or inside2 curly braces so the variable is the
global variable we can acess anywhere we want.

*/

/*
 CLOSURE :-

When a combination of function bundle together with its lexical enviroment that
forms a closure . closure helps functions to remeber the enviorement which they are created even like the enviroment
finished execution.
*/

// here is an exapmple :  Because of closure we can access the variable before x inside the function b enviorment
// function a() {
//   let x = 10;
//   function b() {
//     console.log(x);
//   }
//   b();
// }
// a();

/*
LET, VAR, CONST :-
Let and const are introduced in es6. Let and const are blocked scope we can't access a variable that declare with let and const outside
of the block, they are hoisted in different memomry location so if we want to access we get reference error, in let we can reasign the value
but we can't redeclare and in const we can't reasign or redecalre , and talk about var case we can reasign or redeclare the varibale.
and one thing let and const are blocked scope where var is function scope.


*/

/*
PROMISES IN JS :
Promise is an object that represent the asunchorous operation that can be execute later it might be succeed or might be failed.
It also has 3 stages first one is pending second one is fulfiled and third one is rejected .
we use .then for getting the value when the promise fulfiled and if it is reject then we can get the error in the .catch block.

EXAMPLE OF PROMISE :
*/

// we are resolving the promise
// const promise = new Promise((resolve, reject) => {
//     resolve("The promise is now resolved")
// })

// promise.then((value) => {
//     console.log(value);
// })


// now we are rejecting the promise

// const promise = new Promise((resolve, reject) => {
//     reject("some error here ...")
// })

// promise.then((value) => {
//     console.log(value);
// }).catch((err) => {
//     console.log(err);
// })


/*
WHAT IS CALLBACK ??
callback means when we pass a function inside an another function that function we have passed as an argument the function is
called callback function */

// Function that takes a callback as an argument
// function greet(name, callback) {
//    console.log("Hello, " + name + "!");
//     Execute the callback function
//     callback();
//   }

//   // Callback function
//   function sayGoodbye() {
//     console.log("Goodbye!");
//   }

/*
ERROR IN JS ??

1. Syntax Error : When we do some mistake in our code then we get syntax error .

example of syntax error 

console.log(a // here we do not write the end parenthesis.

2. Type error : when we perform wrong operation then we get the type error 

example of type error 

let a = 10
a() // here we get type error beacuase a is not a function 


3. Reference error : when we want to access a variable that is not defined then we get refrence error.
example of refrence error 

console.log(a) //here we get refrence error beacuse a is not defined 


*/




