// salvo in una variabile globale la funzione createApp dall'istanza di Vue
const { createApp } = Vue;

// utilizzo la funzione creatApp
createApp({
    // definisco il data con in suo return
    data() {
        // all'interno del return definisco la variabile di cui ho bisogno
        return {
           ciao : '<h1>Ciao VueJS!</h1>' 
        }
    }
}).mount('#esercizio') //collego createApp con l'elemento del DOM predisposto al funzionamento dell'applicazione Vue