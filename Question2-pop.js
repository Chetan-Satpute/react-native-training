// prettier-ignore
const data = [ { id: 1, first_name: "Nicki", email: "ncrozier0@squarespace.com", date_of_birth: "2009/05/09", }, { id: 2, first_name: "Raychel", email: "rmcgrady1@cpanel.net", date_of_birth: "1996/11/05", }, ];

// =================================
// pop method is mutating method

console.log(data);
/*

Output:
[
  {
    id: 1,
    first_name: 'Nicki',
    email: 'ncrozier0@squarespace.com',
    date_of_birth: '2009/05/09'
  },
  {
    id: 2,
    first_name: 'Raychel',
    email: 'rmcgrady1@cpanel.net',
    date_of_birth: '1996/11/05'
  }
]

*/

data.pop();

console.log(data);
/*

Output:
[
  {
    id: 1,
    first_name: 'Nicki',
    email: 'ncrozier0@squarespace.com',
    date_of_birth: '2009/05/09'
  }
]

*/
