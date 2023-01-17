/*

Q.  Write a function that sorts an array of objects by the key that is passed in the second argument, and in the order passed as the 3rd argiment. 

*/

function sort(list, key, order) {
  if (order === "asce") {
    list.sort((a, b) => {
      if (a[key] < b[key]) {
        return -1;
      } else if (a[key] === b[key]) {
        return 0;
      } else if (a[key] > b[key]) {
        return 1;
      } else {
        // Will never reach here
      }
    });
  } else if (order === "desc") {
    list.sort((a, b) => {
      if (a[key] < b[key]) {
        return 1;
      } else if (a[key] === b[key]) {
        return 0;
      } else if (a[key] > b[key]) {
        return -1;
      } else {
        // Will never reach here
      }
    });
  }
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

sort(users, "id", "desc"); //Should return users sorted by id in descending order
console.log(users);
/*

Output:
[
  {
    id: 4,
    first_name: 'Amata',
    email: 'abraiden3@canalblog.com',
    date_of_birth: '2012/05/23',
    gender: 'Female'
  },
  {
    id: 3,
    first_name: 'Demetris',
    email: 'dkilshall2@elpais.com',
    date_of_birth: '2018/12/31',
    gender: 'Male'
  },
  {
    id: 2,
    first_name: 'Raychel',
    email: 'rmcgrady1@cpanel.net',
    date_of_birth: '1996/11/05',
    gender: 'Female'
  },
  {
    id: 1,
    first_name: 'Nicki',
    email: 'ncrozier0@squarespace.com',
    date_of_birth: '2009/05/09',
    gender: 'Male'
  }
]

*/

sort(users, "first_name", "asce"); //Should return users sorted by first_name in ascending order
console.log(users);
/*

Output:
[
  {
    id: 4,
    first_name: 'Amata',
    email: 'abraiden3@canalblog.com',
    date_of_birth: '2012/05/23',
    gender: 'Female'
  },
  {
    id: 3,
    first_name: 'Demetris',
    email: 'dkilshall2@elpais.com',
    date_of_birth: '2018/12/31',
    gender: 'Male'
  },
  {
    id: 1,
    first_name: 'Nicki',
    email: 'ncrozier0@squarespace.com',
    date_of_birth: '2009/05/09',
    gender: 'Male'
  },
  {
    id: 2,
    first_name: 'Raychel',
    email: 'rmcgrady1@cpanel.net',
    date_of_birth: '1996/11/05',
    gender: 'Female'
  }
]

*/

