if ('bad' == true) {
  console.log('true, but never true');
} else {
  console.log('false, but never true');
}

const numbers = [1, 2, 3, 4, 5];
numbers.unshift({});
const lastNumber = numbers.pop();
console.log(lastNumber);
console.log(numbers);
