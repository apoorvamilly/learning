for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let j = 5;
while (j >= 1) {
  console.log(j);
  j--;
}

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log(sum);

for (let k = 1; k < 16; k += 2) {
  console.log(k);
}

sum = 0;
i = 1;
while (i <= 20) {
  sum = sum + i;
  i++;
}
console.log(sum);

let n = 5;
let fact = 1;
for (i = 1; i <= n; i++) {
  fact = fact * i;
}
console.log(fact);

var number = 12345;

sum = 0;
while (number > 0) {
  let num = number % 10;
  sum = sum + num;
  number = Math.floor(number / 10);
}
console.log(sum);

n = 5;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  console.log(row);
}
