const numbers = [213, 565, 767, 435, 43, 456, 33, 223, 56, 5, 6, 67, 90, 0];

// picking a pivot
// always choose the first element as pivot for simplicity

function pivot(array, startIndex = 0) {
  function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }

  const pivot = array[startIndex];
  let swapIndex = startIndex;
  for (let i = startIndex + 1; i < array.length; i++) {
    if (array[i] < pivot) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }
  swap(array, swapIndex, startIndex);
  return swapIndex;
}

// recursively call pivot helper function
// check pivot left and right recursively
function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left); //8 for first time,
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }

  return array;
}

console.log(quickSort(numbers));
