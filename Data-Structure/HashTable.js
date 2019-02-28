// Question
// Given an array = [2,3,4,5,6,3,4,5,7,8]
// expected return 3
// Given an array = [2,3,4,2,6,3,4,5,7,8]
// expected return 2
// Given an array = [2,3,3,2,6,3,4,5,7,8]
// expected return 3
// find the first duplicate number and return it, if no duplicate, return undefined.

const firstRecurringCharacter = input => {
  let map = {};
  input.map((item, index) => {
    // if same key found, return the key
    if (map[item] == true) {
      console.log(item);
      return item;
    } else {
      map[item] = index;
    }
  });
  console.log(map);
  return undefined;
};

const arrayNumber = [2, 3, 2, 5, 6, 3, 4, 5, 7, 8];
firstRecurringCharacter(arrayNumber);
