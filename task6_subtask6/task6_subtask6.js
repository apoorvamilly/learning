let arr = [];
let num = Number(prompt(console.log("number of elements?")));
let result = 0;

function sumArray(n) {
  for (let i = 0; i < n; i++) {
    let j = Number(prompt(console.log("enter elements")));
    arr.push(j);
  }
  console.log(arr);
  for (let n = 0; n < arr.length; n++) {
    result = result + arr[n];
  }
  console.log(result);
}

sumArray(num);
