// toLowercase -
// trim- delete spaces
// flag

// let student = {
//   name: "Fasna",
//   age: 24,
// };

// let change = prompt("enter choice :\n change name \n change age");

// if (change == "name") {
//   let new_name = prompt("enter the name to change");
//   student.name = new_name;
//   console.log(student);
// } else if (change == "age") {
//   let new_age = prompt("enter the age to change");
//   student.age = new_age;
//   console.log(student);
// } else {
//   console.log("input invalid");
// }

// let student = [
//   { name: "milly", age: 24 },
//   { name: "fasna", age: 23 },
// ];

// for (let i = 0; i < student.length; i++) {
//   console.log(student[i]);
// }

// function counter(number) {
//   for (let i = 5; i >= 0; i--) {
//     console.log(i);
//   }
// }

// counter(5);

let arr = [];

arr.push(20, 40, 20, 40, 57);

arr.splice(1, 0, 30);
console.log(arr);

let num = [23, 34, 5, 66, 49];
let items;
items = num.map((items) => items * 2);
console.log(items);

let arra = [
  { name: "milly", age: 24 },
  { name: "shally", age: 21 },
  { name: "smitha", age: 34 },
];

let obj = arra.map((obj) => console.log(obj.name));

function student(age) {
  console.log("my name is " + age);
}
student("apoorva");
