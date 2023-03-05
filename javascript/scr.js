let inbut = document.getElementById("inbut");
let add_btn = document.getElementById("add_btn");
let tasks = document.getElementById("tasks");

let arrayoftasks = [];// min Arrey

let btn_fun = add_btn.addEventListener("click", (e) => { 
  e.preventDefault()
  if (inbut.value !== "") { // Check on if it is empty
    NewTask(inbut.value);
    inbut.value = "";
  }
});


function NewTask(taskText) {

  let task = { // new task 
    id: Date.now(),
    title: taskText,
    cheked: false,
  };

  arrayoftasks.push(task); // push to array
  ElementsTopage(arrayoftasks); // Elements function 
}

// Elements To page

function ElementsTopage(Addingtask) {
 
  tasks.innerHTML = "";

  Addingtask.forEach((task) => {
    let now_task = document.createElement("div");
    let text  = document.createElement("p");
    text.className = "task_text"
    now_task.id = "now";
    now_task.setAttribute("data-id", task.id);
    text.appendChild(document.createTextNode(task.title));
    console.log(now_task);
   
    let icon = document.createElement("i");
    icon.className = "bi bi-trash3";
    let Del = document.createElement("button");
    Del.id ="delete";

    Del.appendChild(icon)
    now_task.appendChild(text);
    now_task.appendChild(Del);
    tasks.appendChild(now_task)
  });
}
