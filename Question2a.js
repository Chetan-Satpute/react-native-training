function test(callback) {
  callback();
}

function callbackFunc() {
  console.log("Calling the callback function");
  return 5;
}

console.log(`Return Value: ${test(callbackFunc)}`);
/*

Output:
Calling the callback function
Return Value: undefined

=> callbackFunc is passed as an argument to the test function.
=> callbackFunc is referenced by the parameter callback.
=> test function calls callback(), since callback references callbackFunc. callbackFunc is called.
=> callbackFunc logs the string and returns 5.
=> test function ignores the return value of callback(), hence the value 5 is ignored.
=> test function does not have a return statement, hence the return value is undefined.

*/

console.log(`Return Value: ${test(callbackFunc())}`);
/*

Output:
Calling the callback function
TypeError: callback is not a function

=> callbackFunc is called which logs the statement and returns value 5.
=> returned value 5 is then passed to test function as an argument.
=> value 5 is then referenced by the parameter callback in test function.
=> test function calls callback().
=> since callback refers to 5, which is not a function.
=> we get an error, callback is not a function.
=> the program terminated with an error, hence there is no return value.

*/

console.log(`Return Value: ${test(() => callbackFunc())}`);
/*

Output:
Calling the callback function
Return Value: undefined

=> anonymous arrow function is generated
   => body of this function calls callbackFunc.
   => this function return the return value of callbackFunc.
   => this function is not called yet.
=> anonymous arrow function is passed as an argument to test function.
=> anonymous arrow function is referenced by the parameter callback.
=> test function calls callback(), since callback references arrow function, arrow function is called.
=> arrow function then calls callbackFunc.
=> callbackFunc logs the statement and returns 5.
=> arrow function returns the return value of callbackFunc (ie. 5).
=> test does not utilise the value of callback(), hence return value 5 is ignored.

*/


