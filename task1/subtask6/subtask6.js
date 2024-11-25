let num1 = Number(prompt(console.log("enter number 1")));

let num2 = Number(prompt(console.log("enter number 2")));

let op = prompt(console.log("enter operator"));

var result;

if (op === "+") {
  result = num1 + num2;
} else if (op === "-") {
  result = num1 - num2;
} else if (op === "*") {
  result = num1 * num2;
} else if (op === "/") {
  result = num1 / num2;
} else {
  console.log("invalid");
}

console.log("result = ", result);
