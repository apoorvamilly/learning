// // subtask1
// let person = {
//   name: "Alice",
//   age: 24,
//   city: "newyork",
// };
// let sub1 = document.getElementById("subtask1");
// let para = document.createElement("p");
// let para2 = document.createElement("p");
// para2.innerHTML = `Name:${person.name} age: ${person.age} city: ${person.city}`;
// para.innerHTML = JSON.stringify(person);

// for (let key in person) {
//   let para3 = document.createElement("p");

//   para3.innerHTML = `${key}:${person[key]}`;
//   sub1.appendChild(para3);
// }

// sub1.appendChild(para);
// sub1.appendChild(para2);

// function clicked1() {
//   let para = document.createElement("p");
//   para.innerHTML = person.name + " from " + person.city;
//   sub1.appendChild(para);
// }

// // subtask2

// let car = {
//   brand: "Toyota",
//   year: 2010,
// };

// let car_props = document.getElementById("car_props");
// for (let key in car) {
//   car_props.innerHTML = car.brand + " , " + car.year;
// }

// function subtask2() {
//   let yr = prompt("enter year");
//   car.year = yr;
//   car_props.innerHTML = car.brand + " , " + car.year;
// }

// // subtask 3

// let student = { name: "John", age: 16 };
// let new_el = document.createElement("p");

// function subtask3() {
//   let new_prop = prompt("enter new property");
//   let new_val = prompt("enter correspeonding value");

//   student[new_prop] = new_val;
//   new_el.innerHTML = JSON.stringify(student); //innerhtml requires a string
// }
// document.getElementById("subtask3").appendChild(new_el);

// //subtask4

// let movie = { title: "Inception", director: "Christopher Nolan", year: 2010 };
// let sub4 = document.getElementById("sub4");
// let mov = document.createElement("p");
// let content = "";
// function subtask4() {
//   for (let key in movie) {
//     content += `${key} : ${movie[key]} <br>`;
//   }
//   mov.innerHTML = content;
//   sub4.appendChild(mov);
// }

// // subtask5
// let laptop = { brand: "Dell", model: "Inspiron", price: 500 };
// let cont = "";
// let sub5 = document.getElementById("sub5");
// let mov5 = document.createElement("p");
// function subtask5() {
//   delete laptop.price;
//   for (let key in laptop) {
//     cont += `${key} : ${laptop[key]} <br>`;
//   }
//   mov5.innerHTML = cont;
//   sub5.appendChild(mov5);
// }

// // subtask6
// let sub6 = document.querySelector(".sub6");

// let employee = {
//   name: "Emma",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "Boston",
//     zip: "02110",
//   },
// };

// function subtask6() {
//   let city = employee.address.city;
//   sub6.innerHTML = city;
// }

// // subtask7
// let sub7 = document.querySelector(".sub7");
// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ];

// function subtask7() {
//   for (let i = 0; i < users.length; i++) {
//     let para7 = document.createElement("p");
//     para7.innerHTML = `name:${users[i].name}, Age: ${users[i].age}`;
//     sub7.appendChild(para7);
//   }
// }

// task7.5

let student = {
  college_id: Math.floor(Math.random()),
  name: "notime",
  email: "notime@gmail.com",
  phone: 9999999999,
  address: {
    house_number: "",
    street_number: "",
    pin_number: "",
    country: "",
  },
  subject: [
    { subject_name: "maths", marks: 50 },
    { subject_name: "science", marks: 80 },
    { subject_name: "english", marks: 90 },
  ],
  applied_for_scholarship: false,
};

let details = document.querySelector(".details");
let para = document.createElement("p");
para.innerHTML = `<pre>${JSON.stringify(student, null, 2)}</pre>`;

details.appendChild(para);

// change-name
let subtask1 = document.getElementById("subtask1");
function change_name() {
  let new_name = prompt("enter the name to change");
  student.name = new_name;
  subtask1.innerHTML = "";
  let new_name_para = document.createElement("p");
  new_name_para.innerHTML = `updated name:${student.name}`;
  subtask1.appendChild(new_name_para);
}

// change-number
let subtask2 = document.getElementById("subtask2");
function change_number() {
  let new_number = prompt("eneter new number");
  student.phone = new_number;
  subtask1.innerHTML = "";
  let new_para = document.createElement("p");
  new_para.innerHTML = `updated name:${student.phone}`;
  subtask2.appendChild(new_para);
}

//change address
let subtask3 = document.getElementById("subtask3");
function change_address() {
  let new_house = prompt("eneter new house number");
  let new_street = prompt("eneter new street number");
  let new_pin = prompt("eneter new pin number");
  let new_country = prompt("eneter new country");
  student.address.house_number = new_house;
  student.address.country = new_country;
  student.address.pin_number = new_pin;
  student.address.street_number = new_street;

  let new_para = document.createElement("p");
  new_para.innerHTML = `${JSON.stringify(student.address, null, 2)}`;
  subtask3.appendChild(new_para);
}

//add a subject

let subtask4 = document.getElementById("subtask4");
function add_subject() {
  let new_subject = prompt("eneter subject name");
  let new_sub_mark = prompt("eneter new subject mark");
  student.subject.push({ subject_name: new_subject, marks: new_sub_mark });
  let new_para = document.createElement("p");
  new_para.innerHTML = `${JSON.stringify(student.subject, null, 2)}`;
  subtask4.appendChild(new_para);
}

//remove subject

let subtask5 = document.getElementById("subtask5");
function remove_subject() {
  let rem = prompt("enter the subject to remove");
  student.subject = student.subject.filter((sub) => sub.subject_name != rem);
  let new_para = document.createElement("p");
  new_para.innerHTML = `${JSON.stringify(student.subject, null, 2)}`;
  subtask5.appendChild(new_para);
}

// change marks
let subtask6 = document.getElementById("subtask6");
function change_subject_marks() {
  let marks_changed_sub = prompt(
    "enter the subject of which marks has to be changed"
  );
  let marks_changed = Number(prompt("enter the marks"));
  let subj = student.subject.find(
    (subj) => subj.subject_name == marks_changed_sub
  );
  subj.marks = marks_changed;
  let new_para = document.createElement("p");
  new_para.innerHTML = `${JSON.stringify(student.subject, null, 2)}`;
  subtask6.appendChild(new_para);
}

// display all marks
let subtask7 = document.getElementById("subtask7");
function display_all_marks() {
  for (let i = 0; i < student.subject.length; i++) {
    let new_para = document.createElement("p");

    new_para.innerHTML = `${student.subject[i].subject_name} = ${student.subject[i].marks}`;
    subtask7.appendChild(new_para);
  }
}

//change scholarship details
let subtask8 = document.getElementById("subtask8");
function change_status() {
  student.applied_for_scholarship = !student.applied_for_scholarship;
  let new_para = document.createElement("p");
  new_para.innerHTML = `scholarhip status changed `;
  subtask8.appendChild(new_para);
}

// add age
let subtask9 = document.getElementById("subtask9");
function add_age() {
  let age = prompt("enter age");
  student["age"] = age;
  let new_para = document.createElement("p");
  new_para.innerHTML = `age: ${student.age}`;
  subtask9.appendChild(new_para);
}

// total marks
let subtask10 = document.getElementById("subtask10");
function display_total() {
  let all_marks = 0;
  for (let i = 0; i < student.subject.length; i++) {
    all_marks = all_marks + student.subject[i].marks;
  }
  student["total_marks"] = all_marks;
  let new_para = document.createElement("p");
  new_para.innerHTML = `total marks: ${all_marks}`;
  subtask10.appendChild(new_para);
}
