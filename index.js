const booleanToString = (boolean) => {
  if(boolean === true || boolean === false) {
    return boolean.toString()
  } else {
    return "You did not pass in a boolean!";
  }
};

const main = (verb, noun) =>  {
  return verb + " " + noun;
}

const checkAlive = (health) => {
  if (health <= 0) {
    return false
  } else {
    return true
  }
}

const isPalindrome = (str) => {
  const caseInsensitive = str.toLowerCase();
  const reversedString = caseInsensitive.split("").reverse().join("");

  if (str.length === 0 || caseInsensitive === reversedString) {
    return true
  } else {
    return false
  }
};

const findAverage = (nums) => {
  const numberOfValues = nums.length;
  const addedNumbers = nums.reduce((a, b) => a + b, 0)
  return addedNumbers / numberOfValues;
};

const makeNegative = (num) => {
  if (num > 0) {
    return num * -1
  }
  return num
};

const twoOldestAges = (ages) => {
  const sortedArray = ages.sort((a, b) => a - b);
   ages = sortedArray.slice(- 2);
   return ages
};

const filter_list = (arr) => {
  const onlyDigits = arr.filter(item => typeof item === "number")
  return onlyDigits;
};


module.exports.booleanToString = booleanToString;
module.exports.main = main;
module.exports.checkAlive = checkAlive;
module.exports.isPalindrome = isPalindrome;
module.exports.findAverage = findAverage;
module.exports.makeNegative = makeNegative;
module.exports.twoOldestAges = twoOldestAges;
module.exports.filter_list = filter_list;

