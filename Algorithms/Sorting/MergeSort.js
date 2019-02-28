const numbers = [213, 565, 767, 435, 43, 456, 33, 223, 56, 5, 6, 67, 90, 0];

const mergeSort = array => {
  if (array.length < 2) {
    return array;
  }
  const length = array.length;
  const mid = Math.floor(length / 2);
  const subLeft = array.slice(0, mid);
  const subRight = array.slice(mid);

  return merge(mergeSort(subLeft), mergeSort(subRight));
};

const merge = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  //console.log(left, right);
  // console.log(left.slice(leftIndex));
  // console.log(right.slice(rightIndex));
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

mergeSort(numbers);

console.log(numbers);
