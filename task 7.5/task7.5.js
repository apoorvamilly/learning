let student = {
  Collage_Id: Math.random(),
  Name: "notime",
  Email: "notime@gmail.com",
  Phone_number: 99999999999,
  Address: {
    House_number: "",
    Street_name: "",
    Pin_number: "",
    Country: "",
  },
  subject: [
    { Subject_name: "english", Total_marks: 80 },
    { Subject_name: "maths", Total_marks: 85 },
    { Subject_name: "science", Total_marks: 90 },
  ],
  Applied_for_scholarship: false,
};

function change_name() {
  let new_name = prompt("enter name");
  student.Name = new_name;
  console.log("new name is", student.Name);
}

function change_number() {
  let new_number = prompt("enter new number");
  student.Phone_number = new_number;
  console.log("new phone numer is", student.Phone_number);
}

function change_address() {
  let new_House_number = prompt("enter new house number");
  student.Address.House_number = new_House_number;
  let new_street_name = prompt("enter new street name");
  student.Address.Street_name = new_street_name;
  let new_pin_number = prompt("enter new pin number");
  student.Address.Pin_number = new_pin_number;
  let new_country = prompt("enter new country name");
  student.Address.Country = new_country;

  console.log("new address is", student.Address);
}

function add_subject() {
  let new_subject = prompt("enter name of subject");
  let new_marks = Number(prompt("marks of the suvject"));
  student.subject.push({ Subject_name: new_subject, Total_marks: new_marks });
  console.log(student.subject);
}

function remove_subject() {
  let subject_removal = prompt("enter subject to remove");
  student.subject = student.subject.filter(
    (sub) => sub.Subject_name != subject_removal
  );
  console.log(student.subject);
}

function change_marks() {
  let marks_changed_sub = prompt(
    "enter the subject of which marks has to be changed"
  );
  let marks_changed = Number(prompt("enter the marks"));
  let subj = student.subject.find(
    (subj) => subj.Subject_name == marks_changed_sub
  );
  subj.Total_marks = marks_changed;
  console.log(student.subject);
}

function display_all_marks() {
  for (let i = 0; i < student.subject.length; i++) {
    console.log(
      student.subject[i].Subject_name + "=" + student.subject[i].Total_marks
    );
  }
}

function add_age() {
  let age = prompt("enter age");
  student["age"] = age;
  console.log(student);
}

function overall_marks() {
  let total_marks = 0;
  for (let i = 0; i < student.subject.length; i++) {
    total_marks = total_marks + student.subject[i].Total_marks;
  }
  console.log(total_marks);
}

function scholarship() {
  let status = prompt("do you want to chnage the status of schorlarship");
  if (status == "yes") {
    student.Applied_for_scholarship = !student.Applied_for_scholarship;
    console.log("scholraship status changed");
  }
}

function exit_menu() {
  let confirm_exit = prompt("sure you want to exit?");
  if (confirm_exit == "yes") {
    exit = true;
  }
}

let exit = false;

while (!exit) {
  var n = parseInt(
    prompt(
      "enter choice: \n 1.Chnage name \n 2.Change number \n 3.change address  \n 4. subject chnages \n 5.scholarship status \n 6.add age \n 7. total marks \n8.exit"
    )
  );

  function subject_change(k) {
    switch (k) {
      case 1:
        add_subject();
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

  switch (n) {
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
      var k = parseInt(
        prompt(
          "enter choice: \n 1:add new subject \n 2:remove subject \n 3:change mark of subject \n 4:display all mark \n 5:back to main menu"
        )
      );
      subject_change(k);
      break;
    case 5:
      scholarship();
      break;
    case 6:
      add_age();
      break;
    case 7:
      overall_marks();
      break;
    case 8:
      exit_menu();
      break;
  }
}
