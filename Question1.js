function forExample() {
  console.log("Before loop");

  for (let i = 0; i <= 5; i++) {
    console.log(`In loop, i=${i}`);

    if (i == 3) {
      return "RETURN VALUE";
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

function whileExample() {
  console.log("Before loop");

  let i = 0;

  while (i <= 5) {
    console.log(`In loop, i=${i}`);

    if (i == 3) {
      return "RETURN VALUE";
    }

    i += 1;
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

function switchExample() {
  console.log("Before loop");

  let age = 13;

  switch (true) {
    case age <= 12:
      console.log("child");
      break;
    case 13 <= age && age <= 18:
      console.log("teen");
      return "RETURN VALUE";
    case age > 18:
      console.log("adult");
      break;
    default:
      throw new Error("Should never reach here");
  }

  console.log("After loop");
}
/*

Output:
Before loop
teen

*/

function switchExample2() {
  console.log("Before loop");

  let age = 1;

  // non breaking switch example
  switch (true) {
    case age <= 12:
      console.log("child");
    case age <= 18:
      console.log("teen");
      return "RETURN VALUE";
    case age <= 30:
      console.log("adult");
    default:
      console.log("age > 30");
  }

  console.log("After loop");
}
/*

Output:
Before loop
child
teen

*/

forExample();
whileExample();
switchExample();
switchExample2();

/*

Q. What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break ?
Q. Do statements after the loop run ?

=> When we use return instead of break in (for loop/while loop/switch case block)
    * Function stops execution. 
    * Statements after (for loop/while loop/switch case block) are not executed.
    * Upcomming cases of switch are not checked.
    * Return value of function is the value passed to return statement.

Q. What is the return value ?

=> Value passed to the return statement is the return value.

*/

function ifExample() {
  console.log("Before loop");

  if (true) {
    return "RETURN VALUE";
  }

  console.log("After loop");
}
/*

Output:
Before loop

*/

ifExample();

/*

Q. Can you return from inside an if block? What impact does that have?

=> Yes, we can return from inside an if block.
    * Function stops execution. 
    * Statements after if block are not executed.
    * Return value of function is the value passed to return statement.

*/

