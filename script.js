const startButton = document.getElementById('start-game');
const resetButton = document.getElementById('reset-game');
const gameArea = document.getElementById('game-area');
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const resultText = document.getElementById('result-text');
const choices = document.querySelectorAll('.choice');

let playerScore = 0;
let computerScore = 0;
let gameStarted = false;

const choicesArray = ['rock', 'paper', 'scissors'];

startButton.addEventListener('click', () => {
  gameStarted = true;
  gameArea.style.display = 'block';
  resetButton.style.display = 'inline-block';
  startButton.style.display = 'none';
  resultText.textContent = 'Make Your Choice!';
});

resetButton.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  resultText.textContent = 'Press Start to Play!';
  gameArea.style.display = 'none';
  resetButton.style.display = 'none';
  startButton.style.display = 'inline-block';
  gameStarted = false;
});

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    if (!gameStarted) {
      resultText.textContent = 'Press Start to Play!';
      return;
    }

    const playerChoice = choice.dataset.choice;
    const computerChoice = choicesArray[Math.floor(Math.random() * 3)];
    determineWinner(playerChoice, computerChoice);
  });
});

function determineWinner(player, computer) {
  if (player === computer) {
    resultText.textContent = `It's a Tie! You both chose ${player}`;
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    resultText.textContent = `You Win! ${player} beats ${computer}`;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    resultText.textContent = `You Lose! ${computer} beats ${player}`;
  }
}
