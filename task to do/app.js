
let task = document.getElementById("task");
let btn = document.getElementById("addTask");
let list = document.getElementById("list");
addTask.addEventListener("click",()=>{
    console.log(task);
    
 list.innerHTML += `<div class="main"><li>${task.value}</li> <div ><button onclick="edit(this)">edit</button>
  <button onclick= "delete(this)">delete</button></div></div>`
 task.value = " "

})
function edit(element){
element.addEventListener("click",()=>{
task.value = element.parentNode.parentNode.firstChild.innerText
btn.value.innerText="edited"

})
}
function del(element){
element.addEventListener("click",()=>{
task.value = " "
})
}