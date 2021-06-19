let activePlayer = "X";
let count = 0;
let result = "";
let lastActiveCell = [];
let activeCellSymbol = [];

function getPlayerSymbol(cellEl) {
    return cellEl.children.length !== 0 ? cellEl.children[0].innerText : "";
}

function getPlayerSymbolByCoortnate(x, y) {
    return getPlayerSymbol(document.getElementById(`cell-${x}-${y}`))
}

function cellClicked(x, y) {
    let cellId = `cell-${x}-${y}`;
    let cell = document.getElementById(cellId);
    lastActiveCell.push(cell);
    if(cell.hasChildNodes()===false && result===""){
        let playerSymbol = document.createElement("div");
        playerSymbol.innerText = activePlayer;
        activeCellSymbol.push(playerSymbol);
        playerSymbol.classList.add("player-symbol");
        cell.append(playerSymbol);
        count++;
    } else if (result !==""){
        gameEnd(result);
    } else {
        alert("Please click an empty box.");
        activePlayer = activePlayer === "X" ? "O" : "X";
    }    
    let rowFirstElementSymbol = getPlayerSymbolByCoortnate(x, 0);
    let rowSecondElementSymbol = getPlayerSymbolByCoortnate(x, 1);
    let rowThirdElementSymbol = getPlayerSymbolByCoortnate(x, 2);
    let colFirstElementSymbol = getPlayerSymbolByCoortnate(0, y);
    let colSecondElementSymbol = getPlayerSymbolByCoortnate(1, y);
    let colThirdElementSymbol = getPlayerSymbolByCoortnate(2, y);
    let diagnalFirstElementSymbol, diagnalSecondElementSymbol, diagnalThirdElementSymbol;
    if ((x + y) === 2) {
        diagnalFirstElementSymbol = getPlayerSymbolByCoortnate(2, 0);
        diagnalSecondElementSymbol = getPlayerSymbolByCoortnate(1, 1);
        diagnalThirdElementSymbol = getPlayerSymbolByCoortnate(0, 2);
    }
    let negativeDiagnalFirstSymbol, negativeDiagnalSecondSymbol, negativeDiagnalThirdSymbol;
    if (x === y) {
        negativeDiagnalFirstSymbol = getPlayerSymbolByCoortnate(0, 0);
        negativeDiagnalSecondSymbol = getPlayerSymbolByCoortnate(1, 1);
        negativeDiagnalThirdSymbol = getPlayerSymbolByCoortnate(2, 2);
    }
    if(count>=5 && result===""){
        if (
        (negativeDiagnalFirstSymbol === activePlayer && negativeDiagnalSecondSymbol === activePlayer && negativeDiagnalThirdSymbol === activePlayer) ||
        (diagnalFirstElementSymbol === activePlayer && diagnalSecondElementSymbol === activePlayer && diagnalThirdElementSymbol === activePlayer) ||
        (colFirstElementSymbol === activePlayer && colSecondElementSymbol === activePlayer && colThirdElementSymbol === activePlayer) ||
        (rowFirstElementSymbol === activePlayer && rowSecondElementSymbol === activePlayer && rowThirdElementSymbol === activePlayer)) {
        result=`${activePlayer} won!`;
        gameEnd(result);
        }
    }
    if (count === 9 && result ==="") {
        result= "Match drawn.";
        gameEnd(result);
    }
    activePlayer = activePlayer === "X" ? "O" : "X";
}

function gameEnd(res){
    if(window.confirm(`${res} Do you want to play again?`)==true){
        clearCell();        
        count=0;
        activePlayer="O";
        result = "";
        return alert("Lets Play!");
    }
}

function clearCell(){
    let deleteCell = document.querySelectorAll('.player-symbol');
    deleteCell.forEach((i)=>i.remove());
}

function undo(){
    if(result !== ""){
        gameEnd(result);
        activePlayer = activePlayer === "X" ? "O" : "X";
    } else if(lastActiveCell == false){
        alert("No entries to undo");
    } else {
        lastActiveCell[lastActiveCell.length-1].removeChild(activeCellSymbol[activeCellSymbol.length-1]);
        lastActiveCell.pop();
        activeCellSymbol.pop();
        activePlayer = activePlayer === "X" ? "O" : "X";
        count--;
    }
}
    