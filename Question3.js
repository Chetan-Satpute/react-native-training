
let arrayLet = [1, 2, 3, 4, 5];
const arrayConst = [6, 7, 8, 9, 10];

let objLet = {
  hello: "Hello",
  world: "World"
};
const objConst = {
  foo: "Foo",
  bar: "Bar"
};


// ============================================
// Modifying properties
// ============================================

arrayLet[2] = 500;
arrayConst[2] = 500;

console.log(arrayLet);
// Output: [ 1, 2, 500, 4, 5 ]
console.log(arrayConst);
// Output: [ 6, 7, 500, 9, 10 ]

objLet.hello = "modified Hello";
objConst.foo = "modified Foo";

console.log(objLet);
// Output: { hello: 'modified Hello', world: 'World' }
console.log(objConst);
// Output: { foo: 'modified Foo', bar: 'Bar' }

// ============================================
// Deleting properties
// ============================================

arrayLet.splice(1, 1);
arrayConst.splice(1, 1);

console.log(arrayLet);
// Output: [ 1, 500, 4, 5 ]
console.log(arrayConst);
// Output: [ 6, 500, 9, 10 ]

delete objLet.hello;
delete objConst.foo;

console.log(objLet);
// Output: { world: 'World' }
console.log(objConst);
// Output: { bar: 'Bar' }


// ============================================
// Expectation:
// We might expect that a const declaration would prevent modification or deletion of a property in array and object.
//
// Reality:
// Const declaration does not prevent us from modifying or deleting properties of an array or object.


// ============================================
// Difference between let and const declaration
//
// We cannot assign a value to a variable declared using const.
// variables declared using const must be initialised.
//
// We can assign and re-assign values to a variable declared using let.
// variables declared using let may or maynot be initialised.

