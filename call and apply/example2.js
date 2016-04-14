/**
 * Created by Lenovo on 04-03-2016.
 */

// see link: http://www.w3schools.com/js/js_function_invocation.asp

// The call and the apply methods takes an owner object as the first argument. The only difference is that call() takes
// the function arguments separately, and apply() takes the function arguments in an array.

// In JavaScript strict mode, the first argument to call or apply, becomes the value of this in the invoked function,
// even if the argument is not an object.

// In "non-strict" mode, if the value of the first argument is null or undefined, it is replaced with the global object.

function myFunction(a, b) {
    return a * b;
}
var myObject;
myObject = myFunction.call(myObject, 10, 2);  // will return 20
console.log(myObject);

var array = [10, 2];
var myObject2;
myObject2 = myFunction.apply(myObject2, array);  // will also return 20
console.log(myObject2);
