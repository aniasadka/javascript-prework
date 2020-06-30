
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}

if(randomNumber == 2){
    computerMove = 'papier';
}

if(randomNumber == 3){
    computerMove = 'nozyce';
}

printMessage('Mój ruch to: ' + computerMove);




let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

if(playerInput == '2') {
    playerMove = 'papier';
}

if(playerInput == '3') {
    playerMove = 'nozyce';
}

printMessage('Twój ruch to: ' + playerMove);




if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }

else( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('przegrywasz!');
  }

else( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Jest remis!');
  }


else( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Ty przegrywasz!');
}

else( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
}

else( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Jest remis!');
}


if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ty przegrywasz!');
}

if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
}

if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Jest remis!');
}