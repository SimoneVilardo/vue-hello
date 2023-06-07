PROBLEMA:Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

BONUS PROBLEMA:Aggiungere alla pagina un’immagine, presa anch’essa da un data.

SOLUZIONE:
1.creo un div nel DOM a cui do un id;
    1.1all'interno del div precedente creo un altro div a cui darò la direttiva v-html per inserire in js il contenuto 
    1.2 BONUS (nello stesso div aggiungo un img a cui darò v-bind per inserire in js il contenuto ) 

2.in js salvo in una variabile globale la funzione createApp dall'istanza di Vue
    2.1 utilizzo la funzione creatApp
    2.2 collego createApp con l'elemento del DOM predisposto al funzionamento dell'applicazione Vue
    2.3 definisco il data con in suo return
    2.4 all'interno del return definisco le variabili di cui ho bisogno