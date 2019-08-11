{
const playGame = function (playerInput) {
    clearMessages();
    const getMoveName = function (argMoveId) {
        if (argMoveId === 1) {
            return 'kamień';
        } else if (argMoveId === 2) {
            return 'papier';
        } else if (argMoveId === 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }
    const displayResult = function (argComputerMove, argPlayerMove) {
        if ((argComputerMove === 'kamień' && argPlayerMove === 'papier') || (argComputerMove === 'papier' && argPlayerMove === 'nożyce') || (argComputerMove === 'nożyce' && argPlayerMove === 'kamień')) {
            printMessage('Ja wybrałem ' + argComputerMove + ', Ty ' + argPlayerMove + '. Wygrywasz!');
        } else if ((argComputerMove === 'kamień' && argPlayerMove === 'nożyce') || (argComputerMove === 'papier' && argPlayerMove === 'kamień') || 'Ja wybrałem ' + (argComputerMove + ', Ty ' + argPlayerMove + '. Przegrywasz!')) {
            printMessage('Ja wybrałem ' + argComputerMove + ', Ty ' + argPlayerMove + '. Przegrywasz!');
        } else (argComputerMove === argPlayerMove) {
            printMessage('Ja wybrałem ' + argComputerMove + ', Ty ' + argPlayerMove + '. Remis!');
        }
    }
    const randomNumber = Math.floor(Math.random() * 3 + 1);
        argComputerMove = getMoveName(randomNumber);
        argPlayerMove = getMoveName(playerInput);
        displayResult(argComputerMove, argPlayerMove);
}
document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);
});
}