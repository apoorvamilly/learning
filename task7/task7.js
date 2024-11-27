// subtask1

let person = {
  name: "Alice",
  age: 24,
  city: "newyork",
};
console.log(person.name + " from " + person.city);

// subtask2

let car = {
  name: "toyota",
  year: 2010,
};
car.year = 2022;
console.log(car);

//subtask3
let student = {
  name: "john",
  age: 16,
};

student.grade = "A";
console.log(student);

//subtask4

let movie = { title: "Inception", director: "Christopher Nolan", year: 2010 };
for (let key in movie) {
  console.log(`${key}:${movie[key]}`);
}

//subtask5

let laptop = { brand: "Dell", model: "Inspiron", price: 500 };
console.log(laptop);
delete laptop.price;
console.log(laptop);

//subtask6

let employee = {
  name: "Emma",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Boston",
    zip: "02110",
  },
};

console.log(employee.address.city);

//subtask7

let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}
