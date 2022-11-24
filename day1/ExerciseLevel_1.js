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
console.log('Array Cars Length: ' + cars.length);
console.log('Array Numbers Length: ' + numbers.length);

// (4) Get the first item, the middle item and the last item of the array
const first = numbers[0];
const middle = numbers[Math.floor(numbers.length / 2)];
const last = numbers[numbers.length - 1];

console.log('First Item: ' + first);
console.log('Middle Item: ' + middle);
console.log('Last Item: ' + last);

// (5) Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [cars, numbers, 'fruits', 'dates', 'days', 'books'];

const mixedLength = mixedDataTypes.length;
console.log('Array mixedDataTypes Length: ' + mixedLength);

// (6) Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
];

// (7) Print the array using console.log()
console.log(itCompanies);

// (8) Print the number of companies in the array
console.log('Array itCompanies Length: ' + itCompanies.length);

// (9) Print the first company, middle and last company

const firstCompany = itCompanies[0];
const middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
const lastCompany = itCompanies[itCompanies.length - 1];

// (10) Print out each company

console.log('First Company:' + firstCompany);
console.log('Middle Company:' + middleCompany);
console.log('Last Company:' + lastCompany);

// (11) Change each company name to uppercase one by one and print them out
itCompanies.forEach((company) => {
  company = company.toUpperCase();
  console.log(company);
});

// (12) Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies
