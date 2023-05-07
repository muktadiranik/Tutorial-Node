console.log("3 : Module | Local module - exports, require");
const module_1 = require("./module_1");
const module_2 = require("./module_2");
const { printName } = require("./module_3");
const { printAge } = require("./module_3");

console.log(module_1.firstModuleFunction());
console.log(module_1.secondModuleFunction());
console.log(module_1.addTwoNumbers(1, 2));
console.log(module_2.subtractTwoNumbers(4, 2));
console.log(module_2.devideTwoNumbers(4, 2));
console.log(module_2.multiplyTwoNumbers(4, 2));
console.log(printName("John"));
console.log(printAge(30));
