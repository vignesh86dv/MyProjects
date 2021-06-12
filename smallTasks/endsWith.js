let quote = "life is full of surprises";
let finalQuote = "";

function endsWith(str,qposition){
    if (qposition > 0){
        let quotePart = pos(qposition);
        let qLength = quotePart.length-1;
        for(let i = str.length;i>0;i--){
            if(str[i-1] === quotePart[qLength]){
                finalQuote = quotePart[qLength]+finalQuote;
                qLength--;
            }
        }
        console.log(finalQuote);
    }
    else{
        let qLength = quote.length-1;
        for (let i = str.length; i > 0; i--) {
            if (str[i-1] === quote[qLength]) {
                finalQuote = quote[qLength] + finalQuote;
                qLength --;
            }
        }
        console.log(finalQuote);
    }
}
endsWith("full",12);

function pos(qnumb) {
    let quotePosition="";
    for (let p = qnumb; p > 0; p--) {
        quotePosition = quote[p - 1] + quotePosition;
    }
    return quotePosition;
}
