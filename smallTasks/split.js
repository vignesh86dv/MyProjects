let quote = "life is full of surprises";
let quoteArr=[];
function split(str){
    if(str === ""){
        quoteArr.push(quote);
        console.log(quoteArr); 
    } else if(str === " "){
        let addWord = "";
        for(let i=0;i<quote.length;i++){
            if(quote[i]===" "){
                quoteArr.push(addWord);
                addWord="";
            } else {
                addWord += quote[i];
            }
        }
        quoteArr.push(addWord);
        console.log(quoteArr);
    } else {
        wordStr(str);   
    console.log(quoteArr);
    } 
}

split("l");

function wordStr(ltr){
    let addWord = "";
    for(i=0;i<quote.length;i++){
        if(ltr===quote[i]){
            quoteArr.push(addWord);
            addWord="";
        }else {
            addWord += quote[i];
        }
    }
    quoteArr.push(addWord);
}
