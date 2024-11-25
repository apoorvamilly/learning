let arr = [4, 15, 3, 4, 7, 2, 10];

let i = 0;

do {
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (sum >= 20) {
    arr.shift();
  }
} while (sum >= 20);

console.log(arr);
