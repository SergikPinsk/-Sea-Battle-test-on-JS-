
var location1 = 6; // Локация корабля
var location2 = 4; // Локация корабля
var location3 = 5; // Локация корабля
var guess; // Переменная для номера текущей поытки 
var hits = 0; // Переменная для количества попаданий  
var guesses = 0; // Переменная для количества попыток 
var isSunk = false; // Присвоить ей информацию потоплен ли корабль 
while (isSunk == false) {
    guess = prompt('Ready, aim , fire!(enter a number 0-6):');
    if (guess < 0 || guess > 6) {
        alert('Sorry, you entered the wrong number, you need from 0-6');
    }
        else {
           guesses = guesses + 1;
        }
            if (guess == location1 || guess == location2 || guess == location3) {
                alert('Ranil');
                hits = hits + 1;
            }
    if (hits == 3) {
        isSunk = true;
        alert('Handsome you won ');
    }  else {
        alert('Netushki have not yet won');
    }
 }
 
