
const numeriUtili = []

console.log(`numeri utili a inizio esercizio (teoricamente nessuno): ${numeriUtili}`)

for (let i=0; i<100; i++){
    /* console.log(i) */

    if(i%7 == 0 || i%8 == 0){
        numeriUtili.push(i)
    }
}

console.log(`numeri utili a fine esercizio: ${numeriUtili}`)