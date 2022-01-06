let toDoList = [], counter = 1;
let clickAdd = magicElement(false,"add");
let userInput = magicElement(false,"userInput");
let todoBox = magicElement(false,"todoBox");
let ulList = magicElement(true,"ul");
ulList.id = "list";
todoBox.appendChild(ulList);
clickAdd.addEventListener("click",function takeInput(){
    toDoList.push(userInput.value);
    let newTodo = magicElement(true,"div");
    newTodo.classList.add("newTodo");
    ulList.appendChild(newTodo);
    let leftBox = magicElement(true,"div");
    leftBox.classList.add("leftBox")
    newTodo.appendChild(leftBox);
    let checkBox = magicElement(true,"input");
    checkBox.type ="checkbox";
    checkBox.id = "unChecked"+counter;
    checkBox.setAttribute("onclick","checkLinethru(id)");
    leftBox.appendChild(checkBox);
    let todo = magicElement(true,"li");
    todo.textContent = userInput.value;
    leftBox.appendChild(todo);
    let rightBox = magicElement(true,"div");
    rightBox.classList.add("rightBox");
    newTodo.appendChild(rightBox);
    let editor = magicElement(true,"button");
    editor.className = "modify"
    editor.classList.add("rightItems");
    editor.id = "modify"+counter;
    editor.textContent="Modify";
    editor.setAttribute("onclick","checkModify(id)")
    rightBox.appendChild(editor);
    let deletion = magicElement(true,"button");
    deletion.className = "delete";
    deletion.classList.add("rightItems");
    deletion.id="delete"+counter;
    deletion.setAttribute("onclick","checkDelete(id)");
    deletion.textContent="Remove";
    rightBox.appendChild(deletion);
    userInput.value="";
    counter++;
});

document.querySelector("#clear").addEventListener("click",
function clearInput(){
    userInput.value="";
})

function magicElement(bool,elem){
    if(bool){
        return document.createElement(elem);
    }else{
        return document.getElementById(elem);
    }
}
function checkDelete(delId){
    document.getElementById(delId).parentElement.parentElement.remove();
}
function checkModify(modId){
    let modifier = document.getElementById(modId).parentElement.parentElement.firstChild.lastChild.textContent;
    document.getElementById(modId).parentElement.parentElement.firstChild.lastChild.replaceWith(magicElement(true,"input"));
    document.getElementById(modId).parentElement.parentElement.firstChild.lastChild.value = modifier;
    let saveClass = document.getElementById(modId).classList;
    let saveId = document.getElementById(modId).id;
    let saveButton = magicElement(true,"button");
    saveButton.textContent = "save";
    saveButton.classList = saveClass;
    saveButton.id = saveId;
    saveButton.setAttribute("onclick","updateTodo(id)");
    document.getElementById(modId).replaceWith(saveButton);
}

function updateTodo(modId){
    let updatedValue = document.getElementById(modId).parentElement.parentElement.firstChild.lastChild;        
    document.getElementById(modId).parentElement.parentElement.firstChild.lastChild.replaceWith(magicElement(true,"li"));
    document.getElementById(modId).parentElement.parentElement.firstChild.lastChild.textContent = updatedValue.value;  
    document.getElementById(modId).textContent = "Modify";      
}

function checkLinethru(checkId){
    document.getElementById(checkId).parentElement.lastChild.style.textDecoration="line-through";
}