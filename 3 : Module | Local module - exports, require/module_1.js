const firstModuleFunction = () => {
  return "This is the first module function";
};

const secondModuleFunction = () => {
  return "This is the second module function";
};

const addTwoNumbers = (a, b) => {
  return `${a} + ${b} = ${a + b}`;
};

exports.firstModuleFunction = firstModuleFunction;
exports.secondModuleFunction = secondModuleFunction;
exports.addTwoNumbers = addTwoNumbers;
