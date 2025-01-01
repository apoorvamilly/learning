let name_p = document.getElementById("name");
let edit_name = document.getElementById("edit_name");
let style_name = document.getElementById("style_name");
let tasks = document.getElementById("tasks");
let delete_task = document.getElementById("delete_task");
let add_task = document.getElementById("add_task");
let subtask2 = document.querySelector(".subtask2");
let list = document.querySelector(".list");
let subtask3 = document.querySelector(".subtask3");

edit_name.addEventListener("click", () => {
  let new_text = document.createElement("input");
  new_text.type = "text";
  name_p.innerHTML = "";
  name_p.appendChild(new_text);

  new_text.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      name_p.textContent = new_text.value;
    }
  });
});

let colours = [
  "blue",
  "green",
  "red",
  "yellow",
  "orange",
  "grey",
  "silver",
  "gold",
  "violet",
  "pink",
];

style_name.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * colours.length);
  let randomColor = colours[randomIndex];
  console.log(randomColor);
  name_p.style.color = `${randomColor}`;
});

// subtask2

let array = [];
add_task.addEventListener("click", () => {
  let task = document.createElement("input");
  task.type = "text";
  subtask2.appendChild(task);

  task.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const taskWrapper = document.createElement("div");
      let new_task = document.createElement("p");
      let edit_button = document.createElement("button");
      edit_button.textContent = "edit";
      new_task.textContent = task.value;
      taskWrapper.appendChild(new_task);
      taskWrapper.appendChild(edit_button);
      list.appendChild(taskWrapper);

      array.push(task.value);
      task.remove();
      console.log(array);

      edit_button.addEventListener("click", () => {
        let edit_input = document.createElement("input");
        edit_input.type = "text";
        edit_input.value = new_task.textContent;

        taskWrapper.replaceChild(edit_input, new_task);

        edit_input.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
            let index = array.indexOf(new_task.textContent);
            if (index != -1) {
              array[index] = edit_input.value;
            }
            new_task.textContent = edit_input.value;
            taskWrapper.replaceChild(new_task, edit_input);
            console.log(array);
          }
        });
      });
    }
  });
});

delete_task.addEventListener("click", () => {
  let del_task = document.createElement("input");
  del_task.type = "text";
  subtask2.appendChild(del_task);

  del_task.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      array = array.filter((item) => item !== del_task.value);

      let del = document.querySelectorAll(".list p");
      del.forEach((task) => {
        if (task.firstChild.textContent === del_task.value) {
          task.remove();
        }
      });
      console.log(array);
      del_task.remove();
    }
  });
});

let std_name = "milly";

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    alert(`Hi ${std_name}, How are you`);
  }
});

let phone = document.createElement("p");
phone.textContent = "928383938";
subtask3.appendChild(phone);

document.addEventListener("keydown", (event) => {
  if (event.key === "q") {
    let new_phone = document.createElement("input");
    new_phone.type = "text";
    subtask3.replaceChild(new_phone, phone);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        phone.textContent = new_phone.value;
        subtask3.replaceChild(phone, new_phone);
      }
    });
  }
});
