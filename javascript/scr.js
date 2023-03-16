let inbut = document.getElementById("inbut");
let add_btn = document.getElementById("add_btn");
let tasks = document.getElementById("tasks");

let arrayoftasks = []; // min Arrey
if (localStorage.getItem("tasks")) {
  arrayoftasks = JSON.parse(localStorage.getItem("tasks"));
}

getData();

let AddFunction = add_btn.addEventListener("click", (e) => {
  let TaskInbut = inbut.value;
  if ( TaskInbut !== "" ) {
    // Check on if it is empty
    NewTask(TaskInbut);
    inbut.value = "";
  }
});

function NewTask(taskText) {
  const task = {
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
    now_task.className = "now";
    now_task.setAttribute("date-id" , task.id)
    let inbut = document.createElement("input");
    
    inbut.type =  ("text")
    inbut.value =  (task.title) 
    inbut.setAttribute("readonly","readonly")

     let buttons = document.createElement("div");
buttons.className = "buttons"
    let edit_btn = document.createElement("button");
    edit_btn.innerHTML = "EDIT"
    edit_btn.id = "edit_btn"

    let delite_btn = document.createElement("button");
    delite_btn.innerHTML = "DELITE"
    delite_btn.id = "delite_btn"
    
    buttons.appendChild(edit_btn)
    buttons.appendChild(delite_btn)
    now_task.appendChild(inbut) 
    now_task.appendChild(buttons) 
    tasks.appendChild(now_task);
 
    //! --------  Edit btn function
    edit_btn.addEventListener("click", ()=>{
       inbut.toggleAttribute("readonly")
       edit_btn.classList.toggle ("red")
       inbut.focus()       
    }) 
    //! --------  Delite btn function
    delite_btn.addEventListener("click", (e)=>{
       tasks.removeChild(now_task)
       Deletes("date-id" , task.id)
    })
  });
  
}


function Deletes(e) {

let notes = localStorage.getItem("tasks")
if (notes == null) {
  arrayoftasks = []
}else{
  arrayoftasks = JSON.parse(notes)
}
arrayoftasks.splice(e , 1)
localStorage.setItem("tasks", JSON.stringify(arrayoftasks))
 addTolocal(arrayoftasks)
}
 

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
