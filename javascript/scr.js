let inbut = document.getElementById("inbut");
let add_btn = document.getElementById("add_btn");
let tasks = document.getElementById("tasks");

let arrayoftasks = []; // min Arrey
if (localStorage.getItem("tasks")) {
  arrayoftasks = JSON.parse(localStorage.getItem("tasks"));
}

getData();
let btn_fun = add_btn.addEventListener("click", (e) => {
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
<<<<<<< HEAD
    now_task.className = "now";

    let inbut = document.createElement("input");
    
    inbut.type =  ("text")
    inbut.value =  (task.title) 
    inbut.setAttribute("readonly","readonly")

     let buttons = document.createElement("div");

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
       inbut.classList.toggle ("red")
       inbut.focus()       
    }) 
    //! --------  Delite btn function
    delite_btn.addEventListener("click", ()=>{
       tasks.removeChild(now_task)
       
    })
=======
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
>>>>>>> e799e1717398a53c8130e765fe40dde77696fdcb
  });
  
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

<<<<<<< HEAD
=======
// edit btn
>>>>>>> e799e1717398a53c8130e765fe40dde77696fdcb
