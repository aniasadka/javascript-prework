function playGame() {




    function getMoveName(move) {
        if (move == 1) {
            return 'kamień';
        } else if (move == 2) {
            return 'papier';
        } else if (move == 3) {
            return 'nożyce';
        } else {
            return 'Nieznany ruch';
        }

    }


    function displayResult(argPlayerMove, argComputerMove) {
        if (argPlayerMove == argComputerMove) {
            printMessage('Remis');
        } else if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
            printMessage('Wygrywasz!');
        } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
            printMessage('Wygrywasz!');
        } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
            printMessage('Wygrywasz!');
        } else {
            printMessage('Przegrywasz :(');
        }

        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    let playerMove = getMoveName(playerInput);

    displayResult(playerMove, computerMove);

    paper.addEventListener("click", playGame);


    rock.addEventListener("click", playGame);


    scissors.addEventListener("click", playGame);






}