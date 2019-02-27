const numbers = [213, 565, 767, 435, 43, 456, 33, 223, 56, 5, 6, 67, 90, 0];

const bubbleSort = array => {
  // loop thro
  const lengthArray = array.length;
  // loop thro, every time loop times minues 1
  for (let i = 0; i < lengthArray; i++) {
    for (let j = 0; j < lengthArray; j++) {
      if (array[j] > array[j + 1]) {
        // swap numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
};
// O(n^2)
bubbleSort(numbers);
console.log(numbers);
