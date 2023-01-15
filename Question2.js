/*

Q. What do you think would happen 
    a) if you pass an index beyond the range of the string ?
    b) if you pass a negative index ?

=> In both cases value is undefined.

*/

const s = "Hello World";
// Length: 11

console.log(s[14]);
// Output: undefined

console.log(s[-2]);
// Output: undefined
