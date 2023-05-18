let gameBoard = Array(7).fill(null).map(() => Array(7).fill(null));
let currentPlayer = 'X'; // Player 1
let cards = ['swap', 'remove', 'add']; // Quantum cards
let currentPlayerCards = []; // The current player's hand
let waitForClick = (element) => {
    return new Promise((resolve) => {
      element.addEventListener('click', function onClick(event) {
        element.removeEventListener('click', onClick);
        resolve(event);
      });
    });
  };
  
  let getChipPosition = async () => {
    alert('Please click on a chip position.');
    let event = await waitForClick(document.getElementById('game-board'));
    let row = Math.floor(event.clientY / cellHeight);
    let column = Math.floor(event.clientX / cellWidth);
    return [row, column];
  };
  
  let askYesNo = async (question) => {
    alert(`${question} (Click on the board for Yes, outside for No)`);
    let event = await new Promise((resolve) => {
      window.addEventListener('click', function onClick(event) {
        window.removeEventListener('click', onClick);
        resolve(event);
      });
    });
    return event.target.id === 'game-board';
  };
function countInArray(array, value) {
  return array.reduce((n, x) => n + (x === value), 0);
}

function checkControl(array) {
  let player1 = countInArray(array, 'X');
  let player2 = countInArray(array, 'O');
  return player1 > player2 ? 'X' : player2 > player1 ? 'O' : null;
}

function drawBoard() {
  let boardElement = document.getElementById('game-board');
  boardElement.innerHTML = ''; // Clear the board
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      let cellElement = document.createElement('div');
      cellElement.textContent = gameBoard[i][j] || '';
      cellElement.addEventListener('click', () => {
        if (!gameBoard[i][j]) {
          gameBoard[i][j] = currentPlayer;
          drawBoard();
        }
      });
      boardElement.appendChild(cellElement);
    }
  }
  
  // Draw cards
  let cardsElement = document.getElementById('cards');
  cardsElement.innerHTML = ''; // Clear the cards
  currentPlayerCards.forEach((card, i) => {
    let cardElement = document.createElement('div');
    cardElement.textContent = card;
    cardElement.addEventListener('click', async () => {
        switch (card) {
            case 'swap':
              let [x1, y1] = await getChipPosition();
              let [x2, y2] = await getChipPosition();
              // Swap chips
              let temp = gameBoard[x1][y1];
              gameBoard[x1][y1] = gameBoard[x2][y2];
              gameBoard[x2][y2] = temp;
              break;
            case 'remove':
              let [x, y] = await getChipPosition();
              // Remove the chip
              gameBoard[x][y] = null;
              break;
            case 'add':
              let addExtraChip = await askYesNo("Would you like to add an extra chip?");
              if (addExtraChip) {
                let [newX, newY] = await getChipPosition();
                // Add an extra chip
                gameBoard[newX][newY] = currentPlayer;
              }
              break;
          }
      currentPlayerCards.splice(i, 1);
      drawBoard();
    });
    cardsElement.appendChild(cardElement);
  });
  
  // Check if the game is over
  if (gameBoard.every(row => row.every(cell => cell)) || cards.length === 0) {
    let player1Score = 0;
    let player2Score = 0;
    for (let i = 0; i < 7; i++) {
      let row = gameBoard[i];
      let column = gameBoard.map(row => row[i]);
      let controlRow = checkControl(row);
      let controlColumn = checkControl(column);
      if (controlRow === 'X') player1Score++;
      if (controlRow === 'O') player2Score++;
      if (controlColumn === 'X') player1Score++;
      if (controlColumn === 'O') player2Score++;
    }    let winner = player1Score > player2Score ? 'Player 1' : player2Score > player1Score ? 'Player 2' : 'Nobody';
    alert(`${winner} wins!`);
  }
}

drawBoard();

document.getElementById('reset-button').addEventListener('click', () => {
  gameBoard = Array(7).fill(null).map(() => Array(7).fill(null));
  currentPlayer = 'X';
  currentPlayerCards = [];
  drawBoard();
});

// Drawing a card and changing turn
document.getElementById('end-turn-button').addEventListener('click', () => {
  if (cards.length > 0) {
    let drawnCard = cards.splice(Math.floor(Math.random() * cards.length), 1)[0];
    currentPlayerCards.push(drawnCard);
  }
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  currentPlayerCards = [];
  drawBoard();
});

cell.addEventListener('click', () => {
  if (cell.classList.contains('empty')) {
    cell.textContent = currentPlayer;
    cell.classList.remove('empty');
    cell.classList.add(currentPlayer);
    nextTurn();
  }
});

