/*

Q. Write a function to filter an array of strings to hold only unique values

*/

const array = ["A", "A", "B", "B", "C", "D"];

function filterDuplicate(list) {
  const uniqueKeys = {};
  return list.filter((elem) => {
    if (uniqueKeys[elem] === undefined) {
      uniqueKeys[elem] = true;
      return true;
    }

    return false;
  });
}

console.log(filterDuplicate(array));
/*

Output:
[ 'A', 'B', 'C', 'D' ]

*/
