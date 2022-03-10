const greet = name => name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!";

const replaceDots = str => str.replace(/[.]/g, "-");

const digitize = n => n.toString().split("").reverse().map(Number);

const tripleTrouble = (one, two, three) => {
  let arr = [];
  for (let i = 0; i < one.length; i++) {
    arr.push(one[i], two[i], three[i]);
  }
  return arr.join("")
}

module.exports = {
  greet, replaceDots, digitize, tripleTrouble
};