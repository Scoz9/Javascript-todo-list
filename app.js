/* Mantiene lo stato dell'applicazione in memoria e implementa le funzioni add/remove/modify */

const formContainer = document.getElementById("form-container");
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){

    if(inputBox.value == '') {
        return;
    }

    let listItem = document.createElement("li");
    listItem.className = "list-item";
    

    let listText = document.createElement("p");
    listText.innerHTML = inputBox.value;

    let buttonCheck = document.createElement("button");
    buttonCheck.className = "check";
    buttonCheck.innerHTML = "check";

    let buttonDelete = document.createElement("button");
    buttonDelete.className = "delete";
    buttonDelete.innerHTML = "delete";
    
    listItem.appendChild(listText);
    listItem.appendChild(buttonCheck);
    listItem.appendChild(buttonDelete);
    listContainer.appendChild(listItem);
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === "BUTTON") {
        if(e.target.classList.contains("check")) {
            e.target.previousElementSibling.classList.toggle("checked");
            saveData();
        } else if(e.target.classList.contains("delete")){
            e.target.parentElement.remove();
            saveData();
        }
    }
})

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function getData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

getData();