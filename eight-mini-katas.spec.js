const assert = require("chai").assert;

const {
  booleanToString,
  main,
  checkAlive,
  isPalindrome, 
  findAverage,
  makeNegative,
  twoOldestAges,
  filter_list,
} = require("./eight-mini-katas.js");

describe("Eight mini code katas", () => {
  describe("Convert a Boolean to a String", () => {
    it("should return string 'true' when boolean true is passed in", () => {
      const expected = "true";
      const test = booleanToString(true);
      assert.equal(test, expected);
    });
    it("should return string 'false' when boolean false is passed in", () => {
      const expected = "false";
      const test = booleanToString(false);
      assert.equal(test, expected);
    });
  });

  describe("Function syntax debugging", () => {
    it("tests that main is a function", () => {
      assert.isFunction(main);
    });
    it("should return first parameter a verb plus second parameter a noun into a string", () => {
      const expected = "take item";
      const test = main("take", "item")
      assert.equal(test, expected);
    });
    it("should return first parameter a verb plus second parameter a noun into a string", () => {
      const expected = "use sword";
      const test = main("use", "sword")
      assert.equal(test, expected);
    });
  });

  describe("Check if players is alive", () => {
    it("should return true if health is above 0", () => {
    const expected = true;
    const test = checkAlive(5)
    assert.equal(test, expected);
    });
    it("should return true if health is above 0", () => {
      const expected = true;
      const test = checkAlive(10)
      assert.equal(test, expected);
    });
    it("should return false if health is below 0", () => {
      const expected = false;
      const test = checkAlive(0)
      assert.equal(test, expected);
    });
    it("should return false if health is below 0", () => {
      const expected = false;
      const test = checkAlive(-8)
      assert.equal(test, expected);
    });
  });

  describe("Check if string is a palindrome", () => {
    it("should return true if the string passed in is a palindrome", () => {
      const expected = true;
      const test = isPalindrome("a")
      assert.strictEqual(test, expected);
    });
    it("should return true if the string passed in is a palindrome", () => {
      const expected = true;
      const test = isPalindrome("aba")
      assert.strictEqual(test, expected);
    });
    it("should return true if the string (case insensitive) passed in is a palindrome", () => {
      const expected = true;
      const test = isPalindrome("AbBa")
      assert.strictEqual(test, expected);
    });
    it("should return true if the string (case insensitive) passed in is a palindrome", () => {
      const expected = true;
      const test = isPalindrome("Madam")
      assert.strictEqual(test, expected);
    });
    it("should return true if the string passed in is empty", () => {
      const expected = true;
      const test = isPalindrome("")
      assert.strictEqual(test, expected);
    });
    it("should return false if the string passed in is not a palindrome", () => {
      const expected = false;
      const test = isPalindrome("hello")
      assert.strictEqual(test, expected);
    });
   });

  describe("Find the mean average", () => {
    it("should take an array of numbers and return the mean value", () => {
      const expected = 1;
      const test = findAverage([1])
      assert.equal(test, expected);
    });
    it("should take an array of numbers and return the mean value", () => {
      const expected = 4;
      const test = findAverage([1, 3, 5, 7])
      assert.equal(test, expected);
    });
  });

  describe("Make the number negative", () => {
    it("should return the number passed in into a negative number", () => {
      const expected = -42;
      const test = makeNegative(42)
      assert.equal(test, expected);
    });
    it("should return the number passed in into a negative number", () => {
      const expected = -0.12;
      const test = makeNegative(-0.12)
      assert.equal(test, expected);
    });
    it("should return zero if zero is passed in", () => {
      const expected = 0;
      const test = makeNegative(0)
      assert.equal(test, expected);
    });
  });


  describe("The two oldest ages", () => {
    it("should take an array of numbers and return the two highest numbers within the array", () => {
      const expected = [45, 87];
      const test = twoOldestAges([1, 5, 87, 45, 8, 8])
      assert.deepEqual(test, expected);
    });
    it("should take an array of numbers and return the two highest numbers within the array", () => {
      const expected = [18, 83];
      const test = twoOldestAges([6, 5, 83, 5, 3, 18])
      assert.deepEqual(test, expected);
    });
  });

  describe("Filter list", () => {
    it("should take an array of non-negative integers and strings and returns a new list with the strings filtered out", () => {
      const expected = [1, 2];
      const test = filter_list([1, 2, 'a', 'b'])
      assert.deepEqual(test, expected);
    });
    it("should take an array of non-negative integers and strings and returns a new list with the strings filtered out", () => {
      const expected = [1, 0, 15];
      const test = filter_list([1, 'a', 'b', 0, 15])
      assert.deepEqual(test, expected);
    });
    it("should take an array of non-negative integers and strings and returns a new list with the strings filtered out", () => {
      const expected = [1, 2, 123];
      const test = filter_list([1, 2, 'aasf', '1', '123', 123])
      assert.deepEqual(test, expected);
    });
  });

});
