// ============================================
// Declaring and assigning value using let
// ============================================

// Declare a variable
let a;

// log value before assignment
console.log(a);
// Output: undefined

// Assign a value
a = 50;

// log value after assignment
console.log(a);
// Output: 50


// ============================================
// Declaring and assigning value using const
// ============================================

// Declare a variable
const b;
// SyntaxError: Missing initializer in const declaration

// log value before assignment
console.log(b);

// Assign a value
b = 50;

// log value after assignment
console.log(b);

/*

Declaration using const gives an error.

SyntaxError: Missing initializer in const declaration

Since we cannot assign a value to a variable declared using const.
All variables declared using const must be initialised with a value.
 
*/

// Declare a variable
const c = 15;

// log value before assignment
console.log(c);
// Output: 15

// Assign a value
c = 50;
// TypeError: Assignment to constant variable.

// log value after assignment
console.log(c);

/*

Assignment to a variable declared using cost gives an error.

TypeError: Assignment to constant variable.

We cannot assign a value to a variable declared using const.
All variables declared using const must be initialised with a value.
 
*/
