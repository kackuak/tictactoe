const gridItems = document.querySelectorAll('.grid-item');
let currentPlayer = 'X';
let moves = 0;
let gameEnded = false;

function checkWin(symbol) {
  if (
    (gridItems[0].textContent === symbol && gridItems[1].textContent === symbol && gridItems[2].textContent === symbol) ||
    (gridItems[3].textContent === symbol && gridItems[4].textContent === symbol && gridItems[5].textContent === symbol) ||
    (gridItems[6].textContent === symbol && gridItems[7].textContent === symbol && gridItems[8].textContent === symbol) ||
    (gridItems[0].textContent === symbol && gridItems[3].textContent === symbol && gridItems[6].textContent === symbol) ||
    (gridItems[1].textContent === symbol && gridItems[4].textContent === symbol && gridItems[7].textContent === symbol) ||
    (gridItems[2].textContent === symbol && gridItems[5].textContent === symbol && gridItems[8].textContent === symbol) ||
    (gridItems[0].textContent === symbol && gridItems[4].textContent === symbol && gridItems[8].textContent === symbol) ||
    (gridItems[2].textContent === symbol && gridItems[4].textContent === symbol && gridItems[6].textContent === symbol)
  ) {
    gameEnded = true;
    document.getElementById('message').textContent = symbol + ' wins!';
  } else if (moves === 9) {
    gameEnded = true;
    document.getElementById('message').textContent = 'Tie!';
  }
}

gridItems.forEach(item => {
  item.addEventListener('click', () => {
    if (item.textContent === '' && !gameEnded) {
      item.textContent = currentPlayer;
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      moves++;
      checkWin('X');
      if (!gameEnded) {
        checkWin('O');
      }
    }
  });
});


