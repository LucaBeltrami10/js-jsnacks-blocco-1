const ageA = parseInt(prompt("Inserisci gli anni della persona A"))
const ageB = parseInt(prompt("Inserisci gli anni della persona B"))


if( ageA > ageB){

    console.log(ageA);
} 
else if (ageB > ageA){

    console.log(ageB);
}
else{

    console.log("le età sono uguali");
}

let newVarible = 12.1234

console.log( `la variabile numerica è: ${newVarible}`)



document.getElementById('final-price').innerHTML = `${parseFloat(travelPrice).toFixed(2)}€`


