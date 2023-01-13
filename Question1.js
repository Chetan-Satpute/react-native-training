/*

1. Declare a variable let age = 25;. Write a series of if else statements that will:

  a) Print child to the console if age is less than equal to 12.

  b) Print teen to the console if age is between 13 and 18 (inclusive).

  c) Print adult to the console if age is above 18

*/

let age = 25;

if (age <= 12) {
  console.log("child");
} else if (13 <= age && age <= 18) {
  console.log("teen");
} else if (age > 18) {
  console.log("adult");
}

// Output: adult
