let cells = document.querySelectorAll(".cells");
let clickedCells = [];
let clickCount = 0;
cells.forEach( eachCell => {
    eachCell.classList.add("unClicked");
    eachCell.addEventListener("click", function showPic(){
        if(eachCell.classList.contains("unClicked")){
            let rowId = eachCell.parentElement.id;
            let cellId = "#" + eachCell.id;
            let activeCell = document.getElementById(rowId).querySelector(cellId);
            clickedCells.push(activeCell);
            activeCell.children[0].style.opacity="1";
            activeCell.classList.replace("unClicked","clicked");
            clickCount++;
            if(clickCount%2===0){
                let firstCellImg = clickedCells[clickCount-1].children[0].getAttribute("alt");
                let secondCellImg = clickedCells[clickCount-2].children[0].getAttribute("alt");
                if(firstCellImg===secondCellImg){
                    clickedCells[clickCount-1].children[0].style.opacity="1";
                    clickedCells[clickCount-2].children[0].style.opacity="1";
                } else{
                    setTimeout(imageFade,750);
                }
            }       
            if((clickCount===25) && (activeCell.children[0].getAttribute("alt")==="winner")){
                document.getElementById("imageBox").children[2].children[3].style.opacity==="1";
            } else{
                document.getElementById("imageBox").children[2].children[3].style.opacity==="0";
            }
        }
    });
});

function imageFade(){
    clickedCells[clickCount-1].children[0].style.opacity="0";
    clickedCells[clickCount-1].children[0].style.transition = "0.75s";
    clickedCells[clickCount-2].children[0].style.opacity="0";
    clickedCells[clickCount-2].children[0].style.transition = "0.75s";
    clickedCells[clickCount-1].classList.replace("clicked","unClicked");
    clickedCells[clickCount-2].classList.replace("clicked","unClicked");
    clickedCells.pop();
    clickedCells.pop();
    clickCount -= 2;
}

function resetCells(){
    clickedCells.forEach(openPic => {
        openPic.children[0].style.opacity = "0";
        openPic.classList.replace("clicked","unClicked");
    });
    timeOut.textContent = "Ends in: 60s";
}

function timer(){
    document.body.removeAttribute("onload");
    let i = 60;
    let timerId = setInterval(() => {
        if(i<=0){
            resetCells();
            clearInterval(timerId);
            timer();
        } else {
            timeOut.textContent = "Ends in: "+i+"s";
            i--;
        }
    }, 1000);
}


// let cells = document.querySelectorAll(".cells");
// let clickedCells = [];
// let clickCount = 0;
// cells.forEach( eachCell => {
//     eachCell.classList.add("unClicked");
//     eachCell.addEventListener("click", function showPic(){
//         if(eachCell.classList.contains("unClicked")){
//             let rowId = eachCell.parentElement.id;
//             let cellId = "#" + eachCell.id;
//             let activeCell = document.getElementById(rowId).querySelector(cellId);
//             clickedCells.push(activeCell);
//             activeCell.children[0].style.opacity="1";
//             activeCell.classList.replace("unClicked","clicked");
//             clickCount++;
//             if(clickCount%2===0){
//                 let firstCellImg = clickedCells[clickCount-1].children[0].getAttribute("alt");
//                 let secondCellImg = clickedCells[clickCount-2].children[0].getAttribute("alt");
//                 if(firstCellImg===secondCellImg){
//                     clickedCells[clickCount-1].children[0].style.opacity="1";
//                     clickedCells[clickCount-2].children[0].style.opacity="1";
//                 } else{
//                     clickedCells[clickCount-1].children[0].style.opacity="0";
//                     clickedCells[clickCount-2].children[0].style.opacity="0";
//                     clickedCells[clickCount-2].children[0].style.transition = "1s";
//                     clickedCells[clickCount-1].classList.replace("clicked","unClicked");
//                     clickedCells[clickCount-2].classList.replace("clicked","unClicked");
//                     clickedCells.pop();
//                     clickedCells.pop();
//                     clickCount -= 2;
//                 }
//             }
//             if((clickCount===25) && (activeCell.children[0].getAttribute("alt")==="winner")){
//                 document.getElementById("imageBox").children[2].children[3].style.opacity==="1";
//             } else{
//                 document.getElementById("imageBox").children[2].children[3].style.opacity==="0";
//             }
//         }
//     });
// });



// for creating image box:
// let imageBox = document.getElementById("imageBox");

// function creator() {
//     for (let i = 1; i <= 5; i++) {
//         let rowDiv = document.createElement("div");
//         rowDiv.id = "R" + i;
//         rowDiv.classList.add("rows");
//         for (let j = 1; j <= 5; j++) {
//             let cellBox = document.createElement("div");
//             cellBox.id = "C" + j;
//             cellBox.classList.add("cells");
//             rowDiv.appendChild(cellBox);
//         }
//         imageBox.appendChild(rowDiv);
//     }
// }