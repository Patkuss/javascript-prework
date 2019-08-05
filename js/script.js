// functions

function getMoveName(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        } else if(argMoveId == 2){
                return 'papier';
        } else if(argMoveId == 3){
                return 'nożyce';
        } else {
                printMessage('Nie znam ruchu o id ' + argMoveId + '.')
                return 'nieznany ruch';
        }
}
function displayResult(argComputerMove, argPlayerMove){
        if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
                printMessage('Ja wybrałem ' + argComputerMove + ', Ty ' + argPlayerMove + '. Wygrywasz!');
        } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
                printMessage('Ja wybrałem ' + argComputerMove + ', Ty ' + argPlayerMove + '. Przegrywasz!');
        } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
                printMessage('Ja wybrałem ' + argComputerMove + ', Ty ' + argPlayerMove + '. Wygrywasz!');
        } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
                printMessage('Ja wybrałem ' + argComputerMove + ', Ty ' + argPlayerMove + '. Przegrywasz!');
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
                printMessage('Ja wybrałem ' + argComputerMove + ', Ty ' + argPlayerMove + '. Wygrywasz!');
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
                printMessage('Ja wybrałem ' + argComputerMove + ', Ty ' + argPlayerMove + '. Przegrywasz!');
        } else if(argComputerMove == argPlayerMove){
                printMessage('Ja wybrałem ' + argComputerMove + ', Ty ' + argPlayerMove + '. Remis!');
        } else {
                printMessage('Serio? To było takie trudne?');
        }
}

// computer move

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

// player move

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

// score

let gameScore = displayResult(argComputerMove, argPlayerMove)