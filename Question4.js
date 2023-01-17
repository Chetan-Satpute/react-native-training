/*

Q. Given 2 arrays with related objects, return a new array where objects having the same id from each of the arrays are merged. Try to achieve it with a complexity - O(n).

*/

function mergeById(a, b) {
  const reduceFunction = (accumulator, currentObj) => {
    if (accumulator[currentObj["id"]] === undefined) {
      accumulator[currentObj["id"]] = {};
    }

    Object.assign(accumulator[currentObj["id"]], currentObj);

    return accumulator;
  };

  const result = a.reduce(reduceFunction, b.reduce(reduceFunction, {}));

  return Object.values(result);
}

let userNames = [
  {
    id: 1,
    first_name: "Nicki",
  },
  {
    id: 2,
    first_name: "Raychel",
  },
  {
    id: 3,
    first_name: "Demetris",
  },
  {
    id: 4,
    first_name: "Amata",
  },
];

let userEmails = [
  {
    id: 2,
    email: "rmcgrady1@cpanel.net",
  },
  {
    id: 1,
    email: "ncrozier0@squarespace.com",
  },
  {
    id: 4,
    email: "abraiden3@canalblog.com",
  },
  {
    id: 3,
    email: "dkilshall2@elpais.com",
  },
];

console.log(mergeById(userNames, userEmails));
/*

Output:
[
  { id: 1, email: 'ncrozier0@squarespace.com', first_name: 'Nicki' },
  { id: 2, email: 'rmcgrady1@cpanel.net', first_name: 'Raychel' },
  { id: 3, email: 'dkilshall2@elpais.com', first_name: 'Demetris' },
  { id: 4, email: 'abraiden3@canalblog.com', first_name: 'Amata' }
]

*/
