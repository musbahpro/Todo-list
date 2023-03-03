let inbut = document.getElementById("inbut");
let add_btn = document.getElementById("add_btn");
let tasks = document.getElementsByClassName("tasks");

let arrayoftasks = [];

let btn_fun = add_btn.addEventListener("click", () => {
  if (inbut.value !== "") {
    NewTask(inbut.value);
    inbut.value = "";
  }
});

function NewTask(taskText) {
  let task = {
    id: Date.now(),
    title: taskText,
    cheked: false,
  };
  arrayoftasks.push(task);

  ElementsTopage();
}
function ElementsTopage(Addingtask) {
  tasks.innerHTML()

  Addingtask.forEach((task) => {
    let now_task = document.createElement("div");
    now_task.className = "now";

    let task_texts = document.createElement("div");
    task_texts.className = "text";
    now_task.appendChild(task_texts);

    let icon = document.createElement("i");
    icon.className = "bi bi-check2-all";
    task_texts.appendChild(icon);

    let task_text = document.createElement("p");
    task_text.innerText = inbut.value;
    task_texts.appendChild(task_text);
    let Del = document.createElement("span");
    Del.id = "delete";
    Del.appendChild(document.createTextNode("Delete"));
    now_task.appendChild(Del);
    tasks.appendChild(now_task)
  });
}
