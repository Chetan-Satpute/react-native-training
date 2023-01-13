/*

2. Do the same (as question 1) using switch case.

*/

let age = 25;

switch (true) {
  case age <= 12:
    console.log("child");
    break;
  case (13 <= age && age <= 18):
    console.log("teen");
    break;
  case age > 18:
    console.log("adult");
    break;
  default:
    throw new Error("Should never reach here");
}

// Output: adult
