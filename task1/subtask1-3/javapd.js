// sub task 1

let l = 10;
let w = 5;
console.log("area=", l * w);

//subtask 2

let item1 = Number(prompt("enter item 1 quantity"));
let item2 = Number(prompt("enter item 2 quantity"));

let item1price = Number(prompt("enter item1 price"));
let item2price = Number(prompt("enter item2 price"));

let total_item1 = item1 * item1price;
let total_item2 = item2 * item2price;

console.log(total_item1);
console.log(total_item2);

let total_price = total_item1 + total_item2;
console.log(total_price);

if (total_price > 100) {
  total_price = total_price - total_price * 0.1;
  console.log("final price", total_price);
} else {
  console.log("final price", total_price);
}

// subtask3

let num = Number(prompt("enter a number"));

let oddoreven = (num%2===0) ? console.log("even"): console.log("odd");

//subtask4
