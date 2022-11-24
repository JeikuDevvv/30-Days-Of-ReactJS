// (1) Declare an empty array
const cars = [];
// (2) Declare an array with more than 5 number of elements
const numbers = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

// (3) Find the length of your array
const carLength = cars.length;
console.log('Array Cars Length: ' + carLength);

const numberLength = numbers.length;
console.log('Array Numbers Length: ' + numberLength);

// (4) Get the first item, the middle item and the last item of the array
const first = numbers[0];
const middle = numbers[Math.floor(numberLength / 2)];
const last = numbers[carLength - 1];

console.log('First Item: ' + first);
console.log('Middle Item: ' + middle);
console.log('Last Item: ' + last);

// (5) Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [cars, numbers, 'fruits', 'dates', 'days', 'books'];

const mixedLength = mixedDataTypes.length;
console.log('Array mixedDataTypes Length: ' + mixedLength);

// (6) Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
