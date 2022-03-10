const assert = require("chai").assert;

const { 
  greet,
  replaceDots,
  digitize, 
  tripleTrouble
} = require("./four-mini-katas")

describe('Four mini code katas', () => { 
  describe("greet a user", () => {
    it("should take a user's name and if Johnny is passed in it should greet 'Hello, my love!'.", () => {
      const expected = "Hello, my love!";
      const test = greet("Johnny");
      assert.equal(test, expected);
    });
    it("should take a user's name and return 'Hello, (name)!'.", () => {
      const expected = "Hello, Simon!";
      const test = greet("Simon");
      assert.equal(test, expected);
    });
    it("should take a user's name and return 'Hello, (name)!'.", () => {
      const expected = "Hello, Kai!";
      const test = greet("Kai");
      assert.equal(test, expected);
    });
  });

  describe("replace all the dots with dashes", () => {
    it("should replace all the dots in a string with dashes.", () => {
      const expected = "one-two-three";
      const test = replaceDots("one.two.three");
      assert.equal(test, expected);
    });
  });


  describe("convert number to reversed array of digits", () => {
    it("should take in a random non-negative number and return the digits within an array in reverse order.", () => {
      const expected = [1, 3, 2, 5, 3];
      const test = digitize(35231);
      assert.deepEqual(test, expected);
    });
    it("should take in a random non-negative number and return the digits within an array in reverse order.", () => {
      const expected = [0];
      const test = digitize(0);
      assert.deepEqual(test, expected);
    });
  });

  describe("triple trouble", () => {
    it("should take a string and return a string that combines all of the letters of the three inputed strings in groups.", () => {
      const expected = "abcabcabcabcabcabc";
      const test = tripleTrouble("aaaaaa", "bbbbbb", "cccccc");
      assert.strictEqual(test, expected);
    });
    it("should take a string and return a string that combines all of the letters of the three inputed strings in groups.", () => {
      const expected = "brrueordlnsl";
      const test = tripleTrouble("burn", "reds", "roll");
      assert.strictEqual(test, expected);
    });
    it("should take a string and return a string that combines all of the letters of the three inputed strings in groups.", () => {
      const expected = "Supermans";
      const test = tripleTrouble("Sea", "urn", "pms");
      assert.strictEqual(test, expected);
    });
    it("should take a string and return a string that combines all of the letters of the three inputed strings in groups.", () => {
      const expected = "LexLuthor";
      const test = tripleTrouble("LLh", "euo", "xtr");
      assert.strictEqual(test, expected);
    });
  });
});