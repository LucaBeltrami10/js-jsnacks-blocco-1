/* creo array vuoto per numeri dispari */
const oddNumber = [];

/* creo numero di richieste da fare all'utente */
const numberOfRequest = 6

/* creo ciclo in cui viene richiesto X volte all'utente di inserire un numero */
for (let i=1; i<=6; i++){
    let requestNumber = prompt('inserisci un numero da 1 a 100')
    if (requestNumber % 2 != 0){
        oddNumber.push(requestNumber)
    }
}
    /* comparo il numero inserito. se è dispari lo inserisco in lista sennò vado avanti*/