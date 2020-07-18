{
    function playGame(playerInput) {
        clearMessages()

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
        let playerMove = getMoveName(playerInput);

        displayResult(playerMove, computerMove);
    }

    const paper = document.getElementById('paper');
    const rock = document.getElementById('rock');
    const scissors = document.getElementById('scissors');

    paper.addEventListener("click", function () {
        playGame(1);
    });

    rock.addEventListener("click", function () {
        playGame(2);
    });

    scissors.addEventListener("click", function () {
        playGame(3);
    });

}