const listaInvitati = ['mario', 'gino', 'pino', 'maria','sara']

let nomeUtente = prompt('inserisci il tuo nome')
let esito;

for (let i=0; i< listaInvitati.length ; i++){
    if(nomeUtente == listaInvitati[i]){
        esito = 'PUOI ENTRARE'
        console.log(esito)
    }
}