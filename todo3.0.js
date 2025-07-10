ctr = 1
const addTask = document.getElementById("addTask");
const button = document.getElementById("button");
const list = document.getElementById("list");
function addText(){
    if (addTask.value === ''){
        alert('Add Your Task')
    }else{
    let value = document.querySelector("input");
    let newTask = document.createElement("li");

    newTask.setAttribute("id",ctr);

     newTask.addEventListener("click",function(e){
        if (e.target.tagName !== "SPAN"){
            this.classList.toggle("checked")
        }
    });
    

    newTask.innerHTML =  value.value + "<span onclick='del("+ctr+")'>\u00d7</span>";
    list.appendChild(newTask);
    ctr = ctr + 1;
    addTask.value = "";
    }
}

function del(index){
    let element = document.getElementById(index);
    element.parentElement.removeChild(element);

}
list

