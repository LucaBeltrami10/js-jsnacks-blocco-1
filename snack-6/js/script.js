const listaInvitati = ['mario', 'gino', 'pino', 'maria','sara']

let nomeUtente = prompt('inserisci il tuo nome')
let esito = false

for (let i=0; i< listaInvitati.length ; i++){
    if(nomeUtente == listaInvitati[i]){
        esito = true
        console.log(esito)
    }
}

if(esito == true){
    console.log('puoi entrare')
} else{
    console.log('non puoi entrare')
}