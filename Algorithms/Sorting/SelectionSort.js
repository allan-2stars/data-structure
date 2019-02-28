const numbers = [213, 565, 767, 435, 43, 456, 33, 223, 56, 5, 6, 67, 90, 0];

const selectionSort = array => {
  // loop thro
  const lengthArray = array.length;
  // loop thro, every time loop times minues 1
  for (let i = 0; i < lengthArray; i++) {
    // min index
    let min = i;

    // loop from the next of index i
    for (let j = i + 1; j < lengthArray; j++) {
      if (array[j] < array[min]) {
        // find the smallest index of value
        min = j;
      }
    }
    // swap the min number with current number
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }

  return array;
};

// O(n^2)
console.log(selectionSort(numbers));
