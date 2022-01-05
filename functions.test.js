const functions = require("./functions");
// toBe equal or success testing
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});
// not equal testing
test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

//subtract testing
test("subtract from num1-num2", () => {
  expect(functions.subtract(4, 2).toBe(2));
});

//divide testing
test("divide from num1%num2", () => {
  expect(functions.divide(4, 2).toBe(2));
});

//multiple testing
test("multiple with num1*num2", () => {
  expect(functions.multiply(4, 2).toBe(8));
});

//null value testing
"Should be null",
  () => {
    expect(functions.isNull()).toBeNull();
  };
