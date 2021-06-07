function cellClicked(cellId){
    let activeCell = document.getElementById(cellId);
    let newDiv = document.createElement('div')
    activeCell.appendChild(newDiv);
    newDiv.className="playerSymbol";
    let container = document.querySelector('.container');
    let containerClass= container.classList;
    if(containerClass[1] === 'playerX'){
        newDiv.textContent="X";
        containerClass.replace('playerX','playerO');
    }else{
        newDiv.textContent="O";
        containerClass.replace('playerO','playerX');
    }
}


function clearCell(){
    let deleteCell = document.querySelectorAll('.playerSymbol');
    deleteCell.forEach((i)=>i.remove());
}

   


// function cellClicked(cellId){
//     let activeCell = document.getElementById(cellId);
//     let newDiv = document.createElement('div')
//     activeCell.appendChild(newDiv);
//     newDiv.textContent="X";
//     // let playerInput = document.createTextNode("X");
//     // newDiv.appendChild(playerInput);
//     newDiv.className="playerSymbol";
// }
