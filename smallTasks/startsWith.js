let quote = "life is full of surprises";
let finalQuote = "";

function startsWith(str, qposition) {
    if (qposition > 0) {
        let quotePart = pos(qposition);
        for (let i = 0; i < str.length; i++) {
            if (str[i] === quotePart[i]) {
                finalQuote += quotePart[i];
            }
        }
        console.log(finalQuote);
    } else {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === quote[i]) {
                finalQuote += quote[i];
            }
        }
        console.log(finalQuote);
    }
}

startsWith("surprises", 17);

function pos(qnumb) {
    let quotePosition = "";
    for (let p = qnumb; p <= quote.length; p++) {
        quotePosition += quote[p - 1];
    }
    return quotePosition;
}