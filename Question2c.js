/*
Q. What happens when you return callback from the test function?

=> if we return callback() from the test function, return value of callback will be returned from test function.
*/

function test(callback) {
  return callback;
}

function callbackFunc() {
  console.log("Calling the callback function");
  return 5;
}

console.log(`Return Value: ${test(callbackFunc)}`);
/*

Output:
Return Value: function callbackFunc() {
  console.log("Calling the callback function");
  return 5;
}


=> callbackFunc is passed as an argument to the test function.
=> callbackFunc is referenced by the parameter callback.
=> test function returns the callback function.

*/

console.log(`Return Value: ${test(callbackFunc())}`);
/*

Output:
Calling the callback function
Return Value: 5

=> callbackFunc is called which logs the statement and returns value 5.
=> returned value 5 is then passed to test function as an argument.
=> value 5 is then referenced by the parameter callback in test function.
=> test function returns callback (ie. 5).

*/

console.log(`Return Value: ${test(() => callbackFunc())}`);
/*

Output:
Return Value: () => callbackFunc()

=> anonymous arrow function is generated
   => body of this function calls callbackFunc.
   => this function return the return value of callbackFunc.
   => this function is not called yet.
=> anonymous arrow function is passed as an argument to test function.
=> anonymous arrow function is referenced by the parameter callback.
=> test function returns callback (ie. arrow function).

*/

