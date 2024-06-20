const status = document.querySelector('.containerPlayerSelection');
const bluePlayer = document.querySelector('.bluePlayer');
const redPlayer = document.querySelector('.redPlayer');
const containerBoard = document.querySelector('.containerBoard');
const theTurn = document.querySelector('.showingTheQueue');
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
});

redPlayer.addEventListener('click', () => {
    bluePlayerSelected = false;
    redPlayerSelected = true;
    containerPlayerSelection();
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

function containerPlayerSelection() {
    if (redPlayerSelected === null || bluePlayerSelected === null) {
    } else if (bluePlayerSelected === true) {
        status.innerText = "Blue player selected.";
        containerBoard.style.display = "block";
    } else if (redPlayerSelected === true) {
        status.innerText = "Red player selected.";
        containerBoard.style.display = "block";
    }
}


function startCountdown() {
    countdownInterval = setInterval(() => {
        if (countdownValue >= 0) {
            timer.textContent = countdownValue;
            countdownValue--;
        } else if (countdownValue) {
            clearInterval(countdownInterval);
            timer.textContent = `Time's up`;
            timerRunning = false;
        }
    }, 1000);
}



function initializeBoard() {
    const ICQBoard = [
        ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
        ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', ' ', '.', ' ', '.', ' ', '.', ' '],
        [' ', '.', ' ', '.', ' ', '.', ' ', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'],
        ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'],
    ];

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
    currentTurn = currentTurn === 'red' ? 'blue' : 'red';
    theTurn.textContent = `Current turn: ${currentTurn}`;
}

