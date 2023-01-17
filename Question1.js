/*

Q. Write a function mapBy to convert an array of objects into an object mapped by the specified key:

*/

function mapBy(list, key) {
  const result = list.reduce((accumulator, currentObj) => {
    accumulator[currentObj[key]] = currentObj;

    return accumulator;
  }, {});

  return result;
}

let users = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
  },
];

console.log(mapBy(users, "first_name"));

