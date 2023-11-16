let firstWord = prompt('inserisci la prima parola')
console.log(firstWord)

let secondWord = prompt('inserisci la seconda parola')
console.log(secondWord)

let charactersFirstWord = firstWord.length
console.log(charactersFirstWord)

let charactersSecondWord = secondWord.length
console.log(charactersSecondWord)

if(charactersFirstWord > charactersSecondWord){
    console.log('la prima parola è la più lunga')
}else if (charactersFirstWord < charactersSecondWord){
    console.log('la seconda parola è la più lunga')
}else (charactersFirstWord == charactersSecondWord){
    console.log('le parole sono lunghe uguali')
}
