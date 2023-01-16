// prettier-ignore
const data = [ { id: 2, first_name: "Raychel", email: "rmcgrady1@cpanel.net", date_of_birth: "1996/11/05", }, { id: 1, first_name: "Nicki", email: "ncrozier0@squarespace.com", date_of_birth: "2009/05/09", }, ];

// =================================
// sort method is mutating method

console.log(data);
/*

Output:
[
  {
    id: 2,
    first_name: 'Raychel',
    email: 'rmcgrady1@cpanel.net',
    date_of_birth: '1996/11/05'
  },
  {
    id: 1,
    first_name: 'Nicki',
    email: 'ncrozier0@squarespace.com',
    date_of_birth: '2009/05/09'
  }
]

*/

data.sort((a, b) => a.id - b.id);

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
