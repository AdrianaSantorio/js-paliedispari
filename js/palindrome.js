/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//1 - ricevere una parola dall' utente
    //1.1 creare html
    //1.2 individuare l' elemento della pagina a cui collegare la funzione
    //1.3 
//2- ricavare la parola scritta al contrario
//3- confrontare le due
//

//1

//* 1.1 creare html

//1.2 individuare l' elemento della pagina che svolge l' azione

const button = document.getElementById('palindrome-check');
const resultElement = document.getElementById('result');
const comparisonElement = document.getElementById('comparison');
let sign = '';

//1.3

button.addEventListener('click', function() {
    const userWord = (document.getElementById('word').value).toLowerCase();
    
    console.log(userWord);
    console.log(reverseWord(userWord));
    console.log(isPalindrome(userWord));
    if (isPalindrome(userWord)) {
        resultElement.innerText = 'La tua parola è palindroma!';
        sign = '='
        comparisonElement.style.color = 'green';
    } else {
        resultElement.innerText = 'La tua parola non è palindroma!';
        sign = '&ne;';
        comparisonElement.style.color = 'red';
    }
    comparisonElement.innerHTML = `${userWord} ${sign} ${reverseWord(userWord)}`;

})




//funzione reverseWord
function reverseWord (word) {
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word.charAt(i);
    }
    return reverseWord;
}

//funzione is palindrome
function isPalindrome (word) {
    if (word === reverseWord(word)) {
        return true;
    }
    else {
        return false;
    }
}
