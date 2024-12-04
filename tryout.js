let student = {
  collage_id: Math.floor(Math.random() * 500) + 1,
  name: "notime",
  email: "notime@gmail.com",
  phone_number: 9999999999,
  address: {
    house_number: "",
    street_name: "",
    pin_number: "",
    country: "",
  },
  applied_for_scholarship: false,
  subjects: [
    { subject_name: "maths", total_marks: 80 },
    { subject_name: "science", total_marks: 70 },
    { subject_name: "english", total_marks: 90 },
  ],
};

function change_name() {
  let changed_name = prompt("enter name");
  student.name = changed_name;
  console.log(student);
}

function change_number() {
  let changed_number = Number(prompt("enter your number"));
  if (changed_number == 0 || changed_number == "" || isNaN(changed_number)) {
    student.phone_number = student.phone_number;
  } else {
    student.phone_number = changed_number;
  }
  console.log(student.phone_number);
}

function change_address() {
  let changed_house_number = prompt("enter house number");
  let changed_street_number = prompt("enter street number");
  let changed_pin_number = prompt("enter pin number");
  let changed_country = prompt("enter country");
  student.address.house_number = changed_house_number;
  student.address.street_name = changed_street_number;
  student.address.pin_number = changed_pin_number;
  student.address.country = changed_country;
}

function new_subject() {
  let new_subject = prompt("enter new subject name");
  let new_subject_mark = Number(prompt("enter the marks"));
  student.subjects.push({
    subject_name: new_subject,
    total_marks: new_subject_mark,
  });
  console.log(student.subjects);
}

function remove_subject() {
  let removed = prompt("enter the subject to be removed");
  student.subjects = student.subjects.filter(
    (sub) => sub.subject_name != removed
  );
  console.log(student.subjects);
}

function change_marks() {
  let chosen = prompt(
    "select the subject for which the marks has to be chnaged"
  );
  let changed_marks = Number(prompt("enter the marks"));

  let found = student.subjects.find((subj) => subj.subject_name == chosen);
  if (found) {
    subj.total_marks = changed_marks;
    console.log(student.subjects);
  } else {
    console.log("subjects not found");
  }
}

function display_all_marks() {
  for (let i = 0; i < student.subjects.length; i++) {
    console.log(student.subjects[i].total_marks);
  }
}

function scholarship() {
  let status = prompt("do you want to change the status of scholarhsip");
  if (status == "yes") {
    student.applied_for_scholarship = !student.applied_for_scholarship;
    console.log("scholarship status chnaged");
  } else {
    student.applied_for_scholarship = student.applied_for_scholarship;
    console.log("scholarship status not changed");
  }
}

function age() {
  let add_age = Number(prompt("add your age"));
  student["age"] = add_age;
  console.log("age of student " + student.age);
}

function total_marks() {
  let sum = 0;
  for (let i = 0; i < student.subjects.length; i++) {
    sum = sum + student.subjects[i].total_marks;
  }
  console.log("total marks " + sum);
}

let exit = false;
while (!exit) {
  var choice = parseInt(
    prompt(
      "enter your choice \n 1.Chnage name \n 2.Change number \n 3.change address  \n 4. subject chnages \n 5.scholarship status \n 6.add age \n 7. total marks \n8.exit"
    )
  );

  switch (choice) {
    case 1:
      change_name();
      break;

    case 2:
      change_number();
      break;

    case 3:
      change_address();
      break;

    case 4:
      subject_changes();
      break;

    case 5:
      scholarship();
      break;

    case 6:
      age();
      break;

    case 7:
      total_marks();
      break;

    case 8:
      let sure = prompt("are you sure you want to exit");
      if (sure == "yes") {
        exit = true;
      }
  }

  function subject_changes() {
    let option = parseInt(
      prompt(
        "enter choice: \n 1:add new subject \n 2:remove subject \n 3:change mark of subject \n 4:display all mark \n 5:back to main menu"
      )
    );

    switch (option) {
      case 1:
        new_subject();
        break;

      case 2:
        remove_subject();
        break;

      case 3:
        change_marks();
        break;

      case 4:
        display_all_marks();
        break;

      case 5:
        break;
    }
  }
}
