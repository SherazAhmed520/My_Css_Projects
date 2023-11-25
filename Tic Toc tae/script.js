// Store the current player ('X' or 'O')
let currentPlayer = 'X';

// Get all the cells
const cells = document.querySelectorAll('td');

// Add event listener to each cell
cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

// Function to handle cell click
function handleCellClick(event) {
  // Check if the clicked cell is empty
  if (event.target.textContent === '') {
    // Set the current player's symbol in the clicked cell
    event.target.textContent = currentPlayer;

    // Check if the current player has won
    if (checkWin()) {
      alert(`Player ${currentPlayer} wins!`);
      resetGame();
      return;
    }

    // Switch to the other player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

// Function to check if a player has won
function checkWin() {
  const winningCombinations = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // Rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // Columns
    [1, 5, 9], [3, 5, 7] // Diagonals
  ];

  // Check each winning combination
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      cells[a - 1].textContent === currentPlayer &&
      cells[b - 1].textContent === currentPlayer &&
      cells[c - 1].textContent === currentPlayer
    ) {
      return true;
    }
  }

  return false;
}

// Function to reset the game
function resetGame() {
  cells.forEach(cell => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
}