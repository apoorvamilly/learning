// subtask1
let person = {
  name: "Alice",
  age: 24,
  city: "newyork",
};
let sub1 = document.getElementById("subtask1");
let para = document.createElement("p");
let para2 = document.createElement("p");
para2.innerHTML = `Name:${person.name} age: ${person.age} city: ${person.city}`;
para.innerHTML = JSON.stringify(person);

for (let key in person) {
  let para3 = document.createElement("p");

  para3.innerHTML = `${key}:${person[key]}`;
  sub1.appendChild(para3);
}

sub1.appendChild(para);
sub1.appendChild(para2);

function clicked1() {
  let para = document.createElement("p");
  para.innerHTML = person.name + " from " + person.city;
  sub1.appendChild(para);
}

// subtask2

let car = {
  brand: "Toyota",
  year: 2010,
};

let car_props = document.getElementById("car_props");
for (let key in car) {
  car_props.innerHTML = car.brand + " , " + car.year;
}

function subtask2() {
  let yr = prompt("enter year");
  car.year = yr;
  car_props.innerHTML = car.brand + " , " + car.year;
}

// subtask 3

let student = { name: "John", age: 16 };
let new_el = document.createElement("p");

function subtask3() {
  let new_prop = prompt("enter new property");
  let new_val = prompt("enter correspeonding value");

  student[new_prop] = new_val;
  new_el.innerHTML = JSON.stringify(student); //innerhtml requires a string
}
document.getElementById("subtask3").appendChild(new_el);

//subtask4

let movie = { title: "Inception", director: "Christopher Nolan", year: 2010 };
let sub4 = document.getElementById("sub4");
let mov = document.createElement("p");
let content = "";
function subtask4() {
  for (let key in movie) {
    content += `${key} : ${movie[key]} <br>`;
  }
  mov.innerHTML = content;
  sub4.appendChild(mov);
}

// subtask5
let laptop = { brand: "Dell", model: "Inspiron", price: 500 };
let cont = "";
let sub5 = document.getElementById("sub5");
let mov5 = document.createElement("p");
function subtask5() {
  delete laptop.price;
  for (let key in laptop) {
    cont += `${key} : ${laptop[key]} <br>`;
  }
  mov5.innerHTML = cont;
  sub5.appendChild(mov5);
}

// subtask6
let sub6 = document.querySelector(".sub6");

let employee = {
  name: "Emma",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Boston",
    zip: "02110",
  },
};

function subtask6() {
  let city = employee.address.city;
  sub6.innerHTML = city;
}

// subtask7
let sub7 = document.querySelector(".sub7");
let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];


function subtask7() {
  for (let i = 0; i < users.length; i++) {
    let para7 = document.createElement("p");
    para7.innerHTML = `name:${users[i].name}, Age: ${users[i].age}`;
    sub7.appendChild(para7);
  }
}
