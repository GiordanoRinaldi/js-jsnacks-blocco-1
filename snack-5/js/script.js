//Crea un array vuoto. 

var numeridispari = [];

//Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

for (var i = 0; i < 5; i++ ) {
    var numero = prompt("inserisci un numero")
    if (isNaN(numero)) {
        var numero = prompt ("INSERISCI UN C***O DI NUMERO")
    }

    if (!(numero%2 == 0)) {
        numeridispari.push(numero)
    }
}


console.log(numeridispari)