/* chiedo all'utente i due numeri */
let smallerNum = parseInt(prompt('inserisci un numero composto da 2 numeri'))
const largerNum = parseInt(prompt('inserisci un numero composto da 4 numeri'))

/* mostro in console i inumeri inseriti */

console.log(smallerNum)
console.log(largerNum)



/* const listaNumeriMaggiori = [] */

/* if(smallerNum <= largerNum){
    smallerNum *= 2
}else if(smallerNum > largerNum){
    console.log(smallerNum)
} */

/* ciclo che moltiplica ogni volta x 2 il numero minore e lo va a sostituire al numero minore fuori dal ciclo */
/* condizione: è il numero minore (dal primo cilo: moltiplicato x 2) ancora minore? ripeto il ciclo */

/* for (i=0; i<100; i++ ){
    if(inputPrint == false){
        smallerNum *= 2
    }else{
        listaNumeriMaggiori.push(inputPrint)
    }
}

console.log(listaNumeriMaggiori[0])
console.log(listaNumeriMaggiori) */

    
/* condizione: è maggiore? mostro il numero in console*/

/* creo un numero di ciclo.
creo un ciclo con (let i, i<numerodicilo; i++1)
creo una condizione all'interno del cilo in cui aumento il numero di ciclo se una condizione non è soddisfatta
 */


inputPrint = smallerNum > largerNum

let numeroDiCicli = 1

for (i=0; i<numeroDiCicli; i++){

    if (smallerNum < largerNum){
        numeroDiCicli += 1
        smallerNum *= 2
    } else if(largerNum < smallerNum){
        console.log(`moltiplicando il numero minore per 2, il primo numero che soddisfa la condizione numerominore > numero maggiore è: ${smallerNum}`)
        numeroDiCicli = 1
    }
}
    

/* commento di risoluzione bug ciclo infinito. è necessario inserire nella condizione true (o larg < min) numero di cicli = 1 così da fermare il ciclo.*/