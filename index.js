const booleanToString = boolean => boolean === true || boolean === false ? boolean.toString() : "Not a boolean!";

const main = (verb, noun) => `${verb} ${noun}`;

const checkAlive = health => health <= 0 ? false : true;

const isPalindrome = (str) => {
  const caseInsensitive = str.toLowerCase();
  const reversedString = caseInsensitive.split("").reverse().join("");

  return str.length === 0 || caseInsensitive === reversedString ? true : false;
};

const findAverage = (nums) => {
  const numberOfValues = nums.length;
  const addedNumbers = nums.reduce((a, b) => a + b, 0)
  return addedNumbers / numberOfValues;
};

const makeNegative = num => num > 0 ? num * -1 : num;

const twoOldestAges = ages => ages.sort((a, b) => a - b).slice(- 2);

const filter_list = arr => arr.filter(item => typeof item === "number");

module.exports = { 
  booleanToString, main, checkAlive, isPalindrome, findAverage, makeNegative, twoOldestAges, filter_list
};


