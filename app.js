//Prompt per inserire il nome e stamparlo dentro il titolo
let userName = prompt("Inserisci qui il tuo nome");

console.log(userName)

document.getElementById('userName').innerHTML = userName; 

//Prompt per inserire il cognome
let userSurname = prompt("Inserisci qui il tuo cognome");

console.log(userSurname)

//Prompt per inserire il colore preferito
let userPrefColor = prompt("Inserisci qui il tuo colore preferito");

console.log(userPrefColor)

let userGeneratedPassword = (userName) + (userSurname) + (userPrefColor) + "21";

document.getElementById('userNewPassword').innerHTML = userGeneratedPassword