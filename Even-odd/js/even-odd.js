/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/
const resultElement = document.getElementById('result');
const buttonElement = document.getElementById('play-now');

buttonElement.addEventListener('click',function(){
    const userChoice = parseInt(document.querySelector('input[name="e-o"]:checked').value);
    console.log('user choice', userChoice);
    const userNumber = parseInt(document.getElementById('user-number').value);
    console.log('user number', userNumber);    

    //todo: aggiungere validazione
    
    const cpuNumber = generateRnd(1, 5);
    console.log('cpu number', cpuNumber);
    const sum = cpuNumber + userNumber;
    console.log('somma', sum);
    let message;

    const result = evenOrOdd(sum);
    console.log(result);

    if (userChoice === result) {
        message = 'HAI VINTO!';
    } else {
        message = 'IL COMPUTER HA VINTO';
    }
    
    resultElement.innerText = message;

})

//FUNZIONI
function generateRnd(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;

}

function evenOrOdd(number) {
    return (number % 2); 
}