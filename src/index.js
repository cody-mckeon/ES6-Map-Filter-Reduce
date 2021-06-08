var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function double(x) {
  return x * 2;
}

const newNumbers = numbers.map(double);
console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
const filterNumbers = numbers.filter(function (num) {
  return num > 10;
});

console.log(filterNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
numbers.reduce(function (accumulator, currentNumber) {
  console.log("accu: " + accumulator);
  console.log("current: " + currentNumber);
  return accumulator + currentNumber;
});

//Find - find the first item that matches from an array.
const findNumber = numbers.find(function (num) {
  return num > 10;
});

console.log(findNumber);

//FindIndex - find the index of the first item that matches.
import emojipedia from "./emojipedia";

console.log(emojipedia);
const meanings = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(meanings);
