let quote = "life is full of surprises";
let finalQuote="";
function slice(start){

}

function slice(start,end){
    if(end>0){
        for(let i=start;i<end;i++){
            finalQuote += quote[i];
        }
        console.log(finalQuote);
    }else{
        let qLength = quote.length-1;
        for(i=qLength;i>=start;i--){
            finalQuote = quote[i] + finalQuote;
            qLength--;
        }
        console.log(finalQuote);
    }
}
slice(8,15);










