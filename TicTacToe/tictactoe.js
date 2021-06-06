function cellClicked(cellId){
    let activeCell = document.getElementById(cellId);
    let newDiv = document.createElement('div')
    activeCell.appendChild(newDiv);
    let playerInput = document.createTextNode("X");
    newDiv.appendChild(playerInput);
    newDiv.className="playerSymbol";
}



   

