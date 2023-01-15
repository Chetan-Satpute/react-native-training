/*

Q. What happens if you pass a regular/invalid JSON string to JSON.parse?

=> regular json string is parsed into an object.
=> invalid json string throws a SyntaxError.

*/

const regular = `{"hello":"Hello","world":"World"}`
const invalid = `{"hello""Hello","world""World"}`
// deleted : to make it invalid

console.log(JSON.parse(regular));
// Output: { hello: 'Hello', world: 'World' }

console.log(JSON.parse(invalid));
// SyntaxError: Unexpected string in JSON


/*

Q. What will happen if such an invalid function runs in the program?

=> A SyntaxError will be thrown.

*/

/*

Q. Will other parts of the code execute correctly after that?

=> Program will stop execution unless a catch block catches and handles the error.

*/

