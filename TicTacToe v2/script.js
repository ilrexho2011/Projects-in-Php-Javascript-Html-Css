//Declare variables
let currentPlayer = 'X';
let gameEnded = false;
let gameMoves = ['', '', '', '', '', '', '', '', ''];

//Get DOM
document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('td');
  const table = document.querySelector('table');
  const gameScore = document.querySelector('#game-score');
  let player = document.querySelector('#player');
  let text =  document.querySelector('#text');

  //add event listener to table boxes
  boxes.forEach((box, index) =>{
      box.addEventListener('click', ()=>{
          if (!gameEnded && gameMoves[index] === '') {
              gameMoves[index] = currentPlayer;
              box.textContent = currentPlayer;

              //check for winner
              if (gameWin()) {
                  table.style.display = 'none';
                  gameScore.style.display = 'block';
                  player.textContent = currentPlayer;
                  text.textContent = 'FITUES';
                  gameEnded = true;
              }

              //check for tie
              else if (gameTie()) {
                  table.style.display = 'none';
                  gameScore.style.display = 'block';
                  player.textContent = 'X=O';
                  text.textContent = 'BARAZIM';
                  gameEnded = true;
              } else{
                  currentPlayer = currentPlayer === 'X' ? '0' : 'X';
              }
          } 
      });
  });

  //Check for winner function
  const gameWin = ()=>{
      const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],  // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8],  // columns
      [0, 4, 8], [2, 4, 6]              // diagonals
    ];

    return winningCombos.some(combo=>{
      return combo.every(index=>{
          return gameMoves[index] === currentPlayer;
      })
    })
  }

  //Check for tie function
  const gameTie = ()=>{
      return gameMoves.every(move => {
          return move !== '';
      });
  }

  //Reset game function
  const resetGame = ()=>{
    table.style.display = 'block';
    gameScore.style.display = 'none';
    currentPlayer = 'X';
    gameEnded = false;
    gameMoves = ['', '', '', '', '', '', '', '', ''];
    boxes.forEach(box => {
      box.textContent = '';
    });
}

  //Event listener for reset button
  const resetButton = document.getElementById('reset-btn');
  resetButton.addEventListener('click', resetGame);
});
