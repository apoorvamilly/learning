let arr = [];
arr.push(10, 20, 30, 40);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift("hello", "world");
console.log(arr);

arr.shift();
console.log(arr);

let new_arr = arr.slice(1, 4);
console.log(new_arr);

var new_numb = [];
var numb = [52, 48, 8, 49, 17, 38, 39, 0, 4, 29];

for (let i = 0; i < numb.length; i++) {
  if (numb[i] < 40) {
    new_numb.push(numb[i]);
  }
}

console.log(new_numb);
let j = 0;
result = [];

result = numb.filter((element) => element < 40);

console.log(result);

let map_result = numb.map((res) => res * 2);
console.log(map_result);
