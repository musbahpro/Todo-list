let inbut = document.getElementById("inbut"); 
let add_btn = document.getElementById("add_btn");

add_btn.addEventListener("click", (e) =>{ // Add click function
let task_text = inbut.value;
console.log(task_text);
});
