let arr = ["hello", "my", "name", "is", "apoorva"];

let find = prompt(console.log("enter term to find"));

var i = 0;

while (i < arr.length ) {
  if (find == arr[i]) {
    console.log("found term at", i);
    break;
  } else {
    console.log("not found");
  }
  i++;
}
