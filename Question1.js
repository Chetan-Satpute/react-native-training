/*

Q. How will you create a new copy of the object below while updating the value of address.details[0] to “5“?

*/

const obj = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};

const newObj = {
  ...obj,
  address: {
    ...obj.address,
    details: [...obj.address.details],
  },
};

newObj.address.details[0] = "5";

console.log(newObj);
/*

Output:
{
  name: 'Harry Potter',
  age: 12,
  address: {
    details: [ '5', 'Privet Drive' ],
    area: 'Little Whinging',
    city: 'Surrey',
    state: 'England'
  }
}

*/
