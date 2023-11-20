const titolo = document.querySelector('h1')
const bottone = document.querySelector('button')

/* aggiungo alla variabile somma il numero randomico */
const firstNumber = parseInt(Math.floor(Math.random()* 10) + 1) 

let somma = firstNumber

/* aggiungo il valore somma all'h1 in pagina */

titolo.innerHTML = somma

/* aggiungo listener su button che aggiunge la variabile somma aggiornata */

bottone.addEventListener('click', function(){
    somma = somma + 3
    titolo.innerHTML = somma
})
