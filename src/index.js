const { random } = require("./random");

const computeTheString = () => {
  return new Array(10)
    .fill("")
    .map(() => {
      return String.fromCharCode(Math.ceil(random(78) * 30 + 60));
    })
    .join("");
};

module.exports = {
    computeTheString,
};
