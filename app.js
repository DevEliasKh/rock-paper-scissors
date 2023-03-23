const buttons = document.querySelectorAll('.buttons button');
const human = document.querySelector('.human');
const computer = document.querySelector('.computer');
const humanScore = document.querySelector('.human_score .score');
const computerScore = document.querySelector('.computer_score .score');
const computerChoice = document.querySelector('.computer_choice');
const humanChoice = document.querySelector('.human_choice');
const final = document.querySelector('.final');
const message = document.querySelector('.message');
const playAgian = document.querySelector('.play_again');

let playerSelection;

buttons.forEach((button) => {
	const choice = button.className;
	button.addEventListener('click', () => {
		playerSelection = choice;
		playRound();
	});
});

let computerSelection;

function playRound() {
	let playersChoice = ['ROCK', 'PAPER', 'SCISSORS'];
	computerSelection = getComputerChoice();
	function getComputerChoice() {
		let randomNum = Math.floor(Math.random() * 3);
		let computerChoices = playersChoice[randomNum];
		return computerChoices;
	}
	if (playerSelection === computerSelection) {
		console.log('Tie game');
	} else if (
		(computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
		(computerSelection === 'PAPER' && playerSelection === 'ROCK') ||
		(computerSelection === 'SCISSORS' && playerSelection === 'PAPER')
	) {
		updateScore('computer');
		console.log(
			`oh ${computerSelection} beats ${playerSelection} you lose this time!, try another round`
		);
	} else if (
		(playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
		(playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
		(playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
	) {
		updateScore('human');
		console.log(
			`YES ${playerSelection} beats ${computerSelection} you win this time!, try another round`
		);
	}
	updateChoice();
	if (computerScore.innerText === '5') {
		final.style.visibility = 'visible';
		message.innerText = `The Winner Is Computer`;
	} else if (humanScore.innerText === '5') {
		final.style.visibility = 'visible';
		message.innerText = `The Winner Is Human`;
	}
}

function updateChoice() {
	humanChoice.innerText = playerSelection;
	computerChoice.innerText = computerSelection;
}
function updateScore(winner) {
	if (winner === 'computer') {
		computerScore.innerText++;
	} else if (winner === 'human') {
		humanScore.innerText++;
	}
}

playAgian.addEventListener('click', () => {
	computerScore.innerText = '0';
	humanScore.innerText = '0';
	final.style.visibility = 'hidden';
	humanChoice.innerText = '';
	computerChoice.innerText = '';
});

// function playRound(playerSelction, computerSelction) {
// 	let choice = ['ROCK', 'PAPER', 'SCISSORS'];
// 	let computerSelection = getComputerChoice();

// 	function getComputerChoice() {
// 		let randomNum = Math.floor(Math.random() * 3);
// 		let computerChoice = choice[randomNum];
// 		return computerChoice;
// 	}
// 	// console.log(computerSelection);

// 	let playerSelection = prompt(
// 		'Choose between Rock, Paper and Secissors'
// 	).toLocaleUpperCase();
// 	// console.log(playerSelection);

// 	if (playerSelection === computerSelection) {
// 		console.log('Tie game');
// 	} else if (
// 		(computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
// 		(computerSelection === 'PAPER' && playerSelection === 'ROCK') ||
// 		(computerSelection === 'SCISSORS' && playerSelection === 'PAPER')
// 	) {
// 		console.log(
// 			`oh ${computerSelection} beats ${playerSelection} you lose this time!, try another round`
// 		);
// 	} else if (
// 		(playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
// 		(playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
// 		(playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
// 	) {
// 		console.log(
// 			`YES ${playerSelection} beats ${computerSelection} you win this time!, try another round`
// 		);
// 	}
// }

// function game() {
// 	for (let i = 0; i < 5; i++) {
// 		playRound();
// 	}
// }
// game();
