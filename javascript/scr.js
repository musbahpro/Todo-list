let inbut = document.getElementById("inbut");
let add_btn = document.getElementById("add_btn");
let tasks = document.getElementById("tasks");

let arrayoftasks = []; // min Arrey
if (localStorage.getItem("tasks")) {
  arrayoftasks = JSON.parse(localStorage.getItem("tasks"));
}

getData();
let btn_fun = add_btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inbut.value !== "") {
    // Check on if it is empty
    NewTask(inbut.value);
    inbut.value = "";
  }
});

function NewTask(taskText) {
  let task = {
    // new task
    id: Date.now(),
    title: taskText,
    cheked: false,
  };
  arrayoftasks.push(task); // push to array
  ElementsTopage(arrayoftasks); // Elements function

  addTolocal(arrayoftasks);
}

// Elements To page

function ElementsTopage(Addingtask) {
  tasks.innerHTML = "";

  Addingtask.forEach((task) => {
    let now_task = document.createElement("div");
    let icons = document.createElement("div");
    let text = document.createElement("p");
    text.className = "task_text";
    now_task.id = "now";
    icons.className = "icons";
    now_task.setAttribute("data-id", task.id);
    text.appendChild(document.createTextNode(task.title));



    let deletIcon = document.createElement("i");
    deletIcon.className = "bi bi-trash3";

    let Del = document.createElement("button");
    Del.id = "delet";

    let editIcon = document.createElement("i");
    editIcon.className = "bi bi-pencil";
    let edit = document.createElement("button");
    edit.id = "edit";

Del.appendChild(deletIcon)
edit.appendChild(editIcon)
    icons.appendChild(Del);
    icons.appendChild(edit);
    now_task.appendChild(text);
    now_task.appendChild(icons);
    tasks.appendChild(now_task);
  });
}
let deleteBtn;
function addTolocal(arrayoftasks) {
  localStorage.setItem("tasks", JSON.stringify(arrayoftasks));
}
function getData() {
  let data = localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    ElementsTopage(tasks);
  }
}

localStorage.clear()