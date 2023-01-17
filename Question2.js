/*

Q. Write a function groupBy to convert an array of objects into groups based on the specified key:

*/

function groupBy(list, key) {
  const result = list.reduce((accumulator, currentObj) => {
    if (accumulator[currentObj[key]] === undefined) {
      accumulator[currentObj[key]] = [];
    }

    accumulator[currentObj[key]].push(currentObj);

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
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
    gender: "Female",
  },
  {
    id: 3,
    first_name: "Demetris",
    email: "dkilshall2@elpais.com",
    date_of_birth: "2018/12/31",
    gender: "Male",
  },
  {
    id: 4,
    first_name: "Amata",
    email: "abraiden3@canalblog.com",
    date_of_birth: "2012/05/23",
    gender: "Female",
  },
];

console.log(groupBy(users, "gender"));
/*

Output:
{
  Male: [
    {
      id: 1,
      first_name: 'Nicki',
      email: 'ncrozier0@squarespace.com',
      date_of_birth: '2009/05/09',
      gender: 'Male'
    },
    {
      id: 3,
      first_name: 'Demetris',
      email: 'dkilshall2@elpais.com',
      date_of_birth: '2018/12/31',
      gender: 'Male'
    }
  ],
  Female: [
    {
      id: 2,
      first_name: 'Raychel',
      email: 'rmcgrady1@cpanel.net',
      date_of_birth: '1996/11/05',
      gender: 'Female'
    },
    {
      id: 4,
      first_name: 'Amata',
      email: 'abraiden3@canalblog.com',
      date_of_birth: '2012/05/23',
      gender: 'Female'
    }
  ]
}

*/
