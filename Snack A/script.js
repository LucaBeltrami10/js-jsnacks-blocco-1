/* creo array vuoto per numeri dispari */
const oddNumber = [];

/* creo numero di richieste X da fare all'utente */
const numberOfRequest = 6

/* creo ciclo in cui viene richiesto X volte all'utente di inserire un numero */
for (let i=1; i<=6; i++){
    let requestNumber = prompt('inserisci un numero da 1 a 100')
    /* creo condizione in cui inserisco in array il numero se è dispari */
    if (requestNumber % 2 != 0){
        oddNumber.push(requestNumber)
    }
}
/* visualizzo in console i numeri dispari inseriti in lista */
console.log(oddNumber)