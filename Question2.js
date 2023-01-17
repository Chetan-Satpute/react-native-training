/*

Q. Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using Object.keys and Object.entries. Example:

*/

function filterObject(obj) {
  const newObj = {};

  for (let [key, value] of Object.entries(obj)) {
    if ((typeof value === "object" && value !== null) === false) {
      newObj[key] = value;
    }
  }

  return newObj;
}

let obj = {
  a: "Apple",
  b: ["Basketball", "Baseball"],
  c: {
    call: "cellphone",
  },
  d: "Dog",
};

console.log(filterObject(obj)); 
/*

Output: 
{ a: 'Apple', d: 'Dog' }

 */
