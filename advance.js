/* -------------------------------------------------------------------------- */
/*                                 ADVANCE JS                                 */
/* -------------------------------------------------------------------------- */



/*

WHAT IS HIGHER ORDER FUNCTION ??
Higher order function is like when we a function takes a function as a argument and also return
a function that function called higher order function in js we have some build in higer order
function like map and filter

*/

// here is the example

// function xyz(arr, transformation) {
//     return function () {
//         let result = []
//         for (let i = 0; i < arr.length; i++) {
//             result.push(transformation(arr[i]))
//         }

//         return result
//     }
// }

// function double(a) {
//     return a * 2
// }

// let transfomedArr = xyz([1, 2, 3, 4, 5], double)
// console.log(transfomedArr())


/*

ARROW FUNCTION :-

Arrow function are introduced in es6 arrow function work like normal
function does, this a shorter way to write a function but we can't invoke a arrow
function before its declared because of hoisting .

and arrow function does not have own this it takes this from its parent normal function if
there are not parent function then it takes from global


*/


/*

SPREAD OPERATOR

The spread operator in js works like superhero by using ... we can take values of an array or object
and spread into another place. If we want to copy some array and object with new variable it makes convience by
deep copy like it make the create the variable and also located in new memory location and in future if we change the value the previous
array or object can't get affected.

*/

// // example of spread operator

// let arr1 = [1,2,3,4,5]
// let arr2 = arr1
// arr2[2] = 100

// // if we do that then the previous variable also change because of its reference
// // and here is the another example now its fine

// let arr3 = [1,2,3,4,5,6]
// let arr4 = [...arr3]
// arr[4] = 5000
// console.log(arr3)

// // now there is no problem and also its help to take some values like this

// let a = [1,2,3]
// let b = [4,5,6]
// // if we want to get the 2 variables values inside one single array we can do like that
// let c = [...a,...b]
// console.log(c)



/*
SUPER HERO EVENT LOOP IN JS
Javascript is synchronous single threaded language there are one call stack and callback que and microtask queue
The js event loop works like a superhero it continously monitor the call stack and callback queue
if something execution is finished in the callstack then it put other things by taking it from the callback
queue.

microtask queue has the higher priority than the callback queue if somethings attached with promises that are goes into
microtask queue.




*/









// rest & spread operator
// class construction
// this keyword
// event loop
// call apply blind
// curring
// infinite curring
//  map ,filter, reduce 



