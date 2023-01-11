let integerVariable = 5;
let stringVariable = "Some String";
let arrayVariable = [1, 2, 3, 4, 5];
let objectVariable = {
  hello: "Hello",
  world: "World",
};

let nanVariable = NaN;
let nullVariable = null;
let undefinedVarible = undefined;

console.log(typeof integerVariable);
// Output: number

console.log(typeof stringVariable);
// Output: string

console.log(typeof arrayVariable);
// Output: object

console.log(typeof objectVariable);
// Output: object

console.log(typeof nullVariable);
// Output: object

console.log(typeof nanVariable);
// Output: number

console.log(typeof undefined);
// Output: undefined



// Array.isArray method can be used to check if an object is a array.
console.log(Array.isArray(arrayVariable));
// Output: true


// isNaN function can be used to check if an object is NaN.
console.log(isNaN(nanVariable));
// Output: true

