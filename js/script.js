const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
let playerWin = 0,
    computerWin = 0;
/**
 * This function gets form user variable as argument & returns value 'rock', 'scissors' or 'paper', when users types wrong value she returs value 'stone'
 */
function getMoveName(argMoveId) {
    let randomNumber;
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyczki';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
}

/**
 *  This function is to check who will win, she takes two arguments. Value which was choosen by user and value that was drawn by Math.random
 */
function displayResult(argPlayerMove, argComputerMove) {
    let playerMove, computerMove;
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove === 'papier' && argComputerMove === 'kamień') {
        printMessage('Wygrywasz!');
        playerWin++;
    } else if (argPlayerMove === 'nożyczki' && argComputerMove === 'papier') {
        printMessage('Wygrywasz!');
        playerWin++;
    } else if (argPlayerMove === 'kamień' && argComputerMove === 'nożyczki') {
        printMessage('Wygrywasz!');
        playerWin++;
    } else if (argPlayerMove === argComputerMove) {
        printMessage('Remis');
    } else {
        printMessage('Przegrywasz :(');
        computerWin++;
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

function buttonClicked(argButtonName) {
    clearMessages();
    clearResult();
    console.log(argButtonName + ' został kliknięty');

    playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
    printResult(playerWin + " - " + computerWin);
}

buttonRock.addEventListener('click', function () {
    buttonClicked('kamień')
});

buttonPaper.addEventListener('click', function () {
    buttonClicked('papier')
});

buttonScissors.addEventListener('click', function () {
    buttonClicked('nożyczki')
});