/*

Q. Do you think JSON.stringify would work for arrays as well?

=> we can stringify arrays using JSON.stringify.

*/

const array = [1, 2, 3, 4, 5];

console.log(JSON.stringify(array), typeof JSON.stringify(array));
// Output: [1,2,3,4,5] string

/*

Q. What about nested objects?

=> we can stringify nestedObjects using JSON.stringify.

*/

const nestedObject = {
  hello: {
    world: "World",
  },
  foo: {
    bar: {
      hello: "Hello"
    },
    world: "World"
  }
}

console.log(JSON.stringify(nestedObject));
// Output: {"hello":{"world":"World"},"foo":{"bar":{"hello":"Hello"},"world":"World"}}

console.log(typeof JSON.stringify(nestedObject));
// Output: string

/*

Q. What happens if we pass numbers, strings, undefined, null to JSON.stringify?

=> number string and null are stringified into strings.
=> undefined remains undefined and is not converted into string.

*/
const number = 5;
const string = "Hello World";
const undefinedVar = undefined;
const nullVar = null;

console.log(JSON.stringify(number), typeof JSON.stringify(number));
// Output: 5 string

console.log(JSON.stringify(string), typeof JSON.stringify(string));
// Output: "Hello World" string

console.log(JSON.stringify(undefinedVar), typeof JSON.stringify(undefinedVar));
// Output: undefined undefined

console.log(JSON.stringify(nullVar), typeof JSON.stringify(nullVar));
// Output: null string

