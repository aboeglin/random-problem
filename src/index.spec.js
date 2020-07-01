const R = require("./random");
const { computeTheString } = require("./index");

describe("computeTheString", () => {
  test("it should work", () => {
    const random = jest.spyOn(R, "random").mockResolvedValue(2);

    const actual = computeTheString();
    expect(actual).toBe("AAAAAAAAAA");
  });
});
