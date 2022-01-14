/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//1 - ricevere una parola dall' utente
//2- ricavare la parola scritta al contrario
//3- confrontare le due
//

//1

//* 1.1 creare html

//1.2 individuare l' elemento della pagina che svolge l' azione

const button = document.getElementById('palindrome-check');

//1.3

button.addEventListener('click', function() {
    const userWord = document.getElementById('word').value;
    console.log(userWord);
    console.log(reverseWord(userWord));

})





//funzione reverseWord
function reverseWord (word) {
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word.charAt(i);
    }
    return reverseWord;
}

function isPalindrome () {

}
