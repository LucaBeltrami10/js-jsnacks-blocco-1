/* chiedo all'utente i due numeri */
let smallerNum = parseInt(prompt('inserisci un numero composto da 2 numeri'))
const largerNum = parseInt(prompt('inserisci un numero composto da 4 numeri'))

/* mostro in console i inumeri inseriti */

console.log(smallerNum)
console.log(largerNum)

inputPrint = smallerNum > largerNum

const listaNumeriMaggiori = []

/* if(smallerNum <= largerNum){
    smallerNum *= 2
}else if(smallerNum > largerNum){
    console.log(smallerNum)
} */

/* ciclo che moltiplica ogni volta x 2 il numero minore e lo va a sostituire al numero minore fuori dal ciclo */
/* condizione: è il numero minore (dal primo cilo: moltiplicato x 2) ancora minore? ripeto il ciclo */

for (i=0; i<100; i++ ){
    if(inputPrint == false){
        smallerNum *= 2
    }else{
        listaNumeriMaggiori.push(inputPrint)
    }
}

console.log(listaNumeriMaggiori[0])
console.log(listaNumeriMaggiori)

    
/* condizione: è maggiore? mostro il numero in console*/
    