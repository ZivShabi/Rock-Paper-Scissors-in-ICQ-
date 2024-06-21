const status = document.querySelector('.containerPlayerSelection');
const bluePlayer = document.querySelector('.bluePlayer');
const redPlayer = document.querySelector('.redPlayer');
const containerBoard = document.querySelector('.containerBoard');
const theTurn = document.querySelector('.turn');
const timer = document.querySelector('.theQueueTimer');
const board = document.querySelector('.board');
let countdownInterval;
let countdownValue = 10;
let currentTurn = null;
let timerRunning = null;
let bluePlayerSelected = null;
let redPlayerSelected = null;


bluePlayer.addEventListener('click', () => {
    bluePlayerSelected = true;
    redPlayerSelected = false;
    containerPlayerSelection();
    playerColor()

});

redPlayer.addEventListener('click', () => {
    bluePlayerSelected = false;
    redPlayerSelected = true;
    containerPlayerSelection();
    playerColor()

});

timer.addEventListener('click', () => {
    if (timerRunning == null) {
        timerRunning = true;
        startCountdown();
    }
})

board.addEventListener('click', () => {
    initializeBoard();
});
theTurn.addEventListener('click', () => {
    changeTurn();
})

function containerPlayerSelection() {
    if (redPlayerSelected === null || bluePlayerSelected === null) {
        status.innerText = "";
    } else if (bluePlayerSelected === true) {
        status.innerText = "Blue player selected.";
        containerBoard.style.display = "block";
        currentTurn = 'blue';
    } else if (redPlayerSelected === true) {
        status.innerText = "Red player selected.";
        containerBoard.style.display = "block";
        currentTurn = 'red';
    }
    // theTurn.textContent = `Current turn: ${currentTurn}`;

}

function startCountdown() {
    countdownValue = 10;
    timer.textContent = countdownValue;
    countdownInterval = setInterval(() => {
        if (countdownValue > 0) {
            countdownValue--;
            timer.textContent = countdownValue;
        } else {
            clearInterval(countdownInterval);
            timer.textContent = `Time's up`;
            timerRunning = false;
            changeTurn();
            startCountdown();
        }
    }, 1000);
}



function initializeBoard() {
    const ICQBoard = [
        ['B', 'B', 'B', 'B', 'B', 'B', 'B',],
        ['B', 'B', 'B', 'B', 'B', 'B', 'B',],
        ['.', '.', '.', '.', '.', '.', '.',],
        ['.', '.', '.', '.', '.', '.', '.',],
        ['R', 'R', 'R', 'R', 'R', 'R', 'R',],
        ['R', 'R', 'R', 'R', 'R', 'R', 'R',],
    ];
    board.innerHTML = '';
    ICQBoard.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const div = document.createElement('div');
            div.classList.add('cell');
            if ((rowIndex + colIndex) % 2 === 0) {
                div.classList.add('blue');
            } else {
                div.classList.add('red');
            } if (cell !== '.' && cell !== ' ') {
                div.textContent = cell;
            } board.appendChild(div);
        });
    });
}

function changeTurn() {
    clearInterval(countdownInterval);
    timerRunning = false;
    currentTurn = currentTurn === 'red' ? 'blue' : 'red';
    theTurn.textContent = `Current turn: ${currentTurn}`;
    startCountdown();
}
function playerColor() {
    selectedColor = bluePlayerSelected ? 'Blue Player Selected' : 'Red Player Selected';
    selectedColor = redPlayerSelectedPlayerSelected ? 'Red Player Selected' : 'Blue Player Selected';
    console.log(selectedColor);

}
