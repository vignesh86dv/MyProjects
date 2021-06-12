let quote = "life is full of surprises";
let finalQuote="";
let qLength = quote.length-1;
function slice(start,end){
    if(start && end > 0){
        for(let i=start;i<end;i++){
            finalQuote += quote[i];
        }
        console.log(finalQuote);
    }else if (start > 0){
        for(i=qLength;i>=start;i--){
        finalQuote = quote[i] + finalQuote;
        qLength--;
        }
        console.log(finalQuote);
    }else if(start && end <0){
        for(i=start;i<end;i++){
        finalQuote = finalQuote + quote[quote.length+i];
        }    
        console.log(finalQuote);
    }else if(start < 0){
        for(i=start;i<0;i++){
        finalQuote = quote[qLength] + finalQuote;
        qLength--;
        }
        console.log(finalQuote);
    }
}
slice(-9,-1);

