/* richiedo all'utente un numero di 7 cifre */
let userNumber = prompt('inserisci numero a 7 cifre');
console.log(`il numero inserito è: ${userNumber}`);


let prova = userNumber[0]
console.log(prova)


/* creo una variabile in cui sommo l'elaborazione del ciclo qui sotto */
let sum;
let numToAdd

/* creo ciclo i (7 cicli) in cui */
for (let i=0; i<7; i++){
    /*variabile numDaSommare = userNumber[i]
    /* sommo  il singolo numero alla variabile somma*/
    numToAdd = parseInt(userNumber[i])
    console.log(`numero da sommare ${numToAdd}`)
    sum = sum + numToAdd

}

console.log(sum)

/* mostro in console il risultato */

