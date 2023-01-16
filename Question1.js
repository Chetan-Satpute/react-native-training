// prettier-ignore
const data = [ { id: 1, first_name: "Nicki", email: "ncrozier0@squarespace.com", date_of_birth: "2009/05/09", }, { id: 2, first_name: "Raychel", email: "rmcgrady1@cpanel.net", date_of_birth: "1996/11/05", }, { id: 3, first_name: "Demetris", email: "dkilshall2@elpais.com", date_of_birth: "2018/12/31", }, { id: 4, first_name: "Amata", email: "abraiden3@canalblog.com", date_of_birth: "2012/05/23", }, { id: 5, first_name: "Venita", email: "vheap4@clickbank.net", date_of_birth: "2020/10/04", }, { id: 6, first_name: "Fairfax", email: "fcrichton5@merriam-webster.com", date_of_birth: "2009/12/23", }, { id: 7, first_name: "Kathleen", email: "kvasyukhnov6@devhub.com", date_of_birth: "2010/12/20", }, { id: 8, first_name: "Sam", email: "scorck7@sitemeter.com", date_of_birth: "2020/08/30", }, { id: 9, first_name: "Virgilio", email: "vferandez8@e-recht24.de", date_of_birth: "2000/09/07", }, { id: 10, first_name: "Townie", email: "tpetyt9@upenn.edu", date_of_birth: "2018/09/01", }, ];

/*

Q. Write a function filterByName that accepts a string as a parameter and returns an array with only those objects where the first_name field includes that string.

*/

function filterByName(array, pattern) {
  return array.filter((obj) => obj.first_name.includes(pattern));
}

console.log(filterByName(data, "Sam"));
/*

Output:
[
  {
    id: 8,
    first_name: 'Sam',
    email: 'scorck7@sitemeter.com',
    date_of_birth: '2020/08/30'
  }
]

*/

console.log(filterByName(data, "i"));
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
    id: 3,
    first_name: 'Demetris',
    email: 'dkilshall2@elpais.com',
    date_of_birth: '2018/12/31'
  },
  {
    id: 5,
    first_name: 'Venita',
    email: 'vheap4@clickbank.net',
    date_of_birth: '2020/10/04'
  },
  {
    id: 6,
    first_name: 'Fairfax',
    email: 'fcrichton5@merriam-webster.com',
    date_of_birth: '2009/12/23'
  },
  {
    id: 9,
    first_name: 'Virgilio',
    email: 'vferandez8@e-recht24.de',
    date_of_birth: '2000/09/07'
  },
  {
    id: 10,
    first_name: 'Townie',
    email: 'tpetyt9@upenn.edu',
    date_of_birth: '2018/09/01'
  }
]

*/

/*

Q. Use Array.map to return an array of all the email fields.

*/

const emails = data.map((obj) => obj.email);
console.log(emails);

/*

Output: 
[
  'ncrozier0@squarespace.com',
  'rmcgrady1@cpanel.net',
  'dkilshall2@elpais.com',
  'abraiden3@canalblog.com',
  'vheap4@clickbank.net',
  'fcrichton5@merriam-webster.com',
  'kvasyukhnov6@devhub.com',
  'scorck7@sitemeter.com',
  'vferandez8@e-recht24.de',
  'tpetyt9@upenn.edu'
]

*/

/*

Q. Use Array.sort to return the array sorted in descending order by date_of_birth.

*/

function getDateFromString(dateStr) {
  const [year, month, day] = dateStr.split("/").map((str) => parseInt(str));

  const date = new Date(year, month, day);

  return date;
}

data.sort((a, b) => {
  const aDate = getDateFromString(a.date_of_birth);
  const bDate = getDateFromString(b.date_of_birth);

  return bDate.getTime() - aDate.getTime();
});

console.log(data);
/*

Output:

[
  {
    id: 5,
    first_name: 'Venita',
    email: 'vheap4@clickbank.net',
    date_of_birth: '2020/10/04'
  },
  {
    id: 8,
    first_name: 'Sam',
    email: 'scorck7@sitemeter.com',
    date_of_birth: '2020/08/30'
  },
  {
    id: 3,
    first_name: 'Demetris',
    email: 'dkilshall2@elpais.com',
    date_of_birth: '2018/12/31'
  },
  {
    id: 10,
    first_name: 'Townie',
    email: 'tpetyt9@upenn.edu',
    date_of_birth: '2018/09/01'
  },
  {
    id: 4,
    first_name: 'Amata',
    email: 'abraiden3@canalblog.com',
    date_of_birth: '2012/05/23'
  },
  {
    id: 7,
    first_name: 'Kathleen',
    email: 'kvasyukhnov6@devhub.com',
    date_of_birth: '2010/12/20'
  },
  {
    id: 6,
    first_name: 'Fairfax',
    email: 'fcrichton5@merriam-webster.com',
    date_of_birth: '2009/12/23'
  },
  {
    id: 1,
    first_name: 'Nicki',
    email: 'ncrozier0@squarespace.com',
    date_of_birth: '2009/05/09'
  },
  {
    id: 9,
    first_name: 'Virgilio',
    email: 'vferandez8@e-recht24.de',
    date_of_birth: '2000/09/07'
  },
  {
    id: 2,
    first_name: 'Raychel',
    email: 'rmcgrady1@cpanel.net',
    date_of_birth: '1996/11/05'
  }
]

*/

/*

Q. Write a function getById that accepts a number as a parameter and returns the object where the id is equal to that number.

*/

function getById(array, id) {
  return array.find((obj) => obj.id === id);
}

console.log(getById(data, 2));
/*

Output:
{
  id: 2,
  first_name: 'Raychel',
  email: 'rmcgrady1@cpanel.net',
  date_of_birth: '1996/11/05'
}

*/
