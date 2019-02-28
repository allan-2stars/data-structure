const numbers = [213, 565, 767, 435, 43, 456, 33, 223, 56, 5, 6, 67, 90, 0];

// first solution, clean way to do this
const insertionSort1 = array => {
  // loop thro
  const length = array.length;
  let j;
  for (let i = 1; i < length; i++) {
    // set current position
    let current = array[i];
    //
    for (j = i - 1; j >= 0 && array[j] > current; j--) {
      // loop see if left value is bigger than current
      // if so, shift to the right
      array[j + 1] = array[j];
    }
    array[j + 1] = current;
  }
};

// second solution
const insertionSort2 = array => {
  const length = array.length;
  for (let i = 1; i < length; i++) {
    // check with the first item first
    let arraySpliced;
    if (array[i] < array[0]) {
      arraySpliced = array.splice(i, 1);
      array.unshift(arraySpliced[0]);
    } else if (array[i] > array[i - 1]) {
      continue;
    } else {
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
};

// O(n^2)
insertionSort1(numbers);
console.log(numbers);
