const listaInvitati = ['mario', 'gino', 'pino', 'maria','sara']

let nomeUtente = prompt('inserisci il tuo nome')

for (let=0; i < listaInvitati.length ; i++){
    if(nomeUtente == listaInvitati[i]){
        console.log('PUOI ENTRARE!')
    } else{
        console.log('ON PUOI ENTRARE')
    }
}