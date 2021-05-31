//Array vuoto lista email
var listEmail = [];
var numberGuest = 20;
/*
* creiamo in maniera randomizzata gli indirizzi email
*/
var alphabet = 'abcdefghilmnopqrstuvz0123456789';

//console.log(alphabet.length);

//cicliamo l'alfabeto e inseriamoli all'interno dell'array listEmail vuoto
for(var i = 0; i < numberGuest; i++){
    var email = '';
    var suffix = '@gmail.com';
    //ciclo per creare le email a random
    for(var j = 0; j < 10; j++){
        var numRandom = Math.floor(Math.random() * alphabet.length);
        //console.log(numRandom);
        email += alphabet[numRandom];
    }
    //inseriamo le email generate all'interno dell'array
    //console.log(email + suffix);
    listEmail.push(email + suffix);
}

console.log(listEmail);

//Chiediamo all'utente la sua email
var emailUser = prompt('Inserisci la tua email per vedere se sei sulla lista PROVA EMAIL CORRETTA ' + listEmail[0]);
var message = 'La tua email non è presente sulla lista';

console.log(emailUser);

/*
* Controlliamo se l'email fornita risulta sulla lista array
*/

//Prima soluzione con ciclo for utilizzando la proprietà length
for(var i = 0; i < listEmail.length; i++){
    if(listEmail[i] === emailUser){
        message = `la tua email ${emailUser} è presente sulla lista, congratulazioni!`
    }
}


//Seconda soluzione con ciclo for senza uilizzare la proprietà length
/*
for(var i = 0; listEmail[i]; i++){
    if(listEmail[i] === emailUser){
        message = `la tua email ${emailUser} è presente sulla lista, congratulazioni!`
    }
}
*/

//Terza soluzione con ciclo while utilizzando la proprietà length con una condizione
/*
var i = 0;
while(i < listEmail.length){
    if(listEmail[i] === emailUser){
        message = `la tua email ${emailUser} è presente sulla lista, congratulazioni!`
    }

    i++;
}
*/


//Quarta soluzione con ciclo while senza utilizzare la proprietà length con una condizione
/*
var i = 0;
while(listEmail[i]){
    if(listEmail[i] === emailUser){
        message = `la tua email ${emailUser} è presente sulla lista, congratulazioni!`
    }

    i++;
}
*/


//Mostriamo il messaggio del controllo
console.log(message);
alert(message)