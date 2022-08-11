const assert = require("assert");
const addition = require("../addition");

describe("addition()", function() {
  //ARRANGE
  let a = 2;
  let b = 3;
  let sum = 5;

  //ACT
  let result = addition(a, b);

  //ASSERT
  it("it should return 4", function() {
    expect(result).toEqual(sum);
  });
});
