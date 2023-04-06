const { sum, fromEuroToDollar, fromDollarToYen } = require("./app.js");

test("adds 14 + 9 to equal 23", () => {
  let total = sum(14, 9);
  expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", () => {
  const dollars = fromEuroToDollar(3.5);
  const expected = 3.5 * 1.2;
  expect(dollars).toBe(expected);
});

test("1000 dollars should be approx. 106.5k yen", () => {
  const yen = fromDollarToYen(1000);
  const expected = (1000 / 1.2) * 127.9;
  expect(yen).toBe(expected);
});

// one euro is:
let oneEuroIs = {
  JPY: 127.9, // japan yen
  USD: 1.2, // us dollar
  GBP: 0.8, // british pound
};

test("One euro should be 1.206 dollars", function () {
  //import the function from app.js
  const { fromEuroToDollar } = require("./app.js");

  // use the function like its suppoed to be used
  const dollars = fromEuroToDollar(3.5);

  // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
  const expected = 3.5 * 1.2;

  // this is the comparison for the unit test
  expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});
