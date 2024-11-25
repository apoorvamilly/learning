let n = Number(prompt("enter a number"));

var arr = [0, 1];
function fibonacci(n) {
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  console.log(arr);
}

fibonacci(n);
