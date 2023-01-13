/*

5. Can you use return instead of break in loops?

*/

// ===============================
// Using return outside a function

console.log("Before loop");

for (let i = 0; i <= 5; i++) {
  console.log(`In loop, i=${i}`);

  if (i == 3) {
    return;
  }
}

console.log("After loop");

/*

return statement cannot be used outside a function.

Uncaught SyntaxError: Illegal return statement

*/



// ===============================
// comparing break and return inside a function

function breakExample() {
  console.log("Before loop");

  for (let i = 0; i <= 5; i++) {
    console.log(`In loop, i=${i}`);

    if (i == 3) {
      break;
    }
  }

  console.log("After loop");
}
/*

Output:

Before loop
In loop, i=0
In loop, i=1
In loop, i=2
In loop, i=3
After loop

*/

function returnExample() {
  console.log("Before loop");

  for (let i = 0; i <= 5; i++) {
    console.log(`In loop, i=${i}`);

    if (i == 3) {
      return;
    }
  }

  console.log("After loop");
}

/*

Output: 

Before loop
In loop, i=0
In loop, i=1
In loop, i=2
In loop, i=3

*/

breakExample();
returnExample();

/*

break statement:
  * upcoming iterations of loop will not be executed.
  * statements after loop will be executed.

return statement:
  * upcoming iterations of loop will not be executed.
  * statements after loop will not be executed.
  * function will be retured with provided value.

*/

/*

Use of return or break statement depends on use case,

  * we use return statement when we intend to stop function execution and return a value.

  * we use break statement when we intend to stop only the loop and not the function.

*/
