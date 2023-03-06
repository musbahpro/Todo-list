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
    now_task.className ="now";

    let inbut = document.createElement("input");
    inbut.type = "text"

    inbut.setAttribute ("readonly","readonly")
    inbut.className = "task_paragraph";
    inbut.appendChild(document.createTextNode(task.title))

    now_task.appendChild(inbut)
    tasks.appendChild(now_task);


  /*  editIcon.addEventListener("click", ()=>{
      editIcon.removeAttribute("readonly")
      editIcon.focus();
    })*/
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

// edit btn
